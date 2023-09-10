import moreLogo from '../Assets/logos/more.png'
import exitLogo from '../Assets/logos/exit.png'
import github from '../Assets/logos/github-white.png'
import linkedin from '../Assets/logos/linkedin-white.png'

import { useState } from 'react'

function FloatingActionButton() {

    const [ isOpen, setIsOpen ] = useState(false)

    function toggle(){
        setIsOpen(!isOpen)
    }

    return ( 
        <div
            className={`
                animate-glide-in-left
                sm:hidden 
                h-[80px] w-[80px] p-2
                fixed bottom-[2vh] left-[2vh]
                bgOrange text-white
                rounded-full shadow
                border-black border-[6px]
                flex 
                ${ isOpen && 'w-[88vw] gap-4'}
                transition-width duration-500
            `}
           
        >     
            <img 
                className={`h-[30px] w-[30px] m-auto
                ${isOpen && 'hidden'}
                `}
                onClick={toggle}
                alt='touch' src={moreLogo} 
            />


            <img 
                className={`                        
                object-cover h-[30px] w-[30px] align-self-center ml-3
                ${isOpen && 'animate-rotate-in'}
                ${!isOpen && 'hidden'}
                `}
                onClick={toggle}
                alt='touch' src={exitLogo} /> 


            <div className={`flex w-[70vw] place-content-end ${!isOpen && 'hidden'} ${isOpen && 'animate-fade-in'}
`}>

                <div className='w-full flex place-content-center place-self-end gap-3 m-auto '>
                    
                    <a href='https://github.com/lvas248'
                        className='hover:animate-scale-select'
                    >
                        <img 
                            className={`
                            object-cover h-10 w-10 
                                        `}
                            alt='touch' src={github} />
                    </a>

                    <a href='https://www.linkedin.com/in/lvas248/'
                        className='hover:animate-scale-select'

                    >
                        <img 
                            className={`
                            object-cover h-10 w-10 
                            `}
                            alt='touch' src={linkedin} />               
                    </a>
                    
                    
                        <h4
                            className={`text-[15px] my-auto font-bold 
                            `}>lvas248@gmail.com</h4>                    

                    

                </div>




            </div>

        </div> 
    );
}

export default FloatingActionButton;