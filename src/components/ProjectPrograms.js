
import programs from './filesPrograms.js'
import HomeButton from './HomeButton.js';

export default function Project(){

    
    const allFiles = programs.map( (p,index) => {
        return(
           <a href={p.link}>
                <div key={p.title} className='text-white text-center pl-9 pr-9 mb-6 cursor-pointer'>
                <div className='w-56 h-56  m-auto mb-2'>
                    <img src={p.cover} alt='cover' className='h-56 object-cover rounded-2xl'/>
                </div>
                <h3>{p.title}</h3>
                <p className='opacity-50'>{p.editedUsing}</p>
                <p className='opacity-50'>{p.forWho}</p>
                <p className='opacity-50'>viewport : {p.viewport}</p>
                </div>
           </a>
        )
    })
    
    return(
        <div className="bg-black h-screen">
            
            <div className="h-1/5 flex justify-center items-center">
                <h1 className="text-center text-6xl font-bold text-white mt-9">PROGRAMS</h1>
                <HomeButton/>
            </div>
            <div className='flex flex-wrap justify-center'>
                {allFiles}
            </div>
            
        </div>
    )
}