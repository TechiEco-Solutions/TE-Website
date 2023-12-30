import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import './components/index.css'
import Content from '../feature-content'
import FeatureCard from "./components/FeatureCard"
import Feature from "./components/Feature"
import { nanoid } from "nanoid"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

import ContactUsCard from "./components/Contactform"

function App() {

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
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App


