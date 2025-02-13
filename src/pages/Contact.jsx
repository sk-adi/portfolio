import React from "react";

function Contact() {
  return (
    <>
      <div className=" flex justify-center mb-8 pt-18">
        <div className="md:w-1/2 px-10 md:px-28 ">
          <h1 className="text-4xl font-bold text-center pt-12">Contact</h1>
          <p className="text-balance text-center mt-6 w-full">
            Have a question or want to work together? Leave your details and
            I'll get back to you as soon as possible.
          </p>
          <form
            action="/"
            className="flex flex-col items-end mt-12 leading-8 w-full gap-2"
          >
            <input
              className="bg-[#282828] w-full pl-2 focus:outline-none "
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#282828] w-full pl-2 focus:outline-none "
              type="email"
              placeholder="Email"
            />
            <textarea
              className="bg-[#282828] w-full h-28 pl-2 focus:outline-none"
              name="/"
              id="/"
              placeholder="Message"
            ></textarea>
            <div className="  hover:text-black text-2xl md:text-2xl font-bold px-4 py-2 sm:px-4 sm:py-2 md:pt-2 md:px-2  relative overflow-hidden before:absolute  before:left-0 before:bottom-[0] before:w-full before:h-[3px] hover:before:h-full before:bg-[#FF4D5A]  before:transition-all before:duration-300 hover:before:z-[-1]">
            <input
            className="cursor-pointer"
              type="submit"
              value="Submit"
            />
            </div> 
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
