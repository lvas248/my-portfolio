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

    console.log(isOpen)
    return ( 
        <div
            className={`
                sm:hidden h-[80px] w-[80px]

                p-2

                fixed bottom-[2vh] left-[2vh]
              
                bgOrange text-white
                rounded-full shadow
                border-black border-[6px]

                flex

                ${ isOpen && 'w-fit gap-2 place-content-center px-3 '}
            `}
           
        >
       
            <img 
                className='h-[30px] align-self-center m-auto'
                onClick={toggle}
                alt='touch' src={`${isOpen ? exitLogo : moreLogo}`} />
            
            <a href='https://github.com/lvas248'>
                <img 
                    className={`
                        h-[50px]
                        ${ !isOpen && 'hidden' }
                        `}
                    alt='touch' src={github} />
            </a>

            <a href='https://www.linkedin.com/in/lvas248/'>
                <img 
                    className={`
                    h-[50px]
                    ${ !isOpen && 'hidden' }
                    `}
                    alt='touch' src={linkedin} />               
            </a>
            

       
            <h4
                className={`text-[25px] place-self-center  ${!isOpen && 'hidden'}`}
            >lvas248@gmail.com</h4>

        </div> 
    );
}

export default FloatingActionButton;