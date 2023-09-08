import { NavItem, NavLink } from 'reactstrap'
import github from './Assets/logos/orange-github-mark.png'
import linkedIn from './Assets/logos/LI-Logo.png'

function NavBarComp(){


    function scrollToSection(sectionId){
        const section = document.getElementById(sectionId.toLowerCase());
        section.scrollIntoView({ behavior: 'smooth' });
    }

    const navItems = ['Home', 'Skills', 'Projects', 'Contact']

    const renderNavItems = navItems.map( n => {
        return (                    
        <NavItem
            key={n}
            onClick={() => scrollToSection(n)}
            className='bg-transparent font-bold textOrange px-2 py-1 rounded hover:anmiate-pulse mix-blend-difference'
            href='#'
        >
            <NavLink href='#'>{n}</NavLink>
        </NavItem>)
    })

    return(

        <div>
            <div className=' fade-in flex flex-row shadow-md gap-x-5 place-content-end p-3 list-none fixed top-0 z-10 backdrop-blur-md  text-white w-full max-w-[1050px]'>
                {renderNavItems}
            </div>

            <div className='
                z-10 fixed bottom-0
                backdrop-blur-md 
                h-[4vh]
                px-4
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