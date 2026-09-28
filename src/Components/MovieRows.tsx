import type { Movie } from '../types/movie'
import MovieCard from './MovieCard'

interface MovieCardsProps{
  values:Movie[]
}
export interface singleCardProps{
  card:Movie
}

const MovieRows = ({values}:MovieCardsProps) => {
  console.log("Movie rows"+values)
  return (
    <div className='pt-10 p-8  flex items-center justify-center flex-wrap gap-7 bg-[#10131A]  '>
        
        {
          values.map((movie)=>(
            <MovieCard  card={{movie}}/>
          ))
        }
    </div>
  )
}

export default MovieRows