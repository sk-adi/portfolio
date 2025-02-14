import React from 'react'

function Navbar() {
    return (
        <>
            <div className=" bg-black text-white h-16 flex justify-center items-center shadow-lg w-5px sticky top-0 z-1">
                <nav>
                    <div className=' w-xs flex justify-around h-full text-base md:text-lg font-light md:font-medium '>
                        <a href="/" className='hover:text-[#FF4D5A]'>Home</a>
                        <a href="/" className='hover:text-[#FF4D5A]'>Project</a>
                        <a href="" className='hover:text-[#FF4D5A]'>About</a>
                        <a href="/" className='hover:text-[#FF4D5A]'>Contact</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar