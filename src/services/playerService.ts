import { api } from './api';
import { PaginatedResponse } from '@/types/common';
import { Player, CreatePlayerDTO } from '@/types/player';

export const playerService = {
  // Get all players
  async getAll(): Promise<Player[]> {
    const response = await api.get<PaginatedResponse<Player>>('/players');
    return response.data.content;
  },

  // Create new player
  async create(player: CreatePlayerDTO): Promise<Player> {
    const response = await api.post('/players', player);
    return response.data;
  },
}; 