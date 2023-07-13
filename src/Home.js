import sasha from './media/sasha.jpeg'

function Home() {
    
    return ( 
        <div 
            id='home'
            className='h-screen flex px-3'
            >

            <div
                className='w-[50vw] h-full border-r-2 pt-[8%]'
                >
                    <img 
                        src={sasha} 
                        alt='place-holder' 
                        className='h-[40vh] rounded-full'

                        />
                 

            </div>

            <div
                className='flex flex-col w-[50vw] h-full pt-[8%] text-left place-content-center'
                >
                    <h3 className='text-lg'>Hello there!</h3>
                    <h1 className='text-5xl '>I am</h1>
                    <h1 className='text-7xl font-bold text-[rgb(225,74,56)] underline underline-offset-3'>Luis Vasquez</h1>
                    <p className='text-lg mt-3'>I am a motivated full stack developer with a strong commitment to creating functional and visually appealing web applications. Currently, I am actively searching for new opportunities to grow and contribute my skills.</p>

            </div>

        </div> 
    );
}

export default Home;