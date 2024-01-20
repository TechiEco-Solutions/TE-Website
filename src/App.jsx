import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import './components/index.css'
import Content from '../feature-content'
import FeatureCard from "./components/FeatureCard"
import Feature from "./components/Feature"
import { nanoid } from "nanoid"
import Footer from "./components/Footer"


import ContactUsCard from "./components/Contactform"
import FooterMobile from "./components/Footermobile"
import AboutUsPage from './components/AboutUs';
import Header from './components/Hero';




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
        <Header/>
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




