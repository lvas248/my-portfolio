import { useEffect, useState } from "react";
import TechItem from "../../Components/TechItem";
import git from '../../Assets/logos/orange-github-mark.png'
import demo from '../../Assets/logos/orange-icons8-external-link-32.png'


function ProjectDetailCard({project, clearSelectedProject}){

    const [ animateOut, setAnimateOut ] = useState(false)

    useEffect(()=>{

   
        return ()=>{
            setAnimateOut(true)
            setTimeout(()=>{
                setAnimateOut(false)
            },300)
        }
    }, [project])


    const renderTechs = project.techs.map( t => {
        return <TechItem key={t} tech={t}/>
    })
    

    return ( 
        <div
            className={`
                    relative m-2 sm:m-auto 
                    p-[3vh] bgGreen text-white
                    rounded-3xl border-black border-[6px]
                    ${animateOut ? 'animate-glide-out-right-fast' : 'animate-glide-in-left-fast'}
                `}
        >

            <div
                className='grid lg:flex relative'
            >
                <button
                    onClick={clearSelectedProject}
                    className='absolute -top-2 -right-2 textOrange'
                >𝐗</button>

                <img
                    id='laptop_image'
                    src={project?.image2}
                    alt='project on laptop'
                    className='h-[25vh] m-auto'
                />


                <div 
                    id='project_info'
                    className='place-content-center'
                >
                    <h2
                        className='font-bold text3-xl '
                    >{project?.title}</h2>

                    <p className='max-w-[350px] text-xs  font-bold'>{project?.description}</p>

                    <div
                        className='flex flex-wrap'
                    >
                        {renderTechs}
                    </div>

                    <div className='flex place-content-end'>
                        <a href={project?.git}>
                            <img
                                src={git}
                                alt='github logo'
                                className='h-[3vh]'
                            />
                        </a>

                        <a href={project?.demo}>
                            <img
                                src={demo}
                                alt='link logo'
                                className='h-[3vh]'
                            />
                        </a>

                    </div>

                </div>


            </div>
            

        </div>
    );
}

export default ProjectDetailCard;