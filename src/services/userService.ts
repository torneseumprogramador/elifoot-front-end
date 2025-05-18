import { api } from './api';
import { User, CreateUserDTO } from '@/types/user';

export const userService = {
  async create(user: CreateUserDTO): Promise<User> {
    const response = await api.post('/users', user);
    return response.data;
  }
}; 