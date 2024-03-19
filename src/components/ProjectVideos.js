import React, { useState, useEffect } from 'react';
import videos from './filesVideos.js';
import HomeButton from './HomeButton.js';
import shuffle from 'shuffle-array'; // Ensure this library is installed

export default function Project() {

  const randomIndex = Math.floor(Math.random() * videos.length);
  const [highlightedVideoLink, setHighlightedVideoLink] = useState(videos[randomIndex].link);
  const [highlightedVideoTitle, setHighlightedVideoTitle] = useState(videos[randomIndex].title);
  const handleVideoHighlight = (vlink,vtitle) => {

    setHighlightedVideoLink(vlink)
    setHighlightedVideoTitle(vtitle)
  };



  const videoCards = shuffle(videos).map((v) => {
    return (
        <div key={v.link} className=' pl-9 pr-9 mb-6 cursor-pointer' 
        onClick={()=>{
            handleVideoHighlight(v.link, v.title); 
            window.scrollTo({top:0,left:0,behavior: 'smooth'})}}>
        <div  className='flex justify-center mb-6 '>
            <iframe
                src={v.link}
                modestbranding="1"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
        <div className='text-white text-center bg-neutral-950 rounded-md p-3'>
          <h3>{v.title}</h3>
          <p className='opacity-50'>{v.editedUsing}</p>
          <p className='opacity-50'>{v.forWho}</p>
        </div>
    </div>
    );
  });


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // Custom logic to handle the refresh
      // Display a confirmation message or perform necessary actions
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return (
    <div className="bg-black">
      <div className="h-1/5 flex justify-center items-center">
        <h1 className="text-center text-6xl font-bold text-white mt-9">VIDEOS</h1>
        <HomeButton />
      </div>
      <div className='flex-col justify-center items-center mb-9 mt-9 h-dvh'>
        <iframe
          className='flex justify-center mb-6 w-5/6 h-4/6 m-auto'
          src={highlightedVideoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <h3 className='text-white text-center'>{highlightedVideoTitle}</h3>
      </div>
      <div className='flex flex-wrap m-auto justify-center'>
        {videoCards}
      </div>
      <div className="fixed bottom-0 w-screen animate-bounce">
        <h3 className='text-center text-white bg-neutral-800 w-fit mx-auto p-3 rounded-md'>
          Click Title Card to Enlarge
        </h3>
      </div>
    </div>
  );
}

