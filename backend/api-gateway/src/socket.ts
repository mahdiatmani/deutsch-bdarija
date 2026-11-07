import type { Server as HttpServer } from 'http';
import { verifySession } from './lib/session';
import { Server, Socket } from 'socket.io';
import prisma from './lib/prisma';

const MAX_MESSAGE_LENGTH = 1000;
const MESSAGE_WINDOW_MS = 10_000;
const MAX_MESSAGES_PER_WINDOW = 8;

interface OnlineUser {
  id: string;
  username: string;
  avatar: string | null;
}

interface SocketData {
  user: OnlineUser;
  sentAt: number[];
}

type AppSocket = Socket<any, any, any, SocketData>;

/** Formats a room message the same way the REST history endpoint does. */
export function formatRoomMessage(m: {
  id: string;
  content: string;
  createdAt: Date;
  user: { id: string; username: string; firstName: string | null; lastName: string | null; avatar: string | null };
}) {
  return {
    id: m.id,
    content: decodeLegacyEntities(m.content),
    timestamp: m.createdAt,
    sender: {
      id: m.user.id,
      username: m.user.username,
      name: `${m.user.firstName || ''} ${m.user.lastName || ''}`.trim() || m.user.username,
      avatar: m.user.avatar,
    },
  };
}

/**
 * Messages used to be HTML-escaped before storage, which React then escaped
 * again (users saw "&#x27;" instead of "'"). New messages are stored raw;
 * this decodes the old ones.
 */
function decodeLegacyEntities(content: string) {
  return content
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'");
}

const isRoomId = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0 && value.length <= 64;

export function setupSocket(httpServer: HttpServer, allowedOrigins: string[]) {
  const io = new Server(httpServer, {
    cors: { origin: allowedOrigins, methods: ['GET', 'POST'], credentials: true },
  });

  // userId -> number of open sockets, so multiple tabs count as one presence
  const connectionCounts = new Map<string, number>();
  const onlineUsers = new Map<string, OnlineUser>();
  const knownRooms = new Set<string>();

  const roomExists = async (roomId: string) => {
    if (knownRooms.has(roomId)) return true;
    const room = await prisma.chatRoom.findUnique({ where: { id: roomId }, select: { id: true } });
    if (room) knownRooms.add(roomId);
    return !!room;
  };

  io.use(async (socket: AppSocket, next) => {
    const token = socket.handshake.auth?.token || socket.handshake.headers.authorization?.split(' ')[1];
    if (!token) return next(new Error('Authentication required'));

    try {
      const session = await verifySession(token);
      if (!session) return next(new Error('Invalid token'));
      const { userId } = session;
      // Identity comes from the database, never from what the client claims
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, username: true, avatar: true },
      });
      if (!user) return next(new Error('Invalid token'));
      socket.data = { user, sentAt: [] };
      next();
    } catch {
      next(new Error('Invalid token'));
    }
  });

  io.on('connection', (socket: AppSocket) => {
    const { user } = socket.data;

    const count = (connectionCounts.get(user.id) ?? 0) + 1;
    connectionCounts.set(user.id, count);
    if (count === 1) {
      onlineUsers.set(user.id, user);
      socket.broadcast.emit('user_joined', user);
    }
    socket.emit('online_users', Array.from(onlineUsers.values()));

    // Kept for older clients; presence is tracked from the authenticated connection
    socket.on('user_online', () => socket.emit('online_users', Array.from(onlineUsers.values())));

    socket.on('join_room', async (roomId: unknown) => {
      if (isRoomId(roomId) && (await roomExists(roomId))) socket.join(roomId);
    });

    socket.on('leave_room', (roomId: unknown) => {
      if (isRoomId(roomId)) socket.leave(roomId);
    });

    socket.on('typing', (data: { roomId?: unknown }) => {
      if (isRoomId(data?.roomId) && socket.rooms.has(data.roomId)) {
        socket.to(data.roomId).emit('user_typing', { userId: user.id, username: user.username, roomId: data.roomId });
      }
    });

    socket.on('stop_typing', (data: { roomId?: unknown }) => {
      if (isRoomId(data?.roomId) && socket.rooms.has(data.roomId)) {
        socket.to(data.roomId).emit('user_stop_typing', { userId: user.id, roomId: data.roomId });
      }
    });

    socket.on('send_message', async (data: { roomId?: unknown; content?: unknown }) => {
      try {
        const roomId = data?.roomId;
        const content = typeof data?.content === 'string' ? data.content.trim() : '';
        if (!isRoomId(roomId) || !content || content.length > MAX_MESSAGE_LENGTH) return;
        if (!socket.rooms.has(roomId) && !(await roomExists(roomId))) return;

        const now = Date.now();
        socket.data.sentAt = socket.data.sentAt.filter(t => now - t < MESSAGE_WINDOW_MS);
        if (socket.data.sentAt.length >= MAX_MESSAGES_PER_WINDOW) {
          socket.emit('error_message', { code: 'RATE_LIMIT_EXCEEDED', message: 'You are sending messages too fast.' });
          return;
        }
        socket.data.sentAt.push(now);

        const message = await prisma.roomMessage.create({
          data: { content, roomId, userId: user.id },
          include: { user: { select: { id: true, username: true, firstName: true, lastName: true, avatar: true } } },
        });
        io.to(roomId).emit('receive_message', formatRoomMessage(message));
      } catch (error) {
        console.error('Error sending message:', error);
      }
    });

    socket.on('disconnect', () => {
      const remaining = (connectionCounts.get(user.id) ?? 1) - 1;
      if (remaining > 0) {
        connectionCounts.set(user.id, remaining);
        return;
      }
      connectionCounts.delete(user.id);
      onlineUsers.delete(user.id);
      io.emit('user_left', user.id);
    });
  });

  return io;
}
