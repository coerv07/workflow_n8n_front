import { NextRequest } from "next/server";

async function proxy(req: NextRequest, path: string[]) {
  const url =
    `${process.env.API_INTERNAL_URL}/` +
    path.join("/") +
    req.nextUrl.search;

  try {
    const headers = new Headers();

    headers.set(
      "content-type",
      req.headers.get("content-type") || "application/json"
    );

    const auth = req.headers.get("authorization");
    if (auth) headers.set("authorization", auth);

    const cookie = req.headers.get("cookie");
    if (cookie) headers.set("cookie", cookie);

    const body =
      req.method === "GET" || req.method === "HEAD"
        ? undefined
        : await req.text();

    const response = await fetch(url, {
      method: req.method,
      headers,
      body,
    });

    const responseBody = await response.text();

    return new Response(responseBody, {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") || "application/json",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(
      JSON.stringify({ message: "Proxy internal error" }),
      { status: 500 }
    );
  }
}

/* ============================
   HANDLERS (IMPORTANTE)
============================ */

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxy(req, path);
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxy(req, path);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxy(req, path);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return proxy(req, path);
}
