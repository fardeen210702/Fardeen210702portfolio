import React from 'react'
import { FaArrowUpRightFromSquare, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className='text-white pt-[12%] pb-[10%] w-full  h-min    md:pt-[8%] lg:pt-[5%]  flex flex-col gap-10 md:flex-row lg:px-10 '>
      <div className=' p-3 flex flex-col gap-7 md:w-1/2 '>

        <div className='w-full flex justify-center'>
          <h1 className='flex items-center gap-4 text-3xl font-bold underline '>Contact <FaArrowUpRightFromSquare /></h1>
        </div>
        <div className="mail w-full flex flex-col gap-10 sm:flex-row sm:justify-center sm:gap-15 md:gap-20 lg:gap-25 mt-4 md:flex-col">
          <div className="Mail text-3xl flex flex-col items-center gap-2 ">
            <FaMapLocationDot />
            <h1 className='font-bold'>Location</h1>
            <p className='font-semibold text-lg'>Telengana , India</p>
          </div>
          <div className="Mail text-3xl flex flex-col items-center gap-2">
            <MdEmail />
            <h1 className='font-bold'>Mail</h1>
            <p className='font-semibold  text-lg'>fardeenmohd1251@gmail.com</p>
          </div>

        </div>
      </div>

      {/* ================================== */}

      <div className="sendmessage w-full px-2 flex flex-col items-center md:w-1/2">
        <h1 className='text-xl font-bold my-3'>Send me your Experience 😁</h1>
        <form  action="https://formspree.io/f/xnqeppzq" className='w-full space-y-3  ' method='POST'>

          <div className=" detail flex flex-col items-start w-full px-3">
            <label htmlFor="name" className='font-semibold cursor-pointer'>Username</label>
            <input required className='w-full p-1 rounded-sm text-black' type="text " name='username' id='name' placeholder='Ex:-Fardeen' />
          </div>

          <div className=" detail flex flex-col items-start w-full px-3">
            <label className='font-semibold cursor-pointer' htmlFor="email" name='email' id='email' >Email</label>
            <input required type="text" placeholder='Ex:-fardeenmohd1251@gmail.com' className='w-full p-1 rounded-sm text-black' />
          </div>

          <div className=" detail flex flex-col items-start pl-3 w-full pr-2.5 ">
            <label htmlFor="experience " className='font-semibold cursor-pointer'  >Your expeirence</label>
            <input type='text' className='rounded-sm w-full p-1 text-black ' placeholder='Good / Nice / Okok' name="experience" id="experience" >
            </input>
          </div>

          <div className=" detail flex flex-col items-start pl-3 w-full pr-2.5">
            <label htmlFor="experience " className='font-semibold cursor-pointer '  > Any suggestions</label>
            <textarea className='rounded-sm w-full text-black ' placeholder='Your suggestions matter' name="message" id="experience" cols="" rows="6">
            </textarea>
          </div>
          

          <button value='submit' className='mx-3.5 rounded-sm px-2 py-1 bg-white hover:bg-black hover:text-white transition-all ease-in-out duration-75 hover:border-2 hover:border-white text-black text-xl font-semibold sm:px-7'>Submit</button>

          

        </form>


      </div>





    </div>
  )
}

export default Contact