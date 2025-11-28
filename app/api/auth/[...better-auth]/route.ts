// // app/api/auth/[...all]/route.ts
// import { auth } from "@/lib/auth";
// import { toNextJsHandler } from "better-auth/next-js";

// export const { GET, POST } = toNextJsHandler(auth.handler);




// app/api/dummy/route.ts

export async function GET(req: Request) {
  return new Response(JSON.stringify({ message: "GET request received" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  return new Response(JSON.stringify({ message: "POST request received" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Optional: handle other methods
export async function PUT(req: Request) {
  return new Response(JSON.stringify({ message: "PUT request received" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req: Request) {
  return new Response(JSON.stringify({ message: "DELETE request received" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
