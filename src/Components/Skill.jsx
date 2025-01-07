import React from 'react';
import Marquee from "react-fast-marquee";
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import mongodb from "../assets/mongodb.png"
import nodejs from "../assets/nodejs.png"
import express from "../assets/express.png"
import tailwind from "../assets/tailwind.png"

const Skill = () => {
    return (
        <div id='skill' className='w-11/12 mx-auto pt-10'>
            <h1 className='text-6xl font-bold text-center'>Skills</h1>
            <div className='py-10'>
                
                <Marquee>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={html} alt="" />
                        <p className='text-2xl font-bold'>Html</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={css} alt="" />
                        <p className='text-2xl font-bold'>Css</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={tailwind} alt="" />
                        <p className='text-2xl font-bold'>Tailwind</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={js} alt="" />
                        <p className='text-2xl font-bold'>JavaScript</p>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={react} alt="" />
                        <p className='text-2xl font-bold'>React</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={nodejs} alt="" />
                        <p className='text-2xl font-bold'>Node Js</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={express} alt="" />
                        <p className='text-2xl font-bold'>Express Js</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-2 border-sky-600 p-4 mr-10 '>
                        <img className='max-w-52 h-40 py-2' src={mongodb} alt="" />
                        <p className='text-2xl font-bold'>MongoDb</p>
                    </div>
                    
                    
                </Marquee>
            </div>
        </div>
    );
};

export default Skill;