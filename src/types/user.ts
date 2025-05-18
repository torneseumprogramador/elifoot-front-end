export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  scopes: number[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  scopes: (string | null)[];
} 