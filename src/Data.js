import ffImage from './Assets/p_media/cell/coloredFFcell.png'
import ffImage2 from './Assets/p_media/laptop/coloredFetch.png'
import bwImage from './Assets/p_media/cell/coloredBWcell.png'
import bwImage2 from './Assets/p_media/laptop/coloredBW.png'
import jobImage from './Assets/p_media/cell/coloredJBcell.png'
import jobImage2 from './Assets/p_media/laptop/coloredJB.png'
import portfolioImage from './Assets/p_media/cell/coloredPOcell.png'
import portfolioImage2 from './Assets/p_media/laptop/coloredPO.png'

import rails from './Assets/update_logos/rails/rails_white_400.png'
import react from './Assets/update_logos/react/react_white_400.png'
import ruby from './Assets/update_logos/ruby/ruby_white-400.png'
import javascript from './Assets/update_logos/javascript/javascript_white_400.png'
import redux from './Assets/update_logos/redux/redux_white_400.png'
import tailwind from './Assets/update_logos/tailwind/tailwindcss_white_400.png'
import cloudinary from './Assets/update_logos/cloudinary/cloudinary_white_400.png'
import mapbox from './Assets/update_logos/mapbox/mapbox_white_400.png'
import css from './Assets/update_logos/CSS.png'
import html from './Assets/update_logos/html.png'

const projects = [

    {
        id: 1,
        title: 'NYC Job Hunt',
        image: jobImage,
        image2: jobImage2,
        description: 'React-based application offering users a streamlined platform to explore, save, and manage NYC government job listings.',
        techs: ['React.js', 'Rails', 'Redux', 'TailwindCSS', 'Active Record' ],
        git: 'https://github.com/lvas248/jobs',
        demo: 'https://jobs-b8os.onrender.com'            
    },
    {
        id:2,
        title: 'FetchFinder NYC',
        image: ffImage,
        image2: ffImage2,
        description: 'A GPS-based web app that helps NYC dog owners find nearby dog parks with ratings, feedback, and real-time occupancy data, ensuring enjoyable outings for their furry friends.',
        techs: ['React.js', 'Rails', 'Redux', 'Reactstrap', 'Mapbox' ],
        git: 'https://github.com/lvas248/FetchFinder',
        demo: 'https://fetch-finder.onrender.com'            
    },        
    {
        id: 3,
        title: 'BirdWatcher',
        image: bwImage,
        image2: bwImage2,
        description: 'A diary app for bird enthusiasts to capture and document their bird sightings through photos and notes, creating a personalized collection of memorable encounters.',
        techs: [ 'React.js', 'Rails', 'Reactstrap', 'Cloudinary' ],
        git: 'https://github.com/lvas248/bird_watchr',
        demo: 'https://bird-watcher.onrender.com'
    },
    // {
    //     id: 3,
    //     title: 'Exotic Farmers Market',
    //     image: efmImage,
    //     description: 'A web app for discovering, purchasing, and adding exotic fruits and vegetables to a database.',
    //     tech: [ 'React.js', 'JSON', 'Reactstrap' ],
    //     git: 'https://github.com/lvas248/exotic-farmers-market',
    //     web: 'https://exotic-farmers-market.onrender.com'
    // },
    {
        id:4,
        title: 'My Portfolio Website',
        image: portfolioImage,
        image2: portfolioImage2,
        description: 'A place where you can explore my creative journey. Gain insight into my unique perspective by checking out the intersection of creativity and technical expertise showcased in my work.',
        techs: ['React.js', 'TailswindCSS', 'EmailJS' ],
        git: 'https://github.com/lvas248/my-portfolio',
        demo: 'luisvasquez.dev'            
    }
]

const skills = [
    {id: 11, name: 'React.js', logo: react, type: 'framework'},
    {id: 12, name: 'Javascript', logo: javascript, type:'language' },
    {id: 13, name: 'Redux.js', logo: redux, type: 'framework'},
    {id: 14, name: null, logo: rails, type: 'framework'},
    {id: 15, name: 'Ruby', logo: ruby, type:'language'},
    {id: 16, name: 'Tailwind', logo: tailwind, type: 'framework'},
    {id: 17, name: null, logo: cloudinary, type:'other'},
    {id: 18, name: null, logo: mapbox, type: 'other'},
    {id: 19, name: 'HTML', logo:html, type: 'other'},
    {id: 20, name: 'CSS', logo:css, type: 'other'},
  


]

export { projects, skills };