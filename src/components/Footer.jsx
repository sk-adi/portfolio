import React from 'react';
import twitter from "../assets/images/twitter-icon.svg";
import github from "../assets/images/github-icon.svg";


function Footer() {
  return (
    <>
      <footer className='bg-[#282828] text-white'>
        <div className=' flex h-40 justify-center pt-8'>
          <div>
            <div className='flex justify-around'>
            <a href="https://github.com/sk-adi" target='_blank'><img src={github} alt="github icon" className='w-[100%] h-[100%]' /></a>
            <a href="https://x.com/sk_adihere" target='_blank'><img src={twitter} alt="twitter icon" className='w-[100%] h-[100%]' /></a>
            </div>
            <p className='text-xs'>ADITYA_KUMAR&#169;{new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer