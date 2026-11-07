import { Request, Response, NextFunction } from 'express';
import { verifySession, type Session } from '../lib/session';

export interface AuthRequest extends Request {
  user?: Session;
  userId?: string;
}

const bearer = (req: Request) => {
  const [scheme, token] = (req.headers.authorization ?? '').split(' ');
  return scheme === 'Bearer' && token ? token : null;
};

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = bearer(req);
  if (!token) return res.status(401).json({ success: false, message: 'No token provided', code: 'UNAUTHORIZED' });

  try {
    const session = await verifySession(token);
    if (!session) {
      return res.status(401).json({ success: false, message: 'Invalid or expired token', code: 'UNAUTHORIZED' });
    }
    req.user = session;
    req.userId = session.userId;
    next();
  } catch (error) {
    next(error); // database trouble is a 500, not a logout
  }
};

export const authorizeAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Forbidden: Admin access required', code: 'FORBIDDEN' });
  }
  next();
};

export const optionalAuthenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const session = await verifySession(bearer(req));
    if (session) {
      req.user = session;
      req.userId = session.userId;
    }
  } catch {
    // Proceed as unauthenticated
  }
  next();
};
