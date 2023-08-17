import { NavItem, NavLink } from 'reactstrap'
import github from './Assets/logos/orange-github-mark.png'
import linkedIn from './Assets/logos/LI-Logo.png'

function NavBarComp(){


    function scrollToSection(sectionId){
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }


    return(

        <div>
            <div className=' fade-in flex flex-row shadow-md gap-x-5 place-content-end p-3 list-none fixed top-0 z-10 backdrop-blur-md  text-white w-screen'>

                    <NavItem                    
                        onClick={()=>scrollToSection('home')} 
                        className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded' href='#' 
                        >
                        <NavLink href='#'>Home</NavLink>
                    </NavItem>

                    <NavItem 
                        onClick={()=>scrollToSection('projects')} 
                        className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded'
                        >
                        <NavLink href='#' >Projects</NavLink>      
                    </NavItem>

                    <NavItem 
                        onClick={()=>scrollToSection('about')} 
                        className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded'
                        >
                        <NavLink href='#' >About</NavLink>
                    </NavItem>


                    <NavItem 
                        onClick={()=>scrollToSection('contact')} 
                        className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded'
                        >
                        <NavLink href='#'>Contact</NavLink>
                    </NavItem>

    
                


            </div>

            <div className='
                z-10 fixed bottom-0
                w-full backdrop-blur-md 
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