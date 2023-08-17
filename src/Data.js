import ffImage from './Assets/media/newff.png'
import bwImage from './Assets/media/newbw.png'
import efmImage from './Assets/media/efm.png'

const projects = [

    {
        id: 0,
        title: 'NYC Job Hunt',
        image: ffImage,
        description: 'Your one-stop app for finding and tracking available government jobs in New York City. Whether youre a seasoned professional or a recent graduate, this app will help you streamline your job hunt and keep track of the jobs you have already applied to.',
        tech: ['React.js', 'Rails', 'Redux', 'TailwindCSS', 'Active Record' ],
        git: 'https://github.com/lvas248/jobs',
        web: 'https://jobs-taeb.onrender.com'            
    },
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
        tech: [ 'React.js', 'Rails', 'Reactstrap', 'Cloudinary' ],
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
    {
        id:4,
        title: 'My Portfolio Website',
        image: ffImage,
        description: 'Welcome to my portfolio website, a place where you can explore my creative journey. Gain insight into my unique perspective by checking out the intersection of creativity and technical expertise showcased in my work.',
        tech: ['React.js', 'TailswindCSS' ],
        git: 'https://github.com/lvas248/my-portfolio',
        web: 'luisvasquez.dev'            
    }
]

export default projects;