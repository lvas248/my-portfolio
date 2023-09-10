import sasha from '../Assets/media/me3.png'
import { useState } from 'react'

function Home() {

    const [ expand, setExpand ] = useState(false)
    
    return ( 
        <div 
            id='home'
            className='h-fit relative pt-[10vh]'
            >

            <div
                className='h-[25vh] textGreen grid place-content-center text-center m-auto w-[80%] '
            >
                <h1 className='text-[40px] sm:text-[50px] font-bold my-auto'> Luis Vasquez.</h1>


                    <div className='p-2'>
                        <h2 className='my-auto pl-2 text-2xl'>Web Developer.</h2>
                        <div className='text-xs pl-4 m-auto'>
                            <p className='my-auto'>Front end | Back end</p>
                            <p className='my-auto'> NYC based</p>
                        </div>

                    </div>


            </div>

            <div
                className={` rounded-3xl place-self-end border-black border-[6px] border-x-[6px] relative grid bgGreen p-4 
                h-[50vh] transition-all duration-[0.500s] 
                ${ expand && 'h-[85vh] sm:h-[70vh]'}
                `}
            >
                <img 
                    src={sasha} 
                    alt='place-holder' 
                    className='
                        animate-scale-in
                        h-[35vh] bgOrange pt-4 px-4 rounded-t-full border-black border-[6px]
                        place-self-center
                    '
                />


                <div className={`p-5 m-auto text-white animate-fade-in ${!expand && 'hidden'}`}>
                    <h3>About.</h3>                    
                    <p className='text-xs sm:text-sm'>Former Retail Operations Manager, I've steered through the fast-paced world of retail with precision and efficiency. Beyond retail, I've ventured into the realms of construction and architecture, finding appreciation in the process of crafting from the ground up. Today, my journey has brought me to web development, where I combine these experiences to create digital solutions with a solid foundation.</p>    
                </div>   


                <button onClick={()=>setExpand(!expand)} className={`textOrange m-auto flex py-4 flex-col text-center font-bold animate-fade-in ${expand && 'hidden'}`}>see more</button>
                <button onClick={()=>setExpand(!expand)} className={`textOrange m-auto flex py-4 flex-col text-center font-bold animate-fade-in ${!expand && 'hidden'}`}>see less</button>
             
            
            </div>


 

        </div> 
    );
}

export default Home;