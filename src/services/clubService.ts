import { api } from './api';
import { Club, CreateClubDTO } from '@/types/club';

export const clubService = {
  // Get all clubs
  async getAll(): Promise<Club[]> {
    const response = await api.get('/clubs');
    return response.data;
  },

  // Get club by ID
  async getById(id: string): Promise<Club> {
    const response = await api.get(`/clubs/${id}`);
    return response.data;
  },

  // Create new club
  async create(club: CreateClubDTO): Promise<Club> {
    const response = await api.post('/clubs', club);
    return response.data;
  },

  // Update club
  async update(id: string, club: Partial<CreateClubDTO>): Promise<Club> {
    const response = await api.put(`/clubs/${id}`, club);
    return response.data;
  },

  // Delete club
  async delete(id: string): Promise<void> {
    await api.delete(`/clubs/${id}`);
  }
}; 