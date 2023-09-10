import sasha from '../Assets/media/me3.png'

function Home() {

    
    return ( 
        <div 
            id='home'
            className='h-[100vh] relative '
            >

            <div
                className='h-[50vh] textGreen grid place-content-center text-left m-auto w-[90vw]'
            >
                <h1 className='text-[60px] font-bold '> Luis Vasquez.</h1>
                <h2>Full Stack Web Developer.</h2>

            </div>

            <div
                className='h-[40vh] rounded-3xl place-self-end border-black border-[6px] border-x-[6px] relative grid bgGreen p-4 
                '
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
            
            </div>
 

        </div> 
    );
}

export default Home;