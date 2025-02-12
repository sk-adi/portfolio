import React from 'react';
import noteapp from "../assets/images/noteapp.png"
import weatherapp from "../assets/images/weatherapp.png"
import diceroll from "../assets/images/diceroll.png"
import password_generator from "../assets/images/password_generator.png"
import todolist from "../assets/images/todolist.png"

function Projects() {
    return (
        <>
            <div>
                <div className='flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48'>
                    <div className=' md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800'><img src={noteapp} alt="noteapp" /></div>
                    <div className=' md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold'>
                        <h2>//Note App</h2>
                        <div className='flex justify-around pt-4 md:flex-col md:pl-4'>
                            <button className='px-6 py-2 sm:px-8 sm:py-3 border-b-2 border-[#FF4D5A] bg-transparent hover:bg-[#FF4D5A] transition duration-300'>
                                <a href="/">Live Demo</a>
                            </button>

                            <button className='px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2 border-b-2 border-[#FF4D5A]  transition duration-700 hover:bg-[#FF4D5A]'><a href="/">Source Code</a></button>
                        </div>
                    </div>
                </div>
                <div className='flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48'>
                    <div className=' md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800'><img src={diceroll} alt="noteapp" /></div>
                    <div className=' md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold'>
                        <h2>//Note App</h2>
                        <div className='flex justify-around pt-4 md:flex-col md:pl-4'>
                            <button className='px-6 py-2 sm:px-8 sm:py-3 border-b-2 border-[#FF4D5A] bg-transparent hover:bg-[#FF4D5A] transition duration-300'>
                                <a href="/">Live Demo</a>
                            </button>

                            <button className='px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2 border-b-2 border-[#FF4D5A]  transition duration-700 hover:bg-[#FF4D5A]'><a href="/">Source Code</a></button>
                        </div>
                    </div>
                </div>
                <div className='flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48'>
                    <div className=' md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800'><img src={weatherapp} alt="noteapp" /></div>
                    <div className=' md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold'>
                        <h2>//Note App</h2>
                        <div className='flex justify-around pt-4 md:flex-col md:pl-4'>
                            <button className='px-6 py-2 sm:px-8 sm:py-3 border-b-2 border-[#FF4D5A] bg-transparent hover:bg-[#FF4D5A] transition duration-300'>
                                <a href="/">Live Demo</a>
                            </button>

                            <button className='px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2 border-b-2 border-[#FF4D5A]  transition duration-700 hover:bg-[#FF4D5A]'><a href="/">Source Code</a></button>
                        </div>
                    </div>
                </div>
                <div className='flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48'>
                    <div className=' md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800'><img src={todolist} alt="noteapp" /></div>
                    <div className=' md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold'>
                        <h2>//Note App</h2>
                        <div className='flex justify-around pt-4 md:flex-col md:pl-4'>
                            <button className='px-6 py-2 sm:px-8 sm:py-3 border-b-2 border-[#FF4D5A] bg-transparent hover:bg-[#FF4D5A] transition duration-300'>
                                <a href="/">Live Demo</a>
                            </button>

                            <button className='px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2 border-b-2 border-[#FF4D5A]  transition duration-700 hover:bg-[#FF4D5A]'><a href="/">Source Code</a></button>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Projects