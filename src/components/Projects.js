import { useState } from "react";
import { Link } from "react-router-dom";

import mixedLogo1 from '../files/mixedLogo/mixed-logo-1.gif'
import mixedLogo2 from '../files/mixedLogo/mixed-logo-2.gif'
import mixedLogo3 from '../files/mixedLogo/mixed-logo-3.gif'
export default function Projects(){
    const projects = [
        {
            title: "Videos",
            description: "Check out my best videos ever! These videos are the ones I like to watch many times without losing the feeling of amazement.",
            cover: mixedLogo1
        },
        {
            title: "Images",
            description: "These are some great shots I've taken so far. I'm not a big fan of photography but I take photos because stills are sometimes cool.",
            cover: mixedLogo2
        },
        {
            title: "Programs",
            description: "I really wanted to be a programmer but it's just so intimidating that it takes me months before I go back on track after months of procrastination and cowardliness",
            cover: mixedLogo3
        }
    ];
    
    let colors = [
        "hover:shadow-pastel-yellow",
        "hover:shadow-pastel-green",
        "hover:shadow-pastel-blue",
        "hover:shadow-pastel-violet",
        "hover:shadow-pastel-red",
        "hover:shadow-pastel-orange",
    ];
    const [count, setCount] = useState(0); // Start with the first color
    const [choice, setChoice] = useState("");
    function revealColor(i){
        setCount(i+1)
    }
    function handleChoice(t){
        setChoice(`/project/${t}`);
    }
    const project = projects.map((p,index) => {
       return(
            <div className={`bg-black hover:cursor-pointer rounded-xl mb-6 p-9  m-auto max-w-md ${colors[count]} shadow-subtle-shadow shadow-black transition-all duration-300
                            lg:m-6 `} 
                onMouseEnter={()=>revealColor(index)}
                onClick={()=>{handleChoice(p.title)}}>
                <Link to={`${choice}`} className="flex          lg:flex-col">
                    <img alt="img" 
                        src={p.cover}
                        className="object-contain w-1/3         sm:w-1/2            lg:w-full"/>
                    <div>
                        <h2 className = "text-center text-xl pb-3 text-white font-bold">{p.title}</h2>
                        <span className = "text-xs  text-gray-300">{p.description}</span>
                    </div>
                </Link>
            </div>
       ) 
    })
    return(
        <div id='projects' className="w-auto h-max bg-neutral-950 flex-col items-center justify-center p-9">
            <div className="h-1/5 flex justify-center items-center">
                <h1 className="text-center text-6xl font-bold text-white mt-9">PROJECTS</h1>
            </div>
            <div className="mx-auto mt-9 justify-around items-center
                  lg:flex  
                  2xl:w-fit">
                {project}
            </div>
        </div>
    )
}