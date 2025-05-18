import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verifica se é uma rota da API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const token = request.cookies.get('auth_token');

    // Se não tiver token, retorna 401
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  // Se não for rota da API ou tiver token, continua normalmente
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/dash/:path*'
  ]
}; 