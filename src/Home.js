import sasha from './media/sasha.jpeg'

function Home() {

    function scrollToSection(sectionId){
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
    
    return ( 
        <div 
            id='home'
            className='h-screen flex px-3 '
            >

            <div
                className='
                w-[50vw] h-full px-[5%]
                relative top-20
                '
                >
                     <img 
                        src={sasha} 
                        alt='place-holder' 
                        className='sm:w-fit md:w-[500px] rounded-full mt-[33%]'

                        
                        />
                 
            </div>

            <div
                className='flex flex-col w-[50vw] h-full text-left place-content-center'
                >
                    <h3 className='text-sm sm:text-base'>Hello there!</h3>
                    <h1 className='text-lg sm:text-2xl'>I am</h1>
                    <h1 className='text-xl sm:text-4xl font-bold text-[rgb(225,74,56)] underline underline-offset-3'>Luis <br/>Vasquez</h1>
                    <p className='text-sm sm:text-base mt-3'>I am a motivated full stack developer with a strong commitment to creating functional and visually appealing web applications. Currently, I am actively searching for new opportunities to grow and contribute my skills.</p>

            </div>

            <button
                    className='
                        bg-[rgb(17,76,63)] 
                        rounded-full 
                        text-white font-bold 
                        p-2 sm:p-1
                        absolute bottom-20 left-20
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125  duration-500
                    '
                    onClick={()=>scrollToSection('projects')}
                >See My work</button>

        </div> 
    );
}

export default Home;