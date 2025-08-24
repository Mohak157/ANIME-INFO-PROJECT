import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="w-full absolute top-0  z-50 bg-transparent text-white">
      <nav className="max-w-7xl  px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl text-gray-100 left-0 font-zentry-regular.woff"><b>A</b>NIME <b>I</b>NFO</h1>
        <div className="space-x-6 absolute right-10 text-lg">
          <Link to="/" className="hover:text-gray-300 hover:underline">HOME</Link>
          <a href="#animelist" className="hover:text-gray-300 hover:underline">ANIME LIST</a>
           <Link to="/form" className="hover:text-gray-300 hover:underline">YOUR FAV ANIME</Link>
      
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
