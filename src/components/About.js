import memoji from '../files/memoj-me.jpeg'
export default function About(){
    return(
        <div className='bg-neutral-900'>
            <div id='about' className=" p-12 m-auto w-fit">
                <div className="h-1/5 flex justify-center items-center">
                    <h1 className="text-center text-6xl font-bold text-white mt-9">ABOUT</h1>
                </div>
                <div className="
                            lg:flex">
                    <div className="w-fit max-w-md m-auto
                            lg:m-9">
                        <img src={memoji} alt='memoji' className='w-1/2 m-auto my-9 rounded-md'/>
                        <span className="text-justify text-white text-sm">
                            Hi, Elly here, I was a vlogger wayback 2021 - pandemic, 
                            I felt that time, I found already what I want to do
                            it was fun because it made me busy, 
                            I felt productive but in year 2022 my facebook page was stolen, 
                            I was scammed. 
                            I was depressed and that's when things became really messy (internally),
                            I'm feeling lost of the moment.
                            <br/>
                            <br/>
                            I was in college those days, an aspiring programmer,
                            but my heart is still in love in making videos,
                            time is passing, my passion is there, 
                            but I didnt have the courage to make more and more the way I used to.

                            Today, January 28, 2024,
                            I am building this website and went back coding after several months of overthinking and procastination.
                            Still in college and I have coming thesis, 
                            currently Dinagyang Festival,
                            and here I am feeling the vibe of coding.
                            I hope this is a new burst of excitement in my creator journey.
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className='text-neutral-400'>Contact : +63 968 4299 892</h3>
                </div>
            </div>
        </div>
    )
}