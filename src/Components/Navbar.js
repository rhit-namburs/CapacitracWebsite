import React, { useState } from "react";
import {
  AiFillDashboard,
  AiFillSetting,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar({ name, signOutFunction, isAdmin }) {
  const [nav, setNavBar] = useState(true);

  const handleNav = () => {
    setNavBar(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-black border-b-2 border-b-blue">
      <div className="text-5xl font-bold text-black">Capacitrac</div>
      <ul className="space-x-6 hidden md:flex">
        <Link to="/dashboard">
          <div className="flex flex-col-reverse items-center">
            <li>Dashboard</li>
            <AiFillDashboard size={40} />
          </div>
        </Link>

        <Link to="/visualization">
          <div className="flex flex-col-reverse items-center">
            <li>Visualization</li>
            <BsGraphUp size={40} />
          </div>
        </Link>
        {isAdmin && (
          <Link to="/organization">
            <div className="flex flex-col-reverse items-center">
              <li>Organization</li>
              <RiTeamFill size={40} />
            </div>
          </Link>
        )}
        <Link to="/setting">
          <div className="flex flex-col-reverse items-center">
            <li>Setting</li>
            <AiFillSetting size={40} />
          </div>
        </Link>
      </ul>
      <div className="flex flex-col invisible md:visible">
        <h1 className="font-bold">{name}</h1>
        <div
          className="py-2 rounded-full justify-center text-center"
          onClick={signOutFunction}
        >
          <button className="text-black">SIGN OUT</button>
        </div>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-black m-4">Capacitrac</h1>
        <ul className="uppercase p-4">
          <Link to="/dashboard" action="replace">
            <li className="p-4 border-b border-gray-600">Dashboard</li>
          </Link>

          <Link to="/visualization" action="replace">
            <li className="p-4 border-b border-gray-600">Visualization</li>
          </Link>
          <Link to="/organization" action="replace">
            <li className="p-4 border-b border-gray-600">Organization</li>
          </Link>
          <Link to="/setting">
            <li className="p-4">Setting</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
