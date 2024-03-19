import { useState } from 'react'


import images from './filesImages.js'
import HomeButton from './HomeButton.js';

export default function Project(){

    const [highlight, setHighlights] = useState(2);
    const [isFullScreen, setFullScreen] = useState(false);

    function handleHighlight(i){
        setHighlights(i)
        console.log(i)
    }
    /*
    function handleFullScreen(){
        setFullScreen(prevValue => !prevValue)

    }
    */
    
    
    const allFiles = images.map( (i,index) => {
        return(
            <div key={i.title} className='w-1/4 h-fit text-white text-center cursor-pointer' 
                onClick={()=>{handleHighlight(index); window.scrollTo({top:0,left:0,behavior: 'smooth'}); setFullScreen(false)}}>       
                <img src={i.link} alt='logo' className='w-full h-full object-contain mb-2 rounded-xl 
                         opacity-50 hover:opacity-100 transition-all'/>

                <h3 className='font-bold'>{i.title}</h3>
                <p className='opacity-50 text-sm'>{i.editedUsing}</p>
                <p className='opacity-50 text-sm'>{i.forWho}</p>
            </div>
        )
    })

    return(
        <div className="bg-black h-dvh pb-5 w-screen">
            <div className="h-1/5 flex justify-center items-center">
                <h1 className="text-center text-6xl font-bold text-white mt-9">IMAGES</h1>
                <HomeButton/>–
            </div>
            <div className='mb-9 mt-9 cursor-pointer flex-col text-center'>
                <p className='text-white opacity-40 mb-2 text-xs'>{isFullScreen ? "Click to Shrink" : "Click to Expand"}</p>
                <img src={images[highlight].link} alt='logo' 
                    className={`object-contain ${isFullScreen ? "w-full" : "w-1/3"}
                                m-auto`}
                    onClick={()=>{setFullScreen(value=>!value)}}
                />
                <h3 className='text-white text-center mt-3'>{images[highlight].title}</h3>
            </div>
        
        {/*///https://stackoverflow.com/questions/63989071/how-to-send-props-to-component-without-rendering */}
            <div className='flex flex-wrap items-end gap-10 justify-center p-10'>
                    {allFiles}
            </div>
        </div>
    )
}