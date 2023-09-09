import { NavItem, NavLink } from 'reactstrap'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function NavBarComp(){

    const [ isOpen, setIsOpen ] = useState(false)

    function toggle(){

        window.innerWidth < 640 && setIsOpen(!isOpen)
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
                        font-bold rounded hover:anmiate-pulse 
                        w-full h-[10vh] sm:h-[6vh] grid place-content-center
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

            <div 
            className={`
                w-[100vw] max-w-[1050px]
                bgGreen textOrange 
                gap-x-5 p-3 list-none fixed top-0 z-10 
                shadow-2xl border-black border-x-[6px] border-b-[6px] rounded-b-2xl
                transition-height duration-300 ease-in-out
                ${isOpen ? 'h-[60vh]' : 'h-[10vh]'} 
                `}>

                <div className='flex place-content-end sm:hidden '>
                    <Hamburger toggled={isOpen} onToggle={toggle} />
                </div>                    
                <div 
                    className={`
                        sm:flex sm:flex-row sm:place-content-end sm:h-fit 
                        sm:gap-5
                        flex flex-col place-content-center text-center h-[50vh] text-3xl
                        ${!isOpen && 'hidden'}
                        ${isOpen && 'animate-fade-in-fast'}
                        
                    `}>
                    {renderNavItems}
                </div>
    
            </div>

            




        </div>
    )
}
export default NavBarComp