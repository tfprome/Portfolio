import React from 'react';
import library from "../assets/library.png"
import visa from "../assets/visa.png"
import lingobingo from "../assets/lingobingo.png"
// import portfolio from "../assets/portfolio.png"
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div id='projects' className='w-11/12 mx-auto pb-20'>
            <h1 className='text-5xl font-bold text-center pb-14'>Projects</h1>
            <div className='grid  md:grid-cols-2 gap-10'>




                <div data-aos="zoom-in" className="card card-compact  rounded-md bg-base-100 shadow-xl dark:bg-gray-700">
                    <figure className='border-4 '>
                        <img
                            src={library}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">E Library </h2>
                        <p>This is a project of managing library functionality online</p>
                        <div className="card-actions justify-end">
                            <Link to='/library'><button className='btn'>View Project</button></Link>
                        </div>
                    </div>
                </div>



                <div data-aos="zoom-in" className="card card-compact  rounded-md bg-base-100 shadow-xl dark:bg-gray-700">
                    <figure className='border-4'>
                        <img
                            src={visa}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Visa Navigator</h2>
                        <p>This is a visa consultancy and visa navigation website, helps people achieve their cherished visa</p>
                        <div className="card-actions justify-end">
                        <Link to='/visa'><button className='btn'>View Project</button></Link>
                        </div>
                    </div>
                </div>


                {/* <div data-aos="zoom-in" className="card card-compact  rounded-md bg-base-100 shadow-xl dark:bg-gray-700">
                    <figure className='border-4'>
                        <img
                            src={portfolio}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Personal Portfolio</h2>
                        <p>It is a personal portfolio website, that showcases the skills and projects of its owner</p>
                        <div className="card-actions justify-end">
                            <a className='btn' href="https://hasibulhasan49.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div> */}

                <div data-aos="zoom-in" className="card card-compact  rounded-md bg-base-100 shadow-xl dark:bg-gray-700">
                    <figure className='border-4'>
                        <img
                            src={lingobingo}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lingo Bingo</h2>
                        <p>It is a language learning website, that help its user to learn japanese language</p>
                        <div className="card-actions justify-end">
                        <Link to='/lingobingo'><button className='btn'>View Project</button></Link>
                        </div>
                    </div>
                </div>









            </div>
        </div>
    );
};

export default Projects;