
import { projects } from './Data'
import ProjectCell from "./ProjectCell";
import { useState } from 'react'
import ProjectDetailCard from './ProjectDetailCard';

function ProjectsContainer(){

    const [ selectedProjectId, setSelectedProjectId ] = useState(1)

    function updateSelectedProjectId(id){
        setSelectedProjectId(id)
    }

    const renderProjects = projects.map( p =>{
        return <ProjectCell key={p?.id} project={p} updateSelectedProjectId={updateSelectedProjectId} selectedProjectId={selectedProjectId}  />
    })

    function clearSelectedProject(){
        setSelectedProjectId(null)
    }
    const selectedProject = projects?.find( p => p.id === selectedProjectId)

    return ( 
    
        <div id='projects'
            className='
                min-h-[100vh] m-auto 
                pt-[8vh] sm:pt-[6vh] 
                flex flex-col
                '
        >

            <h1
                className='mt-2 textGreen font-bold pl-[10vw] text-left'
            >projects.</h1>

            <div
                className='flex '
            >
                {renderProjects}
            </div>

            <div className='
                flex place-content-center relative 
                
            '>
                { selectedProject && <ProjectDetailCard project={selectedProject} clearSelectedProject={clearSelectedProject} /> }
            </div>

        </div> );
}

export default ProjectsContainer;