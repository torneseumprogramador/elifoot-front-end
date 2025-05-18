import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
  try {
    const token_cookie = "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjpbImFkbWluOmFsbCJdLCJpc3MiOiJlbGlmb290LWFwaSIsImV4cCI6MTc0NzU3NDM0NSwiaWF0IjoxNzQ3NTczNzQ1LCJlbWFpbCI6ImFkbWluQGphdmExMHgifQ.oDCP6pULSzF0HkdO5iS87vXMLpNViC7G1mrXpEPkjdwrbPlUtElQvAjcbySjjya8wmA0PqsnayVctxW5WefD-uBVlVx6TzbsKU67K36K0uRGzJj6I3MEbxJeeySgEv6fONuRiUcCCvQWqkGjG93mC3iqKw7_Xi-6fIONzkRk47Adtwnbs4ouQJmBpCTzzb_cMGgHiL0suZCjbGp3P1nlzRuEWItZrpqo1Dj9LRZA7yQQBRFJrB4UAsJZuCsOGA2syMYqo4KXHtoIrMfihfQsdLYzNtrx9L82wc61CL1W0BLX2dwC4AK6J7ZPy6Fx4tNDUa9WMpuf9rYko8iE4tMtBg";
    const response = await fetch(`${API_URL}/clubs`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token_cookie}`
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
    const body = await request.json();

    const response = await fetch(`${API_URL}/clubs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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