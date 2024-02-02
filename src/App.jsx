import { useRef, useState } from "react"
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
const [position, setPosition] = useState({x:0,y:0})
function handleCursor(details){
  setPosition({x:details.pageX , y:details.pageY})
  
}
  return (
    <div ref={home} className="flex w-full   justify-center bg-black    " onMouseMove={handleCursor}>

      {/* cursor animation */}
          <div className="cursor hidden md:flex absolute w-[30px] h-[30px] rounded-[50%] z-[999]  bg-white mix-blend-difference "
          style={{ left: position.x, top: position.y}}></div>
      {/* cursor animation ends */}

  
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
            <Projects  />
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
