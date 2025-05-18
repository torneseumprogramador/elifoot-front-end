import { api } from "./api";
import { Stadium, CreateStadiumDTO } from "@/types/stadium";
import { PaginatedResponse } from "@/types/common";

export const stadiumService = {
  // Get all stadiums
  async getAll(): Promise<Stadium[]> {
    const response = await api.get<PaginatedResponse<Stadium>>("/stadiums");
    return response.data.content;
  },

  // Create new stadium
  async create(stadium: CreateStadiumDTO): Promise<Stadium> {
    const response = await api.post("/stadiums", stadium);
    return response.data;
  },
};
