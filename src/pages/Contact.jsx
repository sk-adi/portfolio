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
            <input className="bg-[#282828] w-full pl-2 focus:outline-none " type="email" placeholder="Email" />
            <textarea className="bg-[#282828] w-full h-28 pl-2 focus:outline-none" name="/" id="/" placeholder="Message"></textarea>
            <input className='md:text-2xl px-6 py-2 sm:px-8 sm:py-3 pt-4 md:mt-2 border-b-2 border-[#FF4D5A]  transition duration-700 hover:bg-[#FF4D5A]' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
