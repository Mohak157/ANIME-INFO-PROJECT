import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AnimeInfo from './components/AnimeInfo'





function App() {
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
    
     <About/>
     <AnimeInfo/>
    
     <Footer/>
    </main>
  )
}

export default App
