import ProjectCard from "./ProjectCard";
import projects from './Data'

function Projects() {

    const renderProjectCards = projects.map( p => {
        return <ProjectCard key={p.title} project={p} />
    })

    return ( 
        <div 
            id='projects'
            className='min-h-screen px-5 pt-24 relative '
            >
            
            <h1 className='underline mb-5font-bold text-right text-[rgb(225,74,56)]'>My Projects</h1>
            
            <div className='w-[95%] p-1 m-auto  '>
                {renderProjectCards}
            </div>


        </div> 
    );
}

export default Projects;