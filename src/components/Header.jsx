import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Header({home,about,contact,project}) {
    const [nav, setNav] = useState(0)
    function handleToggle(){
        setNav(!nav)
    }
    function handleDrag(page){
            window.scrollTo({
                top:page.current.offsetTop,
                behavior:'smooth'
            })
    }
  return (

    <>
    {/* mobile navbar */}
    <div className='  header w-full h-[50px] md:h-[70px]  z-50 flex flex-col items-center  fixed top-0   justify-center ' >
        <nav className='relative w-[90%]  border-2 text-white border-white  flex items-center justify-between bg-black rounded-sm px-1 py-1 md:hidden'>
            <div>
                <h1 className='text-2xl font-bold'>Fardeen.dev</h1>
            </div>
            <div className="menu text-2xl " onClick={handleToggle}>
                {nav ? <RxCross2/> : <IoIosMenu/>}
            </div>
            
        </nav>
        <ul onClick={handleToggle} className={nav ? 'absolute top-12 left-0 transition-all duration-75 ease-in h-screen w-full   flex flex-col items-center gap-10 text-2xl pt-16 font-semibold cursor-pointer bg-black text-white  md:hidden' :' absolute top-12 left-[-100%] transition-all duration-75 ease-in  h-screen w-full  flex flex-col items-center gap-10 text-2xl pt-16 font-semibold cursor-pointer bg-black text-white   md:hidden'}>
                <li onClick={()=>handleDrag(home)}>Home</li>
                <li onClick={()=>handleDrag(about)}>About</li>
                <li onClick={()=>handleDrag(project)}>Projects</li>
                <li onClick={()=>handleDrag(contact)}>Contact</li>
            </ul>


            {/* midscreen+ nav bar */}
            


            <nav className='hidden border-2 text-white w-[90%] border-white  md:flex items-center justify-between  rounded-md px-3 py-2 bg-[#000000a7] backdrop-blur-sm '>
            <div >
                <h1 className='text-3xl font-bold'>Fardeen.dev</h1>
            </div>
            <ul className='flex gap-4 text-lg font-semibold cursor-pointer'>
            <li onClick={()=>handleDrag(home)}>Home</li>
                <li onClick={()=>handleDrag(about)}>About</li>
                <li onClick={()=>handleDrag(project)}>Projects</li>
                <li className='flex items-center gap-2 border-l-[2px] px-3 transition-all ease-in duration-100 hover:bg-white hover:rounded-sm hover:text-black hover:pr-3 border-white' onClick={()=>handleDrag(contact)}>Contact <FaArrowUpRightFromSquare/></li>

            </ul>


            </nav>


        
    </div>
    </>

  )
}

export default Header