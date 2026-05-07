import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy — runs before routes are rendered.
 *
 * Auth.js sets an encrypted session cookie. Verifying it cryptographically
 * here would require importing Node.js-only modules (not allowed in proxy).
 * Instead we do a lightweight cookie-presence check for fast redirects.
 *
 * The actual auth verification (auth() → redirect) is done server-side
 * inside app/admin/(protected)/layout.tsx — this is just a first-pass guard.
 *
 * Cookie names used by Auth.js v5:
 *   - Development  : authjs.session-token
 *   - Production   : __Secure-authjs.session-token
 */

const SESSION_COOKIE_NAME =
  process.env.NODE_ENV === 'production'
    ? '__Secure-authjs.session-token'
    : 'authjs.session-token';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin/* routes
  if (!pathname.startsWith('/admin')) return NextResponse.next();

  // Login page is always accessible
  if (pathname === '/admin/login') return NextResponse.next();

  // Allow if session cookie is present (layout will verify cryptographically)
  if (request.cookies.has(SESSION_COOKIE_NAME)) return NextResponse.next();

  // No session cookie — redirect to login
  const loginUrl = new URL('/admin/login', request.url);
  loginUrl.searchParams.set('callbackUrl', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin/:path*'],
};
