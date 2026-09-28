import { Bell,CircleUser,Search  } from "lucide-react";
const Navbar = () => {
  return (
    <div className="nav fixed top-0 left-0 w-full z-50 mb-8 bg-[#0B0F16] text-white  p-4 flex items-center justify-between  ">
      <div className="left">
        <h2 className="text-2xl font-bold tracking-widest " >CI<span className="text-red-500   ">N</span>EA</h2>
      </div>
      <div className="middle flex gap-3.5 ">
        <a href="/" className="text-gray-200 " >Home</a>
        <a href="/moviedetails" className="text-gray-200 ">Browser&Genre</a>
        <a href="#" className="text-gray-200 ">WatchList</a>
      </div>
      <div className="right flex gap-2  ">
        <div className="input relative mr-5">
            <p className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C5AAA8] font-bold"><Search/></p>
            <input className=" border-b-2 border-[#A98987] px-5 py-2 rounded pl-12 text-gray-200 outline-0 bg-[#0A0E16]" type="text" placeholder="serch Movie..." />
        </div>
        
        <div className="icons flex items-center justify-between gap-3 mr-2.5 ">
            <Bell />
            <CircleUser/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
