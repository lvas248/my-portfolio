import github from '../Assets/logos/orange-github-mark.png'
import linkedIn from '../Assets/logos/LI-Logo.png'

function BootomBanner() {

    return (             
        <div className='
            hidden sm:block
            fixed z-10 bottom-0
            w-[100vw] max-w-[1050px]
            bgGreen
            h-[4vh]
            px-4
            border-black border-x-[6px] border-t-[6px] rounded-t-2xl
            '>
            <a href='https://github.com/lvas248'><img src={github} alt='23' className='h-[2.5vh] m-1 float-left'/></a>
            <a href='https://www.linkedin.com/in/luis-vasquez-1a93a150/'><img src={linkedIn} alt='23' className='h-[3.3vh] float-left'/></a>


            <p className='
                text-right text-[rgb(225,74,56)] font-bold text-sm
                '>lvas248@gmail.com</p>

        </div> );
}

export default BootomBanner;