export interface Stadium {
  id: string;
  name: string;
  city: string;
  capacity: string;
  imageUrl: string;
}

export interface CreateStadiumDTO {
  name: string;
  city: string;
  capacity: string;
  imageUrl: string;
} 