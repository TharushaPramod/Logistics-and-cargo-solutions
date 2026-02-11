import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Services from "./pages/Services"
import Features from "./pages/Features"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/service" element={<Services/>}></Route>
           <Route path="/feature" element={<Features/>}></Route>
           <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

           
      </Routes>

      <Footer/>


   
    </>
  )
}

export default App
