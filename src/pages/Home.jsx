import React from "react";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen leading-16">
        <div>
          <div className="w-auto text-center text-3xl md:text-6xl">
            <span>Hello, I'm <span className="text-[#FF4D5A]">Aditya</span>.</span>
            <br />
            <span>I'm a front end web developer.</span>
          </div>
          <div className="flex justify-center m-8">
            <button className="border-2 border-[#FF4D5A]  w-3xs text-xl md:text-3xl h-14 hover:bg-[#FF4D5A]">View my work <span className="text-[#FF4D5A]">&#8595;</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
