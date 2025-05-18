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
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch clubs' },
      { status: 500 }
    );
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
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create club' },
      { status: 500 }
    );
  }
} 