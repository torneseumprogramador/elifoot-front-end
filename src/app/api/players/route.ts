import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
  try {
    // TODO pegar do cookie
    const token_cookie = "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjpbImFkbWluOmFsbCJdLCJpc3MiOiJlbGlmb290LWFwaSIsImV4cCI6MTc0NzU3MjU3NSwiaWF0IjoxNzQ3NTcxOTc1LCJlbWFpbCI6ImFkbWluQGphdmExMHgifQ.CQ9C--l-4X0N1BgL3Y7BYrzjR2ei5ENgQSZHEsKJBMmBxPe6cAwx4Z83ZnPqTqoWEiCv2GM2PCn6eD_wZzZBJQmPz8zeTqZuudlZjL_7ZCDPZhVGqs6RzmTvlj5c3XhyyrDCqu02y91OlA_NSsOCQIIHhsHhBwC5EspFKurYGxilOj3FJKuvncMgmiQwpwcDzw7ISF4-6KePu1x_-W1LqLueQGR3P9VxtRJZOtk39TdW93AKfX7L9FvF6Z2U3ecoQsJwsnuf8A7-hsvSSPONIb9r23xz6PF_rI0jp7M3_IJuXLnXHdn0Mia9WWqLHQosRvS_SIZ7MEamIC9IUtVlLA";
    const response = await fetch(`${API_URL}/players`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token_cookie}`
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch players' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_URL}/players`, {
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
      { error: 'Failed to create player' },
      { status: 500 }
    );
  }
} 