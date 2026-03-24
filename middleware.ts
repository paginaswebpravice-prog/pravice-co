import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const userAgent = request.headers.get("user-agent") || "";

  // Bloquear bots básicos
  if (
    userAgent.includes("bot") ||
    userAgent.includes("curl") ||
    userAgent.includes("python") ||
    userAgent.includes("wget") ||
    userAgent === ""
  ) {
    return new NextResponse("Blocked", { status: 403 });
  }

  // Bloquear rutas típicas de WordPress
  if (
    path.startsWith("/wp-admin") ||
    path.startsWith("/wp-login") ||
    path.startsWith("/wp-json") ||
    path.startsWith("/xmlrpc") ||
    path.startsWith("/wp-content") ||
    path.startsWith("/wp-includes")
  ) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
