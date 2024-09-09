import React from "react";
import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero";
import Parallax from './components/parallax/Parallax';
import Service from './components/services/Service';
import Portfolio from "./components/portfolio/Portfolio";

function App() {

  return (
    <>
    <div>
       <section id='Homepage'>
         <Navbar />
         <Hero />
       </section >
       <section id="Services"><Parallax type ="services" /></section>
       <section><Service /></section>
       <section id = "Portfolio"><Parallax type="portfolio" /></section>
       <Portfolio />
       <section>Contact</section>
       </div>     

    </>
    
    

  )
}

export default App
