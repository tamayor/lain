
import { Link } from "react-router-dom"
import { useState } from "react";

export default function HomeButton(){

    let colors = [
        "bg-pastel-yellow",
        "bg-pastel-green",
        "bg-pastel-blue",
        "bg-pastel-violet",
        "bg-pastel-red",
        "bg-pastel-orange",
    ]; 
    const [count, setCount] = useState(0); // Start with the first color
    
    function handleAdd() {
        setCount(prevCount => prevCount + 1);
    }

    return(
        <button className= {`bg-neutral-900 p-1 ml-1 rounded-lg ${colors[count]}`} 
            onMouseOver={count === 6  ? setCount(0) : handleAdd}>
            <Link to="/">Home</Link>
        </button>
    )
}