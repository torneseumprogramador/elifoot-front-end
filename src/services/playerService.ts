import { api } from './api';
import { PaginatedResponse } from '@/types/common';
import { Player, CreatePlayerDTO } from '@/types/player';

export const playerService = {
  // Get all players
  async getAll(): Promise<Player[]> {
    const response = await api.get<PaginatedResponse<Player>>('/players');
    return response.data.content;
  },

  // Get player by ID
  async getById(id: number): Promise<Player> {
    const response = await api.get(`/players/${id}`);
    return response.data;
  },

  // Create new player
  async create(player: CreatePlayerDTO): Promise<Player> {
    const response = await api.post('/players', player);
    return response.data;
  },

  // Update player
  async update(id: number, player: Partial<CreatePlayerDTO>): Promise<Player> {
    const response = await api.put(`/players/${id}`, player);
    return response.data;
  },

  // Delete player
  async delete(id: number): Promise<void> {
    await api.delete(`/players/${id}`);
  }
}; 