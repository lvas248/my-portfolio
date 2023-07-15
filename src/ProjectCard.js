import githubIcon from './logos/github-mark.png'
import linkIcon from './logos/icons8-external-link-32.png'


function ProjectCard({project}) {
 
      
      const renderStackList = project.tech.map( t =>{
        return <p className='border-2 border-[rgb(225,74,56)] font-bold ] w-[fit-content] text-[rgb(225,74,56)] text-sm p-[3px]'key={t}>{t}</p>
    })

    return ( 
        <div
            className=' h-[fit-content] flex flex-col flex-col-reverse sm:flex-row border-bottom p-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  duration-500
            '
        >

            <div
                className='basis-3/5 text-left p-2 '
            >

                <h3
                    className='text-xl font-bold'>
                        {project.title}
                </h3>

                <p>{project.description}</p>
                
                <div
                    className='flex gap-1 flex-wrap'>
                    {renderStackList}
                </div>

                <div className='p-2 text-sm flex gap-2 float-right sm:float-none'>
                    <a href={project.git} className='underline'><img className='h-6' alt='git' src={githubIcon}/></a>
                    <a href={project.web} className='underline'><img className='h-6' alt='linked' src={linkIcon}/></a>
                </div>


            </div>

            <div
                className='basis-2/5 p-4'
            >
                <img 
                    src={project.image} 
                    alt='asd' 
                    className='drop-shadow-lg'
                    />

            </div>


        </div>
     );
}

export default ProjectCard;