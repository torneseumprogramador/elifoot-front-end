export interface Stadium {
  id: number;
  name: string;
  city: string;
  capacity: number;
}

export interface CreateStadiumDTO {
  name: string;
  city: string;
  capacity: number;
} 