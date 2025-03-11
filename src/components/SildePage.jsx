import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { BookOpenText, CalendarFold, CircleUserRound, Gamepad2, House, LogOut, MessageCircleHeart, Shield, Wallet } from 'lucide-react';
const SlidePage = () => {
  return (
    <div className="flex h-screen w-20 flex-col justify-between  border-gray-300 shadow-lg">
      {/* Logo */}
      <div className="inline-flex items-center justify-center p-4">
        <img src={logo} alt='logo'></img>
      </div>

      {/* Navigation */}
      <nav className="border-t border-blue-400 px-4 py-2">
        <ul className="space-y-4">
          {/* Home */}
          <li>
            <NavLink
              to="/home"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
             <House />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
                Home
              </span>
            </NavLink>
          </li>

          {/* Profile */}
          <li>
            <NavLink
              to="/profile"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
             <CircleUserRound />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
                Profile
              </span>
            </NavLink>
          </li>
           {/* learn */}
          <li>
            <NavLink
              to="/profile"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
              <BookOpenText />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
               Learn
              </span>
            </NavLink>
          </li>
 {/* chat */}

          <li>
            <NavLink
              to="/profile"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
              <MessageCircleHeart />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
               Chat
              </span>
            </NavLink>
          </li>

          {/* Game */}
          <li>
            <NavLink
              to="/game"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
              <Gamepad2 />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
                Game
              </span>
            </NavLink>
          </li>

          {/* Event */}
          <li>
            <NavLink
              to="/event"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
              <CalendarFold />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
                Event
              </span>
            </NavLink>
          </li>

          {/* Wallet */}
          <li>
            <NavLink
              to="/wallet"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
             <Wallet />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
                Wallet
              </span>
            </NavLink>
          </li>


          {/* store */}
          <li>
            <NavLink
              to="/wallet"
              className="group relative flex justify-center rounded-md px-3 py-2 text-pink-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-300"
            >
             <Shield />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-blue-400 text-white px-3 py-2 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
                Store
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <footer className="border-t border-blue-400 p-2">
        <button className="group relative flex justify-center w-full rounded-md px-3 py-2 text-red-600 hover:bg-red-100 transition ease-in-out duration-300">
        <LogOut />
          <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-md bg-red-600 text-white px-3 py-1.5 text-xs font-semibold group-hover:visible transition opacity-0 group-hover:opacity-100">
            Logout
          </span>
        </button>
      </footer>
    </div>
  );
};

export default SlidePage;
