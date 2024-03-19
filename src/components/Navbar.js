import { useState } from "react";
export default function Navbar(){
    let colors = [
        "text-pastel-yellow",
        "text-pastel-green",
        "text-pastel-blue",
        "text-pastel-violet",
        "text-pastel-red",
        "text-pastel-orange",
    ];

    const [count1, setCount1] = useState(0); // Start with the first color
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    function handleAdd1() {
        setCount1(prevCount => prevCount + 1);
    }
    function handleAdd2() {
        setCount2(prevCount => prevCount + 1);
    }
    function handleAdd3() {
        setCount3(prevCount => prevCount + 1);
    }
    return(
        <div className={`bg-black  border-b border-gray-500  w-auto h-20 flex justify-center items-center`} >
            <span className={`pl-3 pr-3 ${colors[count1]} transition duration-300  hover:cursor-pointer`} onMouseOver={count1 === 6  ? setCount1(0) : handleAdd1}>
                Home
            </span>
            <span className={`pl-3 pr-3 ${colors[count2]} transition duration-300  hover:cursor-pointer`} onMouseOver={count2 === 6  ? setCount2(0) : handleAdd2}>
                <a href="#projects">Projects</a>
            </span>
            <span className={`pl-3 pr-3 ${colors[count3]} transition duration-300  hover:cursor-pointer`} onMouseOver={count3 === 6  ? setCount3(0) : handleAdd3}>
               <a href="#about">About</a>
            </span>
        </div>
    )
}