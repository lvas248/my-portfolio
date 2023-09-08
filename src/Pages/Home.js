import sasha from '../Assets/media/me3.png'

function Home() {

    // function scrollToSection(sectionId){
    //     const section = document.getElementById(sectionId);
    //     section.scrollIntoView({ behavior: 'smooth' });
    // }
    
    return ( 
        <div 
            id='home'
            className='h-[100vh] relative '
            >

            <div
                className='h-[50vh] textGreen grid place-content-center text-center'
            >
                <h1 className='text-[60px] font-bold'>Luis Vasquez.</h1>
                {/* <h3 className=''>Full Stack Web Dev</h3> */}
                {/* <h5 className='w-[40vw]'>I am a Professional End to End web developer with skills based in React and Rails. I am based in NYC</h5> */}
                {/* <h5>I'm a web developer and programmer based out of nyc.  I make web apps with skills based in React.js and Rails.</h5> */}
                {/* <h5>a full stack web dev.</h5> */}
                <h5>a clever and witty blurb that describes what i do.</h5>

            </div>

            <div
                className='h-[50vh] rounded-3xl place-self-end border-black border-[6px] border-x-[6px] relative grid bgGreen
                p-4 
                '
            >
                <img 
                    src={sasha} 
                    alt='place-holder' 
                    className='
                        h-[60vw] sm:h-[425px] bgOrange pt-4 px-4 rounded-t-full border-black border-[6px]
                        place-self-center
                    '
                />
            
            </div>
 

        </div> 
    );
}

export default Home;