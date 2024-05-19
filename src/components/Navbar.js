import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100" style={{ height: "10vh" }}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><NavLink to="/">Home</NavLink></a></li>
            <li><a><NavLink to="/Services">My Services</NavLink></a></li>
            <li><a><NavLink to="/Project">Projects</NavLink></a></li>
            <li><a><NavLink to="/Skills">My Skills</NavLink></a></li>
            <li><a><NavLink to="/Contact">Contact Me</NavLink></a></li>
          </ul>
        </div>
        <a className="text-xl lg:ms-32 cursor-pointer"><img src="./favicon.png" style={{ width: "3rem" }} alt="Logo" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-12">
          <li><a><NavLink to="/">Home</NavLink></a></li>
          <li><a><NavLink to="/Services">My Services</NavLink></a></li>
          <li><a><NavLink to="/Project">Projects</NavLink></a></li>
          <li><a><NavLink to="/Skills">My Skills</NavLink></a></li>
          <li><a><NavLink to="/Contact">Contact Me</NavLink></a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/Contact" className="btn lg:me-12 bg-purple-500 text-base-200">Hire Me</NavLink>
      </div>
    </div>
  )
}
