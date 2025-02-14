import React from "react";
import htmlLogo from "../assets/images/HTML5_Logo.svg";
import cssLogo from "../assets/images/css_logo.svg";
import js from "../assets/images/javascript-1.svg";
import reactlogo from "../assets/images/react-1.svg";
import expressjs from "../assets/images/expressjs-icon.svg";
import github from "../assets/images/github-icon.svg";

function About() {
    return (
        <>
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-center pt-18">About me</h2>
                <div className=" px-4 md:px-12 md:flex md:justify-around pt-12">
                    <div className=" md:text-balance flex items-center rounded-xl md:w-1/2 ">
                        <p className="text-left text-base md:text-lg font-light md:font-medium leading-1.6 md:leading-1.8 ">
                            Turning ideas into interactive experiences! I’m Aditya Kumar, a
                            frontend developer who loves crafting sleek, responsive web
                            applications. With a strong foundation in modern web technologies, I
                            constantly push my boundaries to learn, grow, and build solutions
                            that matter
                        </p>
                    </div>
                    <div className="flex  justify-center gap-4 pt-8">
                        <div className="md:px-2">
                            <img
                                src={htmlLogo}
                                alt="html logo"
                                className="w-34 h-34 bg-black p-4 border mb-2 "
                            />
                            <img
                                src={cssLogo}
                                alt="css logo"
                                className="w-34 h-34 bg-black p-4 border "
                            />
                        </div>
                        <div>
                            <img
                                src={js}
                                alt="html logo"
                                className="w-34 h-34 bg-black p-4 border mb-2"
                            />
                            <img
                                src={reactlogo}
                                alt="css logo"
                                className="w-34 h-34 bg-black p-4 border "
                            />
                        </div>
                        <div>
                            <img
                                src={expressjs}
                                alt="html logo"
                                className="w-34 h-34 bg-black p-4 border mb-2 "
                            />
                            <img
                                src={github}
                                alt="css logo"
                                className="w-34 h-34 bg-black p-4 border "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
