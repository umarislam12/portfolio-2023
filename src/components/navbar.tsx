import * as React from 'react';
import pexels from '../assets/pexels.jpg'
import bla from '../assets/bla.png'
import Typed from 'typed.js';
import { CiDark, CiLight } from 'react-icons/ci';
import { useState } from 'react';


const Navbar = (props:any) => {
    const el = React.useRef<any>(null);
    const [dark, setDark] = useState(false);
    
    // Create reference to store the Typed instance itself
    const typed = React.useRef<any>(null);
    React.useEffect(() => {
        const options = {
            strings: [
                '<i>Web</i> developer',
                '<strong>Database</strong> expert'

            ],
            typeSpeed: 50,
            backSpeed: 0,
            loop: true
        };
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])
    const [isOpen, setIsOpen] = useState(false)
function handleChange(){
    setIsOpen(!isOpen);
    // props.handleOpacity(0.5)
     switchOpacity()
}
function switchOpacity(){
    
    (isOpen===true) ?
    props.handleOpacity(1): props.handleOpacity(0.5)
}

    return (
        <div className='flex flex-col z-50 mr-1' id='home'>
            <a className="navbar-brand logo-image w-24 fixed  justify-center left-0 hover:opacity-50" href="index.html"><img src={bla} className="bg-slate-500" alt="alternative" /></a>
            {!isOpen ?
                <button onClick={handleChange   } className='ml-2  text-color-black-500 fixed top-16 hover:opacity-50'>
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-sky-400 "></span>
                    <svg  width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path>
                    </svg>
                </button> :
               
                <ul className=" flex flex-col  w-28 top-16 left-0 flex-wrap justify-center fixed items-center min-h-[80%] overflow-auto  bg-primary text-black mr-8 md:flex-row lg:flex-row ">
                    <li  className='py-2 px-4 hover:text-sky-500 text-2xl cursor-pointer'><button  onClick={handleChange}><svg  fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
</svg></button></li>
                    <li className='py-2 px-4' ><a className='hover:text-sky-500 dark:hover:text-sky-400 ' href="#">Home</a></li>
                    <li className='py-2 px-4'><a className='hover:text-sky-500 dark:hover:text-sky-400' href="#">About</a></li>
                    <li className='py-2 px-4'><a className='hover:text-sky-500 dark:hover:text-sky-400' href="#">Skills</a></li>
                    <li className='py-2 px-4'><a className='hover:text-sky-500 dark:hover:text-sky-400' href="#">Services</a></li>
                    <li className='py-2 px-4'><a className='hover:text-sky-500 dark:hover:text-sky-400' href="#">Portfolio</a></li>

                    <li className='py-2 px-4'><a className='hover:text-sky-500 dark:hover:text-sky-400' href="#">Contact</a></li>
                    {dark === false ? <li className='py-2 px-4 text-2xl' onClick={() => setDark(!dark)}><CiDark /></li>
                        : <li className='py-2 px-4 text-2xl' onClick={() => setDark(!dark)}><CiLight /></li>}

                </ul>
                }




            <span className="nav-item app-store-icons">
                <a href="#your-link">
                    <i className="fab fa-apple"></i>
                </a>
                <a href="#your-link">
                    <i className="fab fa-android"></i>
                </a>
            </span>
            
            <div className="App ml-24 h-[440px] mr-4 mt-24 mb-12 text-lg flex flex-col p-16 justify-center bg-fixed bg-cover bg-no-repeat  md:flex-col	bg-blend-multiply hover:bg-blend-darken shrink " style={{ backgroundImage: `url(${pexels})` }}>

<div className="w-screen  flex-wrap flex flex-col justify-center text-sky-400  py-10">
    <h1 className=' text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>I am a</h1>
    <h1 className=' text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '> <span style={{ whiteSpace: 'pre' }} ref={el} /></h1>
    <p className='text-pink-500  text-4xl'>I am a professional web developer with expertise in ReactJS, C#,<br /> and NodeJs</p>
</div>
<button className='rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-fit p-4 text-center m-8 self-left'>Hire me</button>
</div>
            

        </div>);
}

export default Navbar;