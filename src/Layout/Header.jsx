import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-scroll";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const links = <>
        <Link className="mr-4" spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="home"><li className='hover:cursor-pointer   text-base font-semibold' >Home</li></Link>
        <Link className="mr-4" to="about-me" spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " ><li className='hover:cursor-pointer  text-base font-semibold' >About_Me</li></Link>
        <Link className="mr-4" spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="skill"><li className='hover:cursor-pointer  text-base font-semibold' >Skill</li></Link>
        <Link className="mr-4" spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="projects"><li className='hover:cursor-pointer  text-base font-semibold' >Projects</li></Link>
        <Link className="mr-4" spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="contact-me"><li className='hover:cursor-pointer  text-base font-semibold' >Contact_Me</li></Link>


    </>
    return (

        <div className="sticky top-0 bg-sky-100 z-50">
            <div className='w-11/12 mx-auto   '>


                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <a className="px-4 py-2 rounded-sm bg-green-600 text-white text-lg hover:bg-green-800 hover:scale-105" href='https://wa.me/8801791669909?text=Hi%20there%2C%20I%27m%20interested%20in%20working%20with%20you!' target="_blank">Hire Me</a>


                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={80}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;