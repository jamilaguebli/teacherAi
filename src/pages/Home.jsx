import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      
      <div className="flex justify-center items-center mb-6">
        <img
          src={logo}
          alt="MetaAurus Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-4">
        Join MetaAurus
      </h1>
      <p className="text-gray-300 text-center max-w-lg mb-6 text-xl">
        To get started and fully experience our application, you need to connect your wallet.
      </p>

     <NavLink to="/register">
      <button className="relative px-8 py-4 text-lg font-semibold text-white bg-blue-400 rounded-full shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
  <span className="absolute inset-0 w-full h-full bg-pink-500 group-hover:w-0 transition-all duration-300"></span>
  <span className="relative z-10">Connect Wallet</span>
</button>
</NavLink>

    </div>
  );
};

export default Home;
