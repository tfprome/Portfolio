import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme')==='dark';
    });
    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    },[isDarkMode])
    const links = <>
        <Link className="mr-4 hover:bg-blue-400 hover:text-white hover:btn-xs hover:rounded-lg" 
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="/"><li className='hover:cursor-pointer   text-base font-semibold' >Home</li></Link>
        <Links className="mr-4 hover:bg-blue-400 hover:text-white hover:btn-xs hover:rounded-lg transition-all ease-in-out " to="about-me" spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " ><li className='hover:cursor-pointer  text-base font-semibold' >About_Me</li></Links>
        <Links className="mr-4 hover:bg-blue-400 hover:text-white hover:btn-xs hover:rounded-lg transition-all ease-in-out " spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="skill"><li className='hover:cursor-pointer  text-base font-semibold' >Skill</li></Links>
        <Links className="mr-4 hover:bg-blue-400 hover:text-white hover:btn-xs hover:rounded-lg transition-all ease-in-out " spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="projects"><li className='hover:cursor-pointer  text-base font-semibold' >Projects</li></Links>
        <Links className="mr-4 hover:bg-blue-400 hover:text-white hover:btn-xs hover:rounded-lg transition-all ease-in-out " spy={true}
            activeClass=" bg-sky-500 text-white rounded-lg px-2 " to="contact-me"><li className='hover:cursor-pointer  text-base font-semibold' >Contact_Me</li></Links>


    </>
    return (

        <div className="sticky top-0 bg-sky-200 dark:bg-blue-900 dark:text-white z-50 shadow-lg">
            <div className='w-11/12 mx-auto '>


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
                        <a className="px-4 py-2 rounded-sm bg-sky-600 dark:bg-sky-200 dark:text-gray-900 text-white text-lg dark:hover:bg-sky-300 hover:bg-sky-800 hover:scale-105" href='https://wa.me/8801791669909?text=Hi%20there%2C%20I%27m%20interested%20in%20working%20with%20you!' target="_blank">Hire Me</a>


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