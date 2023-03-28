import * as React from 'react';
import pic from '../assets/pic.jpg'
const About = () => {
    return (<div className='ml-24'>
      
        <h1 className='justify-center flex text-4xl '>About me</h1>
        <div className='flex m-4 flex-wrap'>

            <div className="basis-1/2 h-screen flex flex-col border-r-2">
                <img className='rounded-full border-x-8 shadow-2xl shadow-inherit  h-fit max-w-sm	self-center overflow-hidden' src={pic} alt="About section" />
            </div>
            <div className="basis-1/2 h-screen flex flex-col p-4 ">

                <p className='text-lg text-secondary self-center italic'>Independent web developer skilled in Nodejs, C# Reactjs, Express, postgress and other relational databases.
                    I also have understanding github, cmd, microsoft office, and wordpress as well.</p>
                    <button className='rounded-full bg-red-400 w-fit p-4 text-center m-8 self-center'>Download CV</button>
            </div>
        </div>
    </div>
    );
}

export default About;