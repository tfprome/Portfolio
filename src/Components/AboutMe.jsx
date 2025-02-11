import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import coding from '../Lottie/coding.json'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration in milliseconds
            easing: "ease-in-out",
            delay: 0, // Animation easing
            // Whether animation should happen only once
        });
        return () => AOS.refreshHard();
    }, []);

    return (
        <div id='about-me' className='pt-20'>
            {/* title  */}
            <h1 className='text-5xl text-center font-bold mb-14'>About Me</h1>

            {/* section content */}
            <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-10 items-center z-10'>
                <div data-aos="fade-down" className='md:w-1/5 w-1/2 '>
                    <Lottie animationData={coding}></Lottie>
                </div>
                <div data-aos="fade-down" className='md:w-4/5 text-justify'>
                    <p className='  '>Hello! I'm a front-end developer from Bangladesh with a deep passion for building innovative and user-friendly websites. My programming journey began at Mymensingh Engineering College, where I earned my B.Sc. in Computer Science and Engineering. It was there that I discovered my love for coding and design. Over time, I’ve grown proficient in HTML, CSS, JavaScript, React, Tailwind CSS, and I also work with Node.js and Express.js to create robust full-stack applications.
                        <br />
                        <br />
                        I enjoy working on projects that challenge me and push my creativity. My favorite part of web development is combining aesthetics with functionality to create smooth, intuitive user experiences. I thrive in a collaborative environment and love teamwork, as it sparks new ideas and encourages growth. When I’m not immersed in coding, you’ll find me reading up on the latest trends, working on personal projects, or enjoying a game of cricket. I also love playing the guitar when I need to unwind and find some inspiration.
                        <br />
                        <br />
                        I believe in the power of continuous learning and always strive to improve my skills. My ultimate goal is to create websites that leave a lasting impact, all while having fun along the way.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;