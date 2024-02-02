import React, { useEffect, useState } from 'react'
import Data from '../database/Data'
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { CiSquareChevUp } from "react-icons/ci";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaSass } from "react-icons/fa";



function Projects() {
  const [item, setItem] = useState(0)
  const [displayitems, setDisplayItems] = useState(Data[0])
  function left() {
    setItem((item) => item === 0 ? Data.length - 1 : item - 1)
  }
  function right() {
    setItem((item) => item === Data.length - 1 ? 0 : item + 1)
  }

  function handleAdd(elem) {
    setDisplayItems(elem)
    console.log(displayitems, 'display');

  }






  return (
    <div className=' text-white pt-[12%] w-full  h-min   md:pt-[8%] lg:pt-[5%] flex flex-col items-center '>
      <h1 className='font-bold text-3xl underline lg:text-4xl '>Projects </h1>

<div className='flex w-[95%] sm:w-[80%] md:w-[95%] gap-3 xl:w-[80%]'>
      {/* miniscreen items */}
      <div className="items   w-full   flex flex-col overflow-hidden  items-center md:w-1/2 " >
        <div className='w-full flex transition-all duration-100 ease-in-out  ' style={{ transform: `translateX(-${item * 100}%)` }}>

          {
            Data.map((e, index) => {
              return <div key={index} className='w-full  shrink-0 flex flex-col gap-3 mt-5 items-center'>
                <h1 className='text-2xl font-semibold'>{e.Content}</h1>
                <figure className='w-full sm:h-[270px] h-[200px]' >
                  <img className='w-full h-full ' src={e.img} alt="" />
                </figure>
                <a href={e.link} target='_blank' className=' md:hidden text-xl font-semibold flex justify-center items-center gap-3 w-[155px] border-2 border-white p-2 rounded-md hover:text-black hover:bg-white transition-all duration-300 ease-in-out'>Check Out <CiSquareChevUp className='text-2xl' /> </a>

                <button onClick={() => handleAdd(e)} className='hidden text-xl font-semibold md:flex justify-center items-center gap-3 w-[155px] border-2 border-white p-2 rounded-md hover:text-black hover:bg-white transition-all duration-300 ease-in-out'>Check Out <CiSquareChevRight className='text-2xl' /> </button>



              </div>
            })

          }
        </div>
        <div className="btns text-5xl flex items-center gap-2 mt-10">
          <button onClick={left}><CiSquareChevLeft /></button>
          {
            Data.map((_, index) => {
              return <div key={index} className={`dots   bg-gray-500 active:bg-black rounded-full h-1  w-1  ${item === index ? ' transition-all ease-in-out delay-75 p-2 bg-gray-600' : 'p-1'}`}></div>
            })
          }
          <button onClick={right}><CiSquareChevRight /></button>
        </div>

      </div>
      {/* miniscreen items ended */}


      {/* main content */}

      <div className='hidden md:flex w-full  flex-col  lg:p-4 md:w-1/2  '>

        <div className=' md:flex   w-full '>
          {
            displayitems && <div className=' w-full flex flex-col  lg:flex justify-center'>
              <div className="detail mt-6 lg:mt-2 lg:pt-0 h-[335px] w-full  ">

                <video className='w-full h-full object-fill ' src={displayitems.video} autoPlay loop  ></video>

              </div>
              <div className='w-full  xl:px-1 '>
                <a className='text-xl my-2 xl:text-2xl text-purple-700 flex items-center gap-3 border-b-2 border-purple-950 w-[140px] xl:w-[180px]' href={displayitems.link} target='_blank'> {displayitems.title} <FaArrowUpRightFromSquare />  </a>
                <p className='text-[#d2cecec9]'>{displayitems.description}</p>
                <p className='font-bold mt-3'>Tech used :- {displayitems.tech}</p>
                <div className='flex gap-2 text-4xl mt-4 w-full '>

                  <a href={displayitems.git} target='_blank'><FaGithub /></a>
                  <a href={displayitems.linkedIn} target='_blank'><FaLinkedinIn /></a>
                </div>
              </div>





            </div>

          }



        </div>
        {/* <div className="  md:flex  w-full h-[200px] lg:h-[270px] xl:h-[300px] flex justify-end p-2">
          <div className="items w-[70%] h-full  flex gap-3 justify-center">
            {
              Data.map((elem, index) => {
                return <div onClick={() => handleAdd(elem)} className="item w-1/3 lg:w-[30%] xl:w-[25%] 2xl:w-[20%] border-2  font-semibold rounded-md h-full bg-[#7a7a7a8b] border-white p-2 lg:space-y-3 xl:space-y-5" key={index}>
                  <h1>{elem.title}</h1>
                  <figure className='w-full h-[120px] lg:h-[160px]'>
                    <img className='w-full h-full  ' src={elem.img} alt="" />
                  </figure>
                  <button className='flex items-center text-lg justify-center gap-2'>Check Out <CiSquareChevUp className='text-2xl' /></button>

                </div>
              })
            }

          </div>
        </div> */}
      </div>

      {/* maincontent ended */}






      </div>

    </div>
  )
}

export default Projects


