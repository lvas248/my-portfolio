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
                className={` rounded-3xl place-self-end border-black border-[6px] border-x-[6px] relative grid bgGreen p-4 
                 mt-[5vh]
                 h-[60vh] sm:h-[35vh] md:h-[40vh] transition-height duration-500 overflow-hidden
                ${expand && ' h-[80vh] sm:h-[54vh] md:h-[55vh] lg:h-[55vh] '}
                `}
            >
                <div className='sm:grid sm:grid-cols-2  text-white'>

                    <div className='col-span-1  w-full flex flex-col place-content-center text-center'>
                        <div className='m-auto '>
                            <h3 className='font-bold'>Luis Vasquez</h3>
                            <h1 className='font-bold text-[40px]'>Full Stack Developer</h1>
                            <p className='text-xs'>I construct end-to-end web applications that are dependable, scalable, and prioritize an exceptional user experience.</p>
                        </div>
                    </div>
                    <div className='                                
                                bgOrange pt-4 px-4 rounded-t-full border-black border-[6px]
                                place-self-center
                                max-h-[296px]
                                
'>
                        <img 
                            src={sasha} 
                            alt='place-holder' 
                            className='
                                object-cover
                                mx-auto
                                animate-scale-in
                                max-h-[250px]
                            '
                        />                   

                    </div>
                </div>



                <div className={`p-4 m-auto text-white animate-fade-in  ${expand ?'block': 'hidden'} border-t-1 `}>
                    <h3>About.</h3>                    
                    <p className='text-xs sm:text-xs'>As a former Retail Operations Manager, I became well-acquainted with the dynamic world of commerce, where precision and efficiency were the key to my success. My journey extended into the fields of construction and architecture, where I uncovered a genuine passion for building from the ground up. Today, I've shifted my focus to web development, drawing from these diverse experiences to craft websites and online apps firmly rooted in a strong foundation.</p>    

                </div>   


                <button onClick={()=>setExpand(!expand)} className={`textOrange m-auto flex py-4 flex-col text-center font-bold animate-fade-in ${expand && 'hidden'}`}>see more</button>
                <button onClick={()=>setExpand(!expand)} className={`textOrange m-auto flex py-4 flex-col text-center font-bold animate-fade-in ${!expand && 'hidden'}`}>see less</button>
             
            
            </div>


 

        </div> 
    );
}

export default Home;