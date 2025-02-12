import React from "react";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen leading-16">
        <div>
          <div className="w-auto text-center text-6xl">
            <span>Hello, I'm Aditya.</span>
            <br />
            <span>I'm a front end web developer.</span>
          </div>
          <div className="flex justify-center m-8">
            <button className="border-2 border-orange-700 w-3xs text-3xl h-14">View my work &#8595;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
