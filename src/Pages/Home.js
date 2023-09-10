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


                <div className={`p-4 m-auto text-white animate-fade-in ${!expand && 'hidden'}`}>
                    <h3>About.</h3>                    
                    <p className='text-xs sm:text-sm'>As a former Retail Operations Manager, I became well-acquainted with the dynamic world of commerce, where precision and efficiency were the key to my success. My journey extended into the fields of construction and architecture, where I uncovered a genuine passion for building from the ground up. Today, I've shifted my focus to web development, drawing from these diverse experiences to craft websites and online apps firmly rooted in a strong foundation.</p>    

                </div>   


                <button onClick={()=>setExpand(!expand)} className={`textOrange m-auto flex py-4 flex-col text-center font-bold animate-fade-in ${expand && 'hidden'}`}>see more</button>
                <button onClick={()=>setExpand(!expand)} className={`textOrange m-auto flex py-4 flex-col text-center font-bold animate-fade-in ${!expand && 'hidden'}`}>see less</button>
             
            
            </div>


 

        </div> 
    );
}

export default Home;