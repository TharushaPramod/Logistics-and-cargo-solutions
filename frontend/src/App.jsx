import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Services from "./pages/Services"
import Features from "./pages/Features"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/service" element={<Services/>}></Route>
           <Route path="/feature" element={<Features/>}></Route>
      </Routes>


   
    </>
  )
}

export default App
