import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_URL = process.env.API_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.message || "Authentication failed",
          path: "/login",
          status: response.status,
          timestamp: new Date().toISOString(),
        },
        { status: response.status },
      );
    }

    return NextResponse.json(
      {
        ...data,
        path: "/login",
        status: 200,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        path: "/login",
        status: 500,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
