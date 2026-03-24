import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.toLowerCase();
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // =========================
  // BLOQUEAR BOTS Y SCANNERS
  // =========================
  const blockedAgents = [
    "bot",
    "crawl",
    "spider",
    "curl",
    "python",
    "wget",
    "scrapy",
    "node",
    "axios",
    "postman",
    "httpclient",
    "scanner",
    "sqlmap",
    "nikto",
  ];

  if (
    blockedAgents.some((agent) => userAgent.includes(agent)) ||
    userAgent === ""
  ) {
    return new NextResponse("Blocked", { status: 403 });
  }

  // =========================
  // BLOQUEAR RUTAS WORDPRESS
  // =========================
  const blockedPaths = [
    "/wp-admin",
    "/wp-login",
    "/wp-json",
    "/xmlrpc",
    "/wp-content",
    "/wp-includes",
    "/admin-ajax",
  ];

  if (blockedPaths.some((blocked) => path.startsWith(blocked))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // =========================
  // BLOQUEAR ARCHIVOS SENSIBLES
  // =========================
  const blockedFiles = [
    ".env",
    ".git",
    "config",
    "backup",
    "phpmyadmin",
    ".sql",
    ".zip",
  ];

  if (blockedFiles.some((file) => path.includes(file))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
