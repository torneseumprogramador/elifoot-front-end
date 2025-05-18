import { api } from './api';
import { LoginRequest, LoginResponse } from '@/types/auth';
import Cookies from 'js-cookie';

const AUTH_TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRATION_KEY = 'token_expiration';

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/login', credentials);
    const { accessToken, expiresIn } = response.data;

    // Calcula a data de expiração
    const expirationDate = new Date(Date.now() + expiresIn * 1000);

    // Salva o token e a data de expiração nos cookies
    Cookies.set(AUTH_TOKEN_KEY, accessToken, { expires: expirationDate });
    Cookies.set(TOKEN_EXPIRATION_KEY, expirationDate.toISOString(), { expires: expirationDate });

    return response.data;
  },

  logout(): void {
    Cookies.remove(AUTH_TOKEN_KEY);
    Cookies.remove(TOKEN_EXPIRATION_KEY);
  },

  getToken(): string | undefined {
    return Cookies.get(AUTH_TOKEN_KEY);
  },

  isAuthenticated(): boolean {
    const token = this.getToken();
    const expiration = Cookies.get(TOKEN_EXPIRATION_KEY);

    if (!token || !expiration) {
      return false;
    }

    // Verifica se o token ainda é válido
    return new Date(expiration) > new Date();
  }
}; 