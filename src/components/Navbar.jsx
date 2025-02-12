import React from 'react'

function Navbar() {
    return (
        <>
            <div className=" bg-black text-white h-16 flex justify-center items-center shadow-lg w-5px">
                <nav>
                    <div className=' w-xs flex justify-around h-full'>
                        <a href="/">Home</a>
                        <a href="/">Project</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar