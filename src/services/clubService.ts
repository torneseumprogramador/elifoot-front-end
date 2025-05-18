import { api } from './api';
import { Club, CreateClubDTO } from '@/types/club';
import { PaginatedResponse } from '@/types/common';

export const clubService = {
  // Get all clubs
  async getAll(): Promise<Club[]> {
    const response = await api.get<PaginatedResponse<Club>>('/clubs');
    return response.data.content;
  },

  // Create new club
  async create(club: CreateClubDTO): Promise<Club> {
    const response = await api.post('/clubs', club);
    return response.data;
  },
}; 