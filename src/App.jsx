import React from 'react'
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Team from "./Components/Team"
import FAQ from "./Components/FAQ"
import News from "./Components/News"
import Footer from "./Components/Footer"
export default function App() {
  return (
    <>
    <main>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Team/>
    <FAQ/>
    <News/>
    <Footer/>
    </main>
    </>
  )
}
