import {Star} from "lucide-react"
import { FaYoutube } from "react-icons/fa";
import type {Movie} from "../types/movie.ts"

interface HeroProps{
  value:Movie;
}

const Hero = ({value}:HeroProps) => {
  console.log(value.poster_path)
  return (
    <div className=" pt-20 px-5">
      <div className=" group relative h-[650px] m-4 border border-white/10  overflow-hidden rounded-xl">
        <img
          className=" absolute inset-0 h-full w-full  object-cover transition-transform duration-500 group-hover:scale-105 "
          src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
          alt={value.title}
        />
        <div
      className="absolute inset-x-0 bottom-0
      bg-gradient-to-t from-black via-black/80 to-transparent
      px-5 pb-5 pt-24"
    >
      <h1 className="text-7xl font-bold  tracking-wider text-white  ">
      {value.title}
      </h1>

      <p className="mt-2 line-clamp-2 text-xl leading-relaxed text-gray-300">
        {value.overview}
      </p>

      <div className="mt-4 flex items-center justify-between px-3 mb-4">

        
        <div className="flex items-center gap-2 ">
          <FaYoutube className="text-6xl text-red-600 cursor-pointer" />

          <p className="text-6xlfont-medium text-gray-200 cursor-pointer">
            Explore
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <Star
            className="text-2xl h-4 w-4 text-yellow-400"
            fill="currentColor"
          />

          <p className="text-2xl font-bold text-yellow-400">
           {value.vote_average.toFixed(1)}
          </p>
        </div>

      </div>
    </div>
      </div>
    </div>
  );
};

export default Hero;
