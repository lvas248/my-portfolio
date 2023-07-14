import ProjectCard from "./ProjectCard";
import ffImage from './media/newff.png'
import bwImage from './media/newbw.png'
import efmImage from './media/efm.png'

function Projects() {

    const projects = [

  
        {
            id:1,
            title: 'FetchFinder NYC',
            image: ffImage,
            description: 'A GPS-based web app that helps NYC dog owners find nearby dog parks with ratings, feedback, and real-time occupancy data, ensuring enjoyable outings for their furry friends.',
            tech: ['React.js', 'Rails', 'Redux', 'Reactstrap', 'Mapbox' ],
            git: 'https://github.com/lvas248/FetchFinder',
            web: 'https://fetch-finder.onrender.com'            
        },        
        {
            id: 2,
            title: 'BirdWatcher',
            image: bwImage,
            description: 'A diary app for bird enthusiasts to capture and document their bird sightings through photos and notes, creating a personalized collection of memorable encounters.',
            tech: [ 'React.js', 'Rails', 'Reactstrap' ],
            git: 'https://github.com/lvas248/bird_watchr',
            web: 'https://bird-watcher.onrender.com'
        },
        {
            id: 3,
            title: 'Exotic Farmers Market',
            image: efmImage,
            description: 'A web app for discovering, purchasing, and adding exotic fruits and vegetables to a database.',
            tech: [ 'React.js', 'JSON', 'Reactstrap' ],
            git: 'https://github.com/lvas248/exotic-farmers-market',
            web: 'https://exotic-farmers-market.onrender.com'
        },
    
    ]
    
    const renderProjectCards = projects.map( p => {
        return <ProjectCard key={p.title} project={p} />
    })

    return ( 
        <div 
            id='projects'
            className='min-h-screen px-5 pt-24'
            >
            
            <h1 className='underline mb-5 font-bold text-right text-[rgb(225,74,56)]'>My Projects</h1>
            
            {renderProjectCards}

        </div> 
    );
}

export default Projects;