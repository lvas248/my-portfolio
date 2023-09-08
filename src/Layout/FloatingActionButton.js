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
                sm:hidden 
                h-[80px] w-[80px] p-2
                fixed bottom-[2vh] left-[2vh]
              
                bgOrange text-white
                rounded-full shadow
                border-black border-[6px]

                grid grid-cols-4
                ${ isOpen && 'w-[94vw] gap-4 '}
                transition-width duration-500
            `}
           
        >
       
            
            <img 
                className={`h-[30px] w-[30px] ${isOpen ? 'col-span-1' : 'col-span-4' } m-auto`}
                onClick={toggle}
                alt='touch' src={`${isOpen ? exitLogo : moreLogo}`} />
                
            <div className={`flex gap-3 col-span-3 ${!isOpen && 'hidden'}`}>

                <a href='https://github.com/lvas248'>
                    <img 
                        className={`
                            h-[50px] w-[50px] opacity-1
                            ${!isOpen && 'hidden'}
                            ${isOpen && 'animate-fade-in'}
                                    `}
                        alt='touch' src={github} />
                </a>

                <a href='https://www.linkedin.com/in/lvas248/'>
                    <img 
                        className={`
                        h-[50px] w-[50px] opacity-1
                        ${!isOpen && 'hidden'}
                        ${isOpen && 'animate-fade-in'}
                        `}
                        alt='touch' src={linkedin} />               
                </a>
                
                <h4
                    className={`text-[18px] place-self-center opacity-1
                    ${!isOpen && 'hidden'}
                    ${isOpen && 'animate-fade-in'}
                  
                    `}>lvas248@gmail.com</h4>

            </div>

        </div> 
    );
}

export default FloatingActionButton;