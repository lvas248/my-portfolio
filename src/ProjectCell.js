function ProjectCell({project, updateSelectedProjectId, selectedProjectId}){
    
    const isSelected = (project.id === selectedProjectId)
    
    return ( 
        <div
            className={`
                    relative
                    ${(selectedProjectId && !isSelected) ? 'animate-fade-out' : 'animate-select' } 
                `}
        >
            
            <img
                src={project.image}
                alt='mobile project'
                className={`h-[15vh] sm:h-[25vh] hover:cursor-pointer ${isSelected && 'scale-120'}`}
                onClick={()=>updateSelectedProjectId(project.id)}
            />
            { !selectedProjectId && <p className='textGreen text-xs font-bold m-auto '>{project?.title}</p>}


        </div> 
    );
}

export default ProjectCell;