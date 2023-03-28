import { useEffect, useRef } from "react";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

const Skills = () => {
    const menuButton: any = useRef(null);
function print(){
    const output= menuButton.current;
    console.log(output)
}

    return (<div className='ml-28 mt-8 justify-center flex flex-col'>
       
        <h1 className="text-2xl self-center">Skills</h1>
        <div className="flex flex-row">
        

            <div className="w-1/2 flex flex-wrap mx-6 ">

                <div className="card hover rounded-none m-2 w-40 h-20 bg-slate-400 hover:bg-sky-500 ">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400 hover:bg-sky-500 hover:ring-sky-500">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400 hover:bg-sky-500 hover:ring-sky-500">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400 hover:bg-sky-500 hover:ring-sky-500">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400 hover:bg-sky-500 hover:ring-sky-500">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    ❤
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    🔥
                </div>

            </div>
            <div className="w-1/2 flex flex-wrap mx-6">
                <div className="card rounded-none  m-2 w-40 h-20 bg-slate-400">
                    ☔
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    ☔
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    ☔
                </div>
                <div className="card rounded-none m-2 w-40 h-20 bg-slate-400">
                    ☔
                </div>
            </div>
        </div>

    </div>);
}

export default Skills;