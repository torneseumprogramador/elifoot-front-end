import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("auth_token");

    const response = await fetch(`${API_URL}/stadiums`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.message || "Failed to fetch stadiums",
          path: "/stadiums",
          status: response.status,
          timestamp: new Date().toISOString(),
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      ...data,
      path: "/stadiums",
      status: 200,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        path: "/stadiums",
        status: 500,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("auth_token");
    const body = await request.json();

    const response = await fetch(`${API_URL}/stadiums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.message || "Failed to create stadium",
          path: "/stadiums",
          status: response.status,
          timestamp: new Date().toISOString(),
        },
        { status: response.status },
      );
    }

    return NextResponse.json(
      {
        ...data,
        path: "/stadiums",
        status: 201,
        timestamp: new Date().toISOString(),
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        path: "/stadiums",
        status: 500,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
