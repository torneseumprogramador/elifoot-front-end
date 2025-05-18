export interface Club {
  id: number;
  name: string;
  founded: string;
  stadiumId?: number;
}

export interface CreateClubDTO {
  name: string;
  founded: string; // formato: YYYY-MM-DD
  stadiumId: number;
}
