import { useState } from 'react'
import TechItem from '../Components/TechItem'
import git from '../Assets/logos/orange-github-mark.png'
import demo from '../Assets/logos/orange-icons8-external-link-32.png'


function AltProjectCard({project}){
    
    const [ selectedImage, setSelectedImage ] = useState(project.images[0].image)
  
    function makeImageSelection(image){
        setSelectedImage(image)
    }

    const renderImageThumbNails = project.images.map( i => {
        return <img 
                    className={`rounded border-2 ${selectedImage === i.image && 'border-[#E14A38]'}`} 
                    onClick={()=>makeImageSelection(i.image)}
                    key={i.id}
                    alt={i.id} 
                    src={i.image} />
    } )

    const renderTechs = project.techs.map( t => {
        return <TechItem  key={t} tech={t} />
    })

    return ( 
        <div className='
            border-[6px] border-black rounded-3xl p-3 bgGreen mx-2 max-w-[360px] flex flex-col gap-1
            '>
                <div >
                    <img className='h-[250px] m-auto rounded-3xl border-[6px] border-black ' alt={project.title} src={selectedImage}/>
                    
                    <div className={`flex gap-1 h-[2vh] px-2 my-1 `}>
                         { project.images.length > 1 && renderImageThumbNails}
                    </div>
                   
                </div>
                
                <div className='text-white font-bold p-2 flex flex-col gap-1 border-t-[3px] border-black'>

                    <h5 className='font-bold'>{project.title}</h5>
                   
                    <p className='text-xs '>{project.description}</p>
                    
                    <div className='flex flex-wrap gap-1 '>
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
    );
}

export default AltProjectCard;