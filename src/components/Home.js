import {useState,React} from 'react';

import logoBlack from '../files/logo-lain-animation.gif';

export default function Home(){
    let colors = [
        "text-pastel-yellow",
        "text-pastel-green",
        "text-pastel-blue",
        "text-pastel-violet",
        "text-pastel-red",
        "text-pastel-orange",
    ];
    let bgcolors = [
        "hover:bg-pastel-yellow",
        "hover:bg-pastel-green",
        "hover:bg-pastel-blue",
        "hover:bg-pastel-violet",
        "hover:bg-pastel-red",
        "hover:bg-pastel-orange",
    ];
    const [count, setCount] = useState(0); // Start with the first color
    
    function handleAdd() {
        setCount(prevCount => prevCount + 1);
    }
    
    return(
        <div className='bg-black'>
            <div className="max-w-screen-xl h-screen bg-black p-9 m-auto
                            lg:flex 
                            sm:flex-col:">
                <div className="w-full h-auto flex justify-center items-center m-auto
                        lg:max-w-screen-lg
                        sm:max-w-2xl sm:justify-center sm:items center">
                    <img 
                    src={logoBlack} 
                    alt="logo" 
                    placeholder="LAin"
                    />
                </div>
                <div className="w-screen-1/2 flex justify-center items-center bg-black">
                    <h1 className="p-20 text-white max-w-xl text-justify text-sm cursor-default
                                sm:p-3 sm:text-sm sm:max-w-sm">
                        <a className={` hover:text-black  cursor-pointer hover:pl-5 hover:pt-1 hover:pb-1 hover:pr-2 transition-all ease-out duration-100 delay-300 ${colors[count]} ${bgcolors[count]}`}  
                            onMouseOver={count === 6  ? setCount(0) : handleAdd}
                            href="https://bard.google.com/chat/3d3c1680a9ce6301" 
                            target='_blank' 
                            rel="noopener noreferrer">
                            LAIn by Elly  Mar<br/>
                        </a>the video editing wizard, logo-crafting artist, and code-slinging dreamer, invites you on a journey through his passion projects since 2021. Forget dusty archives, expect mind-blowing edits, heart-stopping logos, and code that'll make you say "whaaat!?" Buckle up, grab your headphones, and witness the evolution of Elly Mar – the artist, the programmer (Amen!), the dreamer whose heart beats in every pixel.
                    </h1>
                </div>
            </div>
        </div>
    )
};