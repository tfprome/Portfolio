import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import coding from '../Lottie/coding.json'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out",
            delay:100, // Animation easing
            // Whether animation should happen only once
        });
    }, []);

    return (
        <div id='about-me' className='pt-10'>
            {/* title  */}
            <h1 className='text-6xl text-center font-bold '>About Me</h1>

            {/* section content */}
            <div  className='w-11/12 mx-auto flex flex-col md:flex-row gap-20 items-center z-10'>
                <div data-aos="fade-right" className='w-2/5'>
                    <Lottie animationData={coding}></Lottie>
                </div>
                <div data-aos="fade-left" className='w-3/5'>
                    <p className='text-2xl  '>I'm a web developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;