import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = ({menu}) => {
    console.log(menu)
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-2'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-stone-600 font-bold text-base md:text-3xl px-5 border-2 rounded-xl border-slate-500 duration-300"
                  : "text-blue-600 font-bold text-base md:text-2xl px-5  duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all"
              className={({ isActive }) =>
                isActive
                  ? "text-stone-600 font-bold text-base md:text-3xl px-5 border-2 rounded-xl border-slate-500 duration-300"
                  : "text-blue-600 font-bold text-base md:text-2xl px-5  duration-300"
              }
            >
              All Toys
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "text-stone-600 font-bold text-base md:text-3xl px-5 border-2 rounded-xl border-slate-500 duration-300"
                  : "text-blue-600 font-bold text-base md:text-2xl px-5  duration-300"
              }
            >
              Add Toys
            </NavLink>
            <NavLink
              to="/my"
              className={({ isActive }) =>
                isActive
                  ? "text-stone-600 font-bold text-base md:text-3xl px-5 border-2 rounded-xl border-slate-500 duration-300"
                  : "text-blue-600 font-bold text-base md:text-2xl px-5  duration-300"
              }
            >
              My Toys
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-stone-600 font-bold text-base md:text-3xl px-5 border-2 rounded-xl border-slate-500 duration-300"
                  : "text-blue-600 font-bold text-base md:text-2xl px-5 duration-300 "
              }
            >
              Blog
            </NavLink>
          </div>
        </div>
    );
};

export default Nav;