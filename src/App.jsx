import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import './components/index.css'
import Content from '../feature-content'
import FeatureCard from "./components/FeatureCard"
import Feature from "./components/Feature"
import { nanoid } from "nanoid"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

import ContactUsCard from "./components/Contactform"
import FooterMobile from "./components/Footermobile"
import AboutUsPage from './components/AboutUs';




function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const { cards, pointers } = Content

  const cardComponents = cards.map((card) => {
    return <FeatureCard
      key={nanoid()}
      idx={card.no}
      heading={card.heading}
      paragraph={card.paragraph}
      image={card.image}
    />
  })

  const pointerComponents = pointers.map((point) => {
    return <Feature key={nanoid()} icon={point.icon} point={point.point} heading={point.heading} />
  })

  function Home() {
    return (
      <div>
        <Hero/>
        {cardComponents}
        {pointerComponents}
      </div>
    );
  }

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
                  <Route path="/" exact element ={<Home/>} />
                  <Route path="/home"  element ={<Home/>} />
                  <Route path="/contact" element={<ContactUsCard/>} />
                  <Route path="/about" element={<AboutUsPage/>} />
        </Routes>
        {isMobile ? <FooterMobile /> : <Footer />}
        {/* <Footer/> */}
      </BrowserRouter>
  )
}

export default App




