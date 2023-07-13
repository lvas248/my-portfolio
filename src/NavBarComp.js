import { NavItem, NavLink } from 'reactstrap'

function NavBarComp(){

    function scrollToSection(sectionId){
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className='flex flex-row shadow-sm gap-x-5 place-content-end p-3 list-none sticky top-0 z-10 backdrop-blur-md rounded-[25px] text-white'>

            <NavItem                    
                // onClick={()=>scrollToSection('home')} 
                className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded' href='#' 
                >
                <NavLink href='#'>Home</NavLink>
            </NavItem>

            <NavItem 
                // onClick={()=>scrollToSection('about')} 
                className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded'
                >
                <NavLink href='#' >About</NavLink>
            </NavItem>

            <NavItem 
                // onClick={()=>scrollToSection('portfolio')} 
                className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded'
                >
                <NavLink href='#' >Portfolio</NavLink>      
            </NavItem>

            <NavItem 
                // onClick={()=>scrollToSection('contact')} 
                className='bg-tranparent font-bold text-[rgb(17,76,63)] hover:bg-[rgb(17,76,63)] hover:text-white px-2 py-1 rounded'
                >
                <NavLink href='#'>Contact</NavLink>
            </NavItem>


        </div>
    )
}
export default NavBarComp