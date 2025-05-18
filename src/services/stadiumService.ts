import { api } from './api';
import { Stadium, CreateStadiumDTO } from '@/types/stadium';

export const stadiumService = {
  // Get all stadiums
  async getAll(): Promise<Stadium[]> {
    const response = await api.get('/stadiums');
    return response.data;
  },

  // Get stadium by ID
  async getById(id: string): Promise<Stadium> {
    const response = await api.get(`/stadiums/${id}`);
    return response.data;
  },

  // Create new stadium
  async create(stadium: CreateStadiumDTO): Promise<Stadium> {
    const response = await api.post('/stadiums', stadium);
    return response.data;
  },

  // Update stadium
  async update(id: string, stadium: Partial<CreateStadiumDTO>): Promise<Stadium> {
    const response = await api.put(`/stadiums/${id}`, stadium);
    return response.data;
  },

  // Delete stadium
  async delete(id: string): Promise<void> {
    await api.delete(`/stadiums/${id}`);
  }
}; 