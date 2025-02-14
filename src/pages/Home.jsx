import React from "react";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen leading-16">
        <div>
          <div className="w-auto text-center text-3xl md:text-6xl ">
            <span>Hello, I'm <span className="text-[#FF4D5A]">Aditya</span>.</span>
            <br />
            <span>I'm a front end web developer.</span>
          </div>
          <div className="flex justify-center m-8">
            <button className="border-2 w-fit px-2 md:w-3xs text-xl md:text-2xl h-14 md:font-bold transform-transition duration-300 hover:scale-105 border-[#FF4D5A] text-[#FF4D5A] cursor-pointer">View my work &#8595;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
