type CastMember = {
  name: string;
  role: string;
};

export type Movie = {
  id: string;
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  cast: CastMember[];
  rating: number;
  duration_minutes: number;
  synopsis: string;
  thumbnail_horizontal: string;
  thumbnail_vertical: string;
};
