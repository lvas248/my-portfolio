import sasha from './Assets/media/sasha2.png'

function Home() {

    function scrollToSection(sectionId){
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
    
    return ( 
        <div 
            id='home'
            className='h-screen flex px-3 relative max-w-[1050px] m-auto'
            >

            <div
                className='
                w-[50vw] h-full px-[5%]
                relative top-20
                animate-glide-in-left
                '
                >
                     <img 
                        src={sasha} 
                        alt='place-holder' 
                        className='sm:w-fit md:w-[500px] rounded-full border-1 mt-[33%] bg-[rgb(225,74,56)]
                        '

                        
                        />
                 
            </div>

            <div
                className='flex flex-col w-[50vw] h-full text-left place-content-center animate-glide-in-left'
                >
                    <h3 className='text-xs sm:text-base'>Hello there!</h3>
                    <h1 className='text-sm sm:text-2xl'>I am</h1>
                    <h1 className='text-4xl sm:text-4xl font-bold text-[rgb(225,74,56)] underline underline-offset-3'>Luis <br/>Vasquez</h1>
                    {/* <p className='text-xs sm:text-base mt-3'>I am a motivated full stack developer with a strong commitment to creating functional and visually appealing web applications. Currently, I am searching for new opportunities to grow and contribute my skills.</p> */}
                    <p className='text-xs sm:textGreen mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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