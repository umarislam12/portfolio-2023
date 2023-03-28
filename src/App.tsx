import { useState } from 'react'
import Portfolio from './components/portfolio'

import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about'
import Skills from './components/skills'
import Services from './components/services'
import Contact from './components/contact'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App w-screen  flex flex-col" >
      <Navbar />
      <About/>
      <Skills/>
      <br/>
      <br/>
     <Services/>
     
      <Portfolio/>
      <br/>
     <br/>
     <br/>
      <Contact />
     <Footer/>
    </div>
  )
}

export default App
