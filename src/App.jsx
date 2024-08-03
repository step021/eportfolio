import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>


      </BrowserRouter>
    </>
  )
}

export default App