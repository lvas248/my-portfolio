import { skills } from './Data'

function Skills() {


    console.log(skills)
    const renderSkills = skills?.map( s =>{
        return (
             <div 
                key={s.id}
                className={`
                    grid place-content-center
                    text-white
                    bgGreen
                    rounded-3xl
                    h-[18vh] w-[18vh]
                    sm:h-[20vh] sm:w-[20vh]
                    m-auto
                    shadow-2xl
                    transition-all duration-300
                    hover:scale-105
                    p-2
                    `}>

                    <img 
                        key={s.name}
                        src={s.logo}
                        alt={s.name}
                        className='h-[4vh] m-auto'
                    />

                    { s.name && <h1>{s.name}</h1> }
                

            </div>
            )
    })

    return ( 
    <div id='skills'
        className='grid h-min pt-[10vh]'
    >
        <h1 className=''>Skills</h1>


        <div className='
            flex flex-wrap            
            gap-5
            
            sm:w-[67vw] 
            place-content-center 
            m-auto'>

            {renderSkills}
        </div>

    </div> );
}

export default Skills;