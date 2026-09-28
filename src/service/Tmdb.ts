import axios from "axios";
import type { GenreResponse,Genre,Movie,MovieResponse } from "../types/movie"; 


const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const getPopularMovies = async ():Promise<Movie[]> => {
  const response = await tmdb.get<MovieResponse>("/movie/popular")
  return response.data.results
};

export const getAllGenreMovie=async()=>{
  const response=await tmdb.get("/genre/movie/list")
  return response.data.genres
}

