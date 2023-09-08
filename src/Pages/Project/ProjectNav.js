import { NavLink } from "react-router-dom";

function ProjectNav({project}){

    return ( 

        <NavLink 
            activeClassName='rounded-l-[40px] font-bold text-white bg-[rgb(17,76,63)] '
            className=' max-h-[75px] grid place-content-center border-black text-black no-underline  '
            key={project.id} 
            to={`/${project.title}`}>
                {project.title}
            
        </NavLink>

    )
}

export default ProjectNav;