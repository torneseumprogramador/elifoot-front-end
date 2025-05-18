import { api } from './api';
import { Club, CreateClubDTO } from '@/types/club';
import { PaginatedResponse } from '@/types/common';

export const clubService = {
  // Get all clubs
  async getAll(): Promise<Club[]> {
    const response = await api.get<PaginatedResponse<Club>>('/clubs');
    return response.data.content;
  },

  // Get club by ID
  async getById(id: number): Promise<Club> {
    const response = await api.get(`/clubs/${id}`);
    return response.data;
  },

  // Create new club
  async create(club: CreateClubDTO): Promise<Club> {
    const response = await api.post('/clubs', club);
    return response.data;
  },

  // Update club
  async update(id: number, club: Partial<CreateClubDTO>): Promise<Club> {
    const response = await api.put(`/clubs/${id}`, club);
    return response.data;
  },

  // Delete club
  async delete(id: number): Promise<void> {
    await api.delete(`/clubs/${id}`);
  }
}; 