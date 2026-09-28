import { Star } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

import type { Movie } from "../types/movie";
import type { singleCardProps } from "./MovieRows.tsx";

const MovieCard = ({ card }: singleCardProps) => {
  console.log(card);
  return (
    <div className="group  relative h-[320px] w-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#0A0E16] shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <img
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={`https://image.tmdb.org/t/p/w500${card.movie.poster_path}`}
        alt=""
      />

      <div
        className="absolute inset-x-0 bottom-0
      bg-gradient-to-t from-black via-black/80 to-transparent
      p-5 pt-24"
      >
        <h2 className="text-2xl font-bold tracking-wide text-white">
          {card.movie.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-300">
          {card.movie.overview}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaYoutube className="text-2xl text-red-600 cursor-pointer" />

            <p className="text-sm font-medium text-gray-200 cursor-pointer">
              Explore
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />

            <p className="text-sm font-bold text-yellow-400">{card.movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
//#10131A
