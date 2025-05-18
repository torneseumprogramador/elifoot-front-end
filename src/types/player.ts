export interface Player {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
}

export interface CreatePlayerDTO {
  name: string;
  position: string;
  shirtNumber: number;
} 