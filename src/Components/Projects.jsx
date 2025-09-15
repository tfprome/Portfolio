import SectionTittle from './shared/SectionTittle';
import library from "../assets/library.webp"
import greenpitch from "../assets/green-pitch.netlify.app_.png"
import expresso from "../assets/expresso99.netlify.app_home.png"
import visa from "../assets/visa.png"
import lingobingo from "../assets/lingobingo.png"
// import portfolio from "../assets/portfolio.png"
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const projectItems = [
    {
        photo: greenpitch,
        tittle: "Green Pitch",
        type: "An online Platform to buy sportswear products",
        subTittle: "An online Platform to buy sportswear products",
        techStack: ["React", "Node.js","Express.js"],
        details: "/library",
        live: 'https://green-pitch.netlify.app/'
    },
    {
        photo: expresso,
        tittle: "Expresso",
        type: "An complete vlog writing site",
        subTittle: "An online vlog writing website to express everyone's inner thoughts",
        techStack: ["React", "Node.js", "Express.js"],
        details: "/library",
        live: 'https://expresso99.netlify.app/home'
    },
    {
        photo: library,
        tittle: "E-Library",
        type: "An online library management system",
        subTittle: "An online library management system An online library management system",
        techStack: ["React", "Node.js"],
        details: "/library",
        live: 'https://jolly-salmiakki-820fae.netlify.app/'
    },
    
]

const Projects = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    return (
        <div id='projects' className='section-container pb-20'>
            <SectionTittle head={"My Work"} tittle1={"Featured"} tittle2={"Projects"} subTittle={"Here's a selection of my recent work. Each project was carefully crafted to meet specific goals."} color={"secondary"} />

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>

                {
                    projectItems.map((item, idx) => (
                        <div key={idx} className=" hover:-translate-y-2 group rounded-lg overflow-hidden relative  bg-accent shadow-[6px_6px_20px_rgba(0,0,0,0.4),-6px_-6px_20px_rgba(0,0,0,0.4)] transition-all ease-in-out duration-300 max-w-96 hover-controller">
                            {/* banner image  */}
                            <figure className='h-64 scroll-container'>
                                <img
                                    src={item.photo}
                                    alt="Shoes"
                                    className={`object-cover  w-full  ${isVisible ? "scroll-content" : ""} `} />
                            </figure>
                            {/* overlay  */}
                            <div className='bg-black/85 h-[270px] invisible group-item group-hover:visible w-full  absolute -top-2 transition-all ease-in-out duration-50 border-none flex flex-col justify-center items-center p-3'>
                                <div className='text-center'>
                                    <h2 className="text-xl text-white font-semibold pb-2">{item.tittle}</h2>
                                    <p className='text-base text-gray-400'>{item.type}</p>
                                </div>
                                <div className="pt-5 flex gap-3">
                                    <Link to={item.live} target='_blank'><button className='px-4 py-2 rounded-full bg-primary/90 hover:bg-gray-50 text-gray-950'>
                                        Live Project
                                    </button></Link>
                                    <Link to={item.details}><button className='px-4 py-2 rounded-full bg-transparent border hover:bg-gray-50 text-gray-50 hover:text-gray-950'>
                                        Details
                                    </button></Link>
                                </div>
                            </div>
                            {/* description  */}
                            <div className="p-6 pb-10">
                                <h2 ref={containerRef} className="text-xl text-white font-semibold pb-2">{item.tittle}</h2>
                                <p className='text-base text-gray-400'>{item.subTittle}</p>
                                {/* tech items  */}
                                <div className='flex gap-2 pt-3'>
                                    {
                                        item.techStack.map((tech, idx) => (
                                            <div key={idx} className='text-primary text-xs rounded-full bg-gray-700 btn hover:bg-gray-700 cursor-auto px-2 py-1   min-h-0 h-auto border-none'>
                                                {tech}
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    ))
                }


                {/* <div data-aos="zoom-in" className="card card-compact  rounded-md bg-base-100 shadow-xl dark:bg-gray-700">
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
                </div> */}


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
                {/* 
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
                </div> */}









            </div>
        </div>
    );
};

export default Projects;