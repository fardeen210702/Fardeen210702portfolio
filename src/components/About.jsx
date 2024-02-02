import React from 'react'
import img2 from '../images/pic.jpg'

function About() {
  return (
    <div className='h-min  text-white w-full py-[10%] xl:py-[6%] md
    :py-[5%]  flex justify-center'>
      <div className="aboutme w-[90%] flex flex-col  h-full items-center  rounded-md md:flex-row md:justify-center md:w-[80%] md:gap-10 ">

        <figure className='w-[70%] bg-red h-[1/2] sm:w-1/2 overflow-hidden  lg:w-1/3 '>
         <img className='h-full w-full object-cover ' src={img2} alt="" />
        </figure>

        <div className="details p-2  sm:px-10 md:w-1/2 lg:w-1/2 text-center lg:text-start  ">
          <h1 className='text-xl font-bold underline mb-2'>About me</h1>
          <h1 className='text-3xl font-bold my-3 ' style={{textShadow : '1px 0 1px white'}}> Frontend Developer from India,Telengana</h1>
          <div className="tags flex flex-col gap-5 text-[#9a9898] ">

          <p> Hey, my name is Mohammed Fardeen, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
          <p>My main techstack currently is React with Tailwind CSS </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About