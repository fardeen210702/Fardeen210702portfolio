import React from 'react'
import video from '../video/video.mp4'
import '../Animate.css'
import img from '../images/fardeen.jpg'
import { FaGithub, FaLinkedinIn, FaSass } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io5";
import { SiGreensock } from "react-icons/si"
import { FaReact } from "react-icons/fa6";
import {SiNextdotjs} from "react-icons/si"
import { BiLogoTailwindCss } from "react-icons/bi";
import resume from '../database/resume.pdf'


function Home() {
  return (
    <div className='h-min xl:h-[700px] 2xl:h-[750px] lg:h-[600px] md:h-[540px] bg-black w-full  '>
      <video className='hidden md:flex h-full object-cover w-full ' muted autoPlay loop >
              <source src={video} />
            </video>
<div className='  md:absolute  md:top-10 lg:top-14 text-white w-full flex flex-col items-center md:gap-10'>
  <div className='flex flex-col mt-16  items-center w-full md:flex-row-reverse   md:justify-center md:gap-10 md:mt-10'>
  <figure className= ' animate w-[200px] h-[200px] overflow-hidden border-2 border-white lg:w-[280px] lg:h-[280px] rounded-[50%]'>
    <img className='w-full h-full object-cover' src={img} alt="" />
  </figure>

  <div className='w-full   flex flex-col items-center jp-3 mt-3  sm:w-1/2 xl:w-1/3 '>
          <h1 className='text-4xl text-center font-extrabold md:text-4xl lg:text-5xl'>Front-End React👋🏻 Developer </h1>
          <p className='text-center mt-3 text-xl text-gray-400 md:text-md'> Hi, I'm Mohammed Fardeen. A passionate Front-end React Developer.</p>
          <ul className='flex p-2 mt-3 w-full gap-3 justify-center items-center'>
            <li className='text-3xl lg:text-4xl'> <a href="https://github.com/fardeen210702" target='_blank'> <FaGithub /></a></li>
            <li className='text-3xl lg:text-4xl'> <a href='https://www.linkedin.com/in/fardeen-mohammed-579518271/' target='_blank'>
              <FaLinkedinIn /></a></li>
              <li className='text-xl  border-2 border-white py-1 px-2 rounded-sm font-semibold hover:text-black hover:bg-white transition-all duration-300 ease-in-out' > <a href={resume} download='fardeen'>resume</a></li>

          </ul>
        </div>
        </div>

        
        <div className="stack flex flex-col gap-1 items-center justify-center font-bold mt-14  z-10 text-white rounded-lg border-[black] md:border-[#00000000] ">
        <h1 className='text-xl underline xl:text-2xl'>Techstack </h1>
        <ul className='flex gap-3 sm:gap-3 lg:gap-1 p-2 px-3 flex-wrap mt-4 justify-center '>
          <div className='flex gap-1 '>
            <li className='text-5xl text-orange-500 rounded-lg p-1  hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl' > <IoLogoHtml5 /></li>
            <li className='text-5xl text-blue-500 rounded-lg p-1  hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <IoLogoCss3 /></li>
          </div>
          <div className='flex gap-1'>
            <li className='text-5xl text-yellow-500 rounded-lg p-1 hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <IoLogoJavascript /></li>
            <li className='text-5xl text-blue-500 rounded-lg p-1  hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <BiLogoTailwindCss /></li>
          </div>
          <div className='flex gap-1'>

            <li className='text-5xl text-blue-500 rounded-lg p-1  hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <FaReact /></li>
            <li className='text-5xl  rounded-lg p-1  hover:text-black hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <SiNextdotjs /></li>

          </div >


          <div className='flex gap-1'>
            <li className='text-5xl text-pink-500 rounded-lg p-1  hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <FaSass /></li>
            <li className='text-5xl text-green-500 hover:text-black rounded-lg p-1  hover:bg-white transition-all ease-in duration-200 hover:scale-95 xl:text-6xl'> <SiGreensock /></li>

          </div>


        </ul>
      </div>


 
  </div>    
    
    </div>
  )
}

export default Home