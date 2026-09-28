
import Navbar from '../Components/Navbar'
import MovieRows from '../Components/MovieRows'
import Hero from '../Components/Hero'
import { useContext } from 'react'
import { MovieContext } from '../context/movieContex'
const Home = () => {

  const context=useContext(MovieContext)
  if (!context) {
  throw new Error("MovieContext is missing");
}

const { popularMovies, loading } = context;
console.log(popularMovies)
  return (
    <div className='bg-[#10131A]'>
        <Navbar/>

        {
          popularMovies.length>0 &&
          <Hero value={popularMovies[0]} />
        }
        {
          popularMovies.length>0 &&
          <MovieRows values={popularMovies}/>
        }
        
    </div>
  )
}

export default Home