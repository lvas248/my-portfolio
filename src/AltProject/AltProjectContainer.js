import { projects } from '../Data'
import AltProjectCard from './AltProjectCard';

function AltProjectContainer() {

    console.log(projects)
    const renderProjectCards = projects.map( p =>{
        return <AltProjectCard key={p.id} project={p} />
    })

    return ( 
        <div id='projects'
            className='pt-[10vh]'>

            <h1
                className='mt-2  textGreen font-bold pl-[10vw] text-left text-[40px] sm:text-[50px] '
            >projects.</h1>

            <div
                className='flex mt-8 flex-wrap gap-4 place-content-center'    
            >
                { renderProjectCards}
            </div> 

        </div>
    );
}

export default AltProjectContainer;