export type PlayerPosition =
  | "FORWARD"
  | "MIDFIELDER"
  | "DEFENDER"
  | "GOALKEEPER";

export interface Player {
  id: number;
  name: string;
  position: PlayerPosition;
  shirtNumber: number;
}

export interface CreatePlayerDTO {
  name: string;
  position: PlayerPosition;
  shirtNumber: number;
  clubId: number;
}
