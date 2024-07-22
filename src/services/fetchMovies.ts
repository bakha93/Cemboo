import { instance } from "./instance";
import { Movie } from "@/types";
export const fetchMovie = async () => {
  try {
    const { data } = await instance.get<Movie[]>(`/movies/`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
