export interface Club {
  id: string;
  name: string;
  location: string;
  foundingDate: string;
  imageUrl: string;
}

export interface CreateClubDTO {
  name: string;
  location: string;
  foundingDate: string;
  imageUrl: string;
} 