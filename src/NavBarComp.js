import { NavItem, NavLink } from 'reactstrap'
import github from './Assets/logos/orange-github-mark.png'
import linkedIn from './Assets/logos/LI-Logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function NavBarComp(){

    const [ isOpen, setIsOpen ] = useState(false)

    function toggle(){
        setIsOpen(!isOpen)
    }

    function scrollToSection(sectionId){
        toggle()
        const section = document.getElementById(sectionId.toLowerCase());
        section.scrollIntoView({ behavior: 'smooth' });
    }

    const navItems = ['Home', 'Skills', 'Projects', 'Contact']

    const renderNavItems = navItems.map( n => {
        return (  
          
                <NavItem
                    key={n}
                    onClick={() => scrollToSection(n)}
                    className='
                        bg-transparent font-bold rounded hover:anmiate-pulse 
                        w-full h-[10vh] grid place-content-center
                        sm:w-fit sm:text-lg 
                        
                        '
                    href='#'
                >
                    <NavLink href='#'>{n}</NavLink>
                </NavItem>

              
        )             
    })

    return(

        <div className=''>

            <div className=' 
                w-[100vw] max-w-[1050px]
                bgGreen textOrange 
                gap-x-5 p-3 list-none fixed top-0 z-10 
                shadow-2xl border-black border-x-[6px] border-b-[6px] rounded-b-2xl
                '>

                <div className='flex place-content-end sm:hidden'>
                    <Hamburger toggled={isOpen} onToggle={toggle}  />
                </div>                    
                <div 
                    className={`
                        sm:flex sm:flex-row sm:place-content-end sm:h-fit sm:gap-5
                        flex flex-col place-content-center text-center h-[50vh] text-3xl
                        ${!isOpen && 'hidden'}
                    `}>
                    {renderNavItems}
                </div>
                {/* 
                    screen width > sm => flex flex-row
                    screen width < sm => grid flex
                 */}



            </div>

            

            <div className='
                z-10 fixed bottom-0
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
 
            </div>


        </div>
    )
}
export default NavBarComp