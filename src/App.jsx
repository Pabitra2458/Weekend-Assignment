import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/skills"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer" 
import { Element } from "react-scroll"

function App() {

  return (
    <div>
        <Navbar/>
        <Home/>
        <About />
        <Skills />
        <Contact />
        <Footer/>
    </div>
  )

}

export default App
