import { useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from './components/Contact'
import Projects from "./components/Projects"


function App() {
  const home = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)
  const [firstinfo, setFirstInfo] = useState(true)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    let chat = setTimeout(() => {
      setShow(true)
    }, 10000);

    return () => clearTimeout(chat)
  }, [])

  function handleCursor(details) {
    setPosition({ x: details.pageX, y: details.pageY })

  }

  // chat states
  const [firstquestion, setFirstquestion] = useState(false)
  const [ignoreFirstQuestion, setignoreFirstQuestion] = useState(false)
  const [secondQuestion, setSecondQuestion] = useState(false)
  const [thirdQuestion, setThirdQuestion] = useState(false)
  const [ignorethirdQuestion, setIgnoreThirdQuestion] = useState(false)
  const [forthQuestion, setfourthQuestion] = useState(false)
  const [thanks, setThanks] = useState(false)
  function showQuestion() {
    setShow2(false)
    setFirstquestion(true)
    setignoreFirstQuestion(false)
  }
  function ignoreQuestion() {
    setShow2(false)
    setFirstquestion(false)
    setignoreFirstQuestion(true)
  }
  function hideShow() {
    setFirstquestion(false)
    setShow2(false)
    setSecondQuestion(true)

  }
  function goodOptionClicked() {
    setThirdQuestion(true)
    setIgnoreThirdQuestion(false)
    setFirstquestion(false)
    setSecondQuestion(false)
  }
  function badOptionClicked() {
    setThirdQuestion(false)
    setIgnoreThirdQuestion(true)
    setSecondQuestion(false)


  }
  function hideSecondQuestion() {
    setSecondQuestion(false)
    setThirdQuestion(false)
    setIgnoreThirdQuestion(false)
    setfourthQuestion(true)
  }

  function finalAnswer() {
    setFirstInfo(false)
    setfourthQuestion(false)
    setThanks(true)
  }
  function handleDisplay() {
    setShow(false)
  }
  function back() {
    setignoreFirstQuestion(false)
    setShow2(true)
  }
  return (
    <div ref={home} className="flex w-full   justify-center bg-black    " onMouseMove={handleCursor}>

      {/* cursor animation */}
      <div className="cursor hidden md:flex absolute w-[30px] h-[30px] rounded-[50%] z-[999]  bg-white mix-blend-difference "
        style={{ left: position.x, top: position.y }}>

      </div>
      {/* cursor animation ends */}



      {/* chat box */}

      {
        show && <div className="chatbox z-[998]  fixed flex flex-col top-[10%] sm:top-[10%] md:top-[40%] right-6.5 sm:right-[4%]   md:right-[5%] bg-black  border-2 border-white w-[250px] h-[300px] rounded-md p-2">
          {firstinfo && <div className="my-2 font-bold space-y-1 cursor-pointer">
            <h1 className="border bg-[#c4fcef] p-1 rounded-lg">Sorry for disturbing You </h1>
            <h2 className="border bg-[#c4fcef] p-1 rounded-lg">Can you please answer a few of my questions</h2>
          </div>
          }

          <div className="question1 space-x-4 cursor-pointer">
            {
              show2 && <div className="flex flex-col justify-start gap-1">
                <button className=" border bg-[#c4fcef] p-1 rounded-lg active:bg-[#83f3d9]" onClick={showQuestion}>Yeah sure! why not</button>
                <button className=" border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9]" onClick={ignoreQuestion}>Not interested</button>
              </div>

            }
          </div>

          <div className="answer1 cursor-pointer">
            <ul>
              {
                firstquestion && <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] " onClick={hideShow}> Let's get Started 😁👉</li>
              }
              {
                ignoreFirstQuestion && <>
                  <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] font-normal" > It's fine , Fardeen knows how lazy you are!! </li>
                  <button className="mt-3 py-1 px-5 rounded-md font-bold bg-[#c4fcef] active:bg-[#83f3d9] " onClick={back}>back</button>
                  <button className="mt-3 ml-2 py-1 px-5 rounded-md font-bold bg-[#c4fcef] active:bg-[#83f3d9] "  onClick={handleDisplay}>Exit</button>
                

                </>
              }

            </ul>
          </div>

          <div>
            {secondQuestion && <ul> <li className="border font-bold bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] cursor-pointer"> What do you think of my portfolio ??</li>
              <ul className="flex flex-col py-1 gap-1  cursor-pointer">
                <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9]" onClick={goodOptionClicked} >Yeah, this portfolio is good </li>
                <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9]" onClick={badOptionClicked}> It is not that great </li>
              </ul>
            </ul>
            }

            <ul>
              {
                thirdQuestion && <ul className="flex flex-col gap-2 cursor-pointer">
                  <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] font-bold"  > Thanks , what do you like most about it?</li>
                  <li onClick={hideSecondQuestion} className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9]"  >Design</li>
                  <li onClick={hideSecondQuestion} className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9]" >Concept</li>

                </ul>
              }
              {
                ignorethirdQuestion && <ul className="space-y-1">
                  <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] font-bold cursor-pointer" >Oh I see , what do you dislike most about it??</li>
                  <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] cursor-pointer" onClick={hideSecondQuestion} >Design</li>
                  <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] cursor-pointer" onClick={hideSecondQuestion}>Concept</li>
                </ul>
              }
            </ul>
          </div>
          <div>
            {
              forthQuestion && <ul className="flex flex-col gap-2 cursor-pointer">
                <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] font-bold">Oh Interesting ,thanks for the genuine answer, can I do better than this?? </li>
                <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] " onClick={finalAnswer}>Yes ofcourse</li>
                <li className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] " onClick={finalAnswer}>You are already doing great</li>

              </ul>

            }
            <div>
              {
                thanks && <>
                  <h1 className="border bg-[#c4fcef] p-1 rounded-lg  active:bg-[#83f3d9] font-bold cursor-pointer" >Thanks for giving your time to checkout My portfolio</h1>
                  <button className="mt-3 py-1 px-5 rounded-md font-bold bg-[#c4fcef] active:bg-[#83f3d9] "  onClick={handleDisplay}>Exit</button>
                </>
              }
            </div>
          </div>



        </div>
      }
      {/* chat box ended */}




      <div className="flex w-full max-w-[1800px] flex-col items-center ">
        <Header home={home} about={about} project={project} contact={contact} />


        <div className="w-full fle flex-col items-center">

          <div className="home  md:relative " >
            <Home />
          </div>
          <div className="home" ref={about}>
            <About />
          </div>
          <div className="home" ref={project}>
            <Projects />
          </div>
          <div className="home" ref={contact}>
            <Contact />
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
