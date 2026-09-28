import { createContext,useContext ,useState,useEffect  } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types/movie";
import {getPopularMovies,getAllGenreMovie} from "../service/Tmdb.ts"

interface MovieContextType{
    popularMovies:Movie[],
    loading:boolean
}

const MovieContext=createContext<MovieContextType | undefined>(undefined)

interface MovieProviderProps{
    children:ReactNode
}

export const MovieProvider=({children}:MovieProviderProps) =>{
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [allGenreMovie,setAllGenreMovie]=useState<Movie[]>([])
    const [loading ,setLoading]=useState<boolean>(true)

     useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popular = await getPopularMovies();
        const allGenre=await getAllGenreMovie()

        setPopularMovies(popular);
        
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        loading
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export {MovieContext}