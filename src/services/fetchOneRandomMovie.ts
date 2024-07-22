import { instance } from "./instance";
import { Movie } from "@/types";
export const fetchOneRandomMovie = async () => {
  const rundomNumFomOneToFifteen = Math.floor(Math.random() * 15) + 1;
  try {
    const { data } = await instance.get<Movie>(
      `/movies/${rundomNumFomOneToFifteen}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
