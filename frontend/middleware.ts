import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
  '/today',
  '/courses',
  '/ai-teacher',
  '/community',
  '/leaderboard',
  '/profile',
  '/settings',
  '/games',
  '/tests',
];

const authRoutes = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for auth token in cookies or localStorage isn't available in middleware,
  // so we check for a custom cookie that the client sets on login
  const authToken = request.cookies.get('auth-token')?.value;

  // Check if accessing a protected route without auth
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  if (isProtectedRoute && !authToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users away from auth pages
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
  if (isAuthRoute && authToken) {
    return NextResponse.redirect(new URL('/today', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/today/:path*',
    '/courses/:path*',
    '/ai-teacher/:path*',
    '/community/:path*',
    '/leaderboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/games/:path*',
    '/tests/:path*',
    '/login',
    '/signup',
  ],
};
