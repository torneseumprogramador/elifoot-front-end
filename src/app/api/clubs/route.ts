import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token');

    const response = await fetch(`${API_URL}/clubs`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        error: data.message || 'Failed to fetch clubs',
        path: '/clubs',
        status: response.status,
        timestamp: new Date().toISOString()
      }, { status: response.status });
    }

    return NextResponse.json({
      ...data,
      path: '/clubs',
      status: 200,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Internal Server Error',
      path: '/clubs',
      status: 500,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token');
    const body = await request.json();

    const response = await fetch(`${API_URL}/clubs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        error: data.message || 'Failed to create club',
        path: '/clubs',
        status: response.status,
        timestamp: new Date().toISOString()
      }, { status: response.status });
    }

    return NextResponse.json({
      ...data,
      path: '/clubs',
      status: 201,
      timestamp: new Date().toISOString()
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      error: 'Internal Server Error',
      path: '/clubs',
      status: 500,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 