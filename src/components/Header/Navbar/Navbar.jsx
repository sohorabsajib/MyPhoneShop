import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6 shadow-md px-5">
        <Logo></Logo>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline":""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ?  "text-green-400 underline":""
              }
            >
              Favourites
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ?  "text-green-400 underline":""
              }
            >
              Login
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
