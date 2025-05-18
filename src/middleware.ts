import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verifica se é uma rota da API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Lista de rotas públicas da API que não precisam de autenticação
    const publicRoutes = ['/api/login'];
    
    // Se for uma rota pública, permite o acesso
    if (publicRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
      return NextResponse.next();
    }

    const token = request.cookies.get('auth_token');
    // Se não tiver token, retorna 401
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - Authentication required' },
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