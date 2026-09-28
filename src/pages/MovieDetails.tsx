import React, { useState, type ButtonHTMLAttributes } from "react";
import Navbar from "../Components/Navbar";
import MovieRows from "../Components/MovieRows";
import { useContext } from 'react'
import { MovieContext } from '../context/movieContex'
const MovieDetails = () => {
  const [selected,setSelected]=useState<string>("All Catagory")
  const contex=useContext(MovieContext)
  if(!contex){
    throw new Error ("MovieContext is missing")
  }
  const {popularMovies, loading}=contex

  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(e.currentTarget.innerText)
    setSelected(e.currentTarget.innerText)
  }
  const genreMap: Record<string, number> = {
    Action: 28,
    Comedy: 35,
    Horror: 27,
    "Sci-Fi": 878,
    Romance: 10749,
  };
   const filteredMovies=
   selected==="All Catagory"
   ? popularMovies
   :popularMovies.filter((movie)=>{
    return movie.genre_ids.includes(genreMap[selected])
   })
  return (
    <div className="bg-[#10131A] h-screen">
      <Navbar />
      <div className=" option pt-22 p-5  flex gap-4 w-full items-center justify-center bg-[#0E1118] ">
        <button
        onClick={handleClick}
         className={`bg-[#272A31] px-4 py-2 rounded-xl text-white cursor-pointer ${selected==="All Catagory" ? "bg-red-500" :""}  `}>
          All Catagory
        </button>

        <button 
         onClick={handleClick}
       className={`bg-[#272A31] px-4 py-2 rounded-xl text-white cursor-pointer ${selected==="Action" ? "bg-red-500" :""}  `}>
          Action
        </button>
        <button 
         onClick={handleClick}
        className={`bg-[#272A31] px-4 py-2 rounded-xl text-white cursor-pointer ${selected==="Comedy" ? "bg-red-500" :""}  `}>
          Comedy
        </button>
        <button 
         onClick={handleClick}
        className={`bg-[#272A31] px-4 py-2 rounded-xl text-white cursor-pointer ${selected==="Horror" ? "bg-red-500" :""}  `}>
          Horror
        </button>
        <button 
         onClick={handleClick}
        className={`bg-[#272A31] px-4 py-2 rounded-xl text-white cursor-pointer ${selected==="Sci-Fi" ? "bg-red-500 transition-transform duration-75" :""}  `}>
          Sci-Fi
        </button>
        <button 
         onClick={handleClick}
        className={`bg-[#272A31] px-4 py-2 rounded-xl text-white cursor-pointer ${selected==="Romance" ? "bg-red-500" :""}  `}>
          Romance
        </button>
      </div>
      <MovieRows values={filteredMovies} />
    </div>
  );
};

export default MovieDetails;
