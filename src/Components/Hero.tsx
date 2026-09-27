import {Star} from "lucide-react"
import { FaYoutube } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="pt-20 px-5">
      <div className="relative h-[650px] m-4 border border-white/10  overflow-hidden rounded-xl">
        <img
          className="h-full w-full  object-cover"
          src="https://images.unsplash.com/photo-1556261347-b69c68963b31?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div
      className="absolute inset-x-0 bottom-0
      bg-gradient-to-t from-black via-black/80 to-transparent
      px-5 pb-5 pt-24"
    >
      <h1 className="text-9xl font-bold  tracking-wider text-white  ">
        SPIDER MAN
      </h1>

      <p className="mt-2 line-clamp-2 text-2xl leading-relaxed text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
        cumque!
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
            7.5
          </p>
        </div>

      </div>
    </div>
      </div>
    </div>
  );
};

export default Hero;
