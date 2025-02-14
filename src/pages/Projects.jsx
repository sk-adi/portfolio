import React from "react";
import noteapp from "../assets/images/noteapp.png";
import weatherapp from "../assets/images/weatherapp.png";
import diceroll from "../assets/images/diceroll.png";
import password_generator from "../assets/images/password_generator.png";
import todolist from "../assets/images/todolist.png";

function Projects() {
  return (
    <>
      <div className="font-bold pt-18">
        <h2 className="text-4xl md:text-5xl font-bold text-center pt-12">Projects</h2>
        <div className="flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48">
          <div className=" md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800 transition-transform duration-300 hover:scale-95">
            <img src={noteapp} alt="noteapp" />
          </div>
          <div className=" md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold">
            <h2 className="text-2xl md:text-3xl font-bold text-center pt-4">//Note App</h2>
            <div className="flex justify-around pt-4 md:flex-col md:pl-4">
              <button className="px-6 py-2 sm:px-8 sm:py-3  hover:text-black  relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://note-app-mu-five.vercel.app/" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium ">Live Demo</a>
              </button>

              <button className="px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2  hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://github.com/sk-adi/jsProjects/tree/main/noteapp" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium ">Source Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48">
          <div className=" md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800 transition-transform duration-300 hover:scale-95">
            <img src={diceroll} alt="noteapp" />
          </div>
          <div className=" md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold">
            <h2 className="text-2xl md:text-3xl font-bold text-center pt-4">//Dice roll</h2>
            <div className="flex justify-around pt-4 md:flex-col md:pl-4">
              <button className="px-6 py-2 sm:px-8 sm:py-3  hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://diceroll-ten.vercel.app/" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium">Live Demo</a>
              </button>

              <button className="px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2  hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://github.com/sk-adi/jsProjects/tree/main/DiceRoll" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium">Source Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48">
          <div className=" md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800 transition-transform duration-300 hover:scale-95">
            <img src={weatherapp} alt="noteapp" />
          </div>
          <div className=" md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold">
            <h2 className="text-2xl md:text-3xl font-bold text-center pt-4">//Weather app</h2>
            <div className="flex justify-around pt-4 md:flex-col md:pl-4">
              <button className="px-6 py-2 sm:px-8 sm:py-3  hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://weatherapp-seven-flax.vercel.app/" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium">Live Demo</a>
              </button>

              <button className="px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2 hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://github.com/sk-adi/jsProjects/tree/main/weatherApp" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium">Source Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col mx-2 sm:flex md:flex-row lg:flex md:px-14 lg:px-32 pt-14 md:pt-24 lg:pt-48">
          <div className=" md:w-3/4  py-4 sm:py-6 md:py-12 lg:py-20 pr-2 sm:pr-4 md:pr-6 lg:pr-10 bg-blue-800 transition-transform duration-300 hover:scale-95">
            <img src={todolist} alt="noteapp" />
          </div>
          <div className=" md:w-1/2 pt-4 md:pl-4 text-center text-sm md:text-2xl md:font-bold">
            <h2 className="text-2xl md:text-3xl font-bold text-center pt-4">//ToDoList app</h2>
            <div className="flex justify-around pt-4 md:flex-col md:pl-4">
              <button className="px-6 py-2 sm:px-8 sm:py-3  hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://todolist-sand-six.vercel.app/" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium">Live Demo</a>
              </button>

              <button className="px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2  hover:text-black font-bold relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1] cursor-pointer">
                <a href="https://github.com/sk-adi/jsProjects/tree/main/ToDoList" target="_blank" className="tracking-widest text-base md:text-lg font-light md:font-medium">Source Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
