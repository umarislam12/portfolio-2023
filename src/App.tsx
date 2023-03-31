import { useState } from 'react'
import Portfolio from './components/portfolio'

import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about'
import Skills from './components/skills'
import Services from './components/services'
import Contact from './components/contact'


function App() {
  
const [opacityy,setOpacityy]=useState(1)
function handleOpacity(opacity:any){
setOpacityy(opacity)
}
  return (

    <div className="App h-screen relative w-auto align-middle flex flex-col font-sans overflow-x-hidden" >
      <Navbar handleOpacity={handleOpacity}/>
      <div style={{opacity:opacityy}} className='w-screen  h-screen '>

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
    </div>
  )
}

export default App
