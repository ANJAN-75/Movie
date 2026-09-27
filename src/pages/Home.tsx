
import Navbar from '../Components/Navbar'
import MovieRows from '../Components/MovieRows'
import Hero from '../Components/Hero'
const Home = () => {
  return (
    <div className='bg-[#10131A]'>
        <Navbar/>
        <Hero/>
        <MovieRows/>
    </div>
  )
}

export default Home