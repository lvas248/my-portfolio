import { skills } from './Data'

function Skills() {


    console.log(skills)
    const renderSkills = skills?.map( s =>{
        return (
             <div 
                    
                className={`
                    grid place-content-center
                    text-white
                    bgGreen
                    rounded-3xl
                    h-[20vh] w-[20vh]
                    m-auto
                    shadow-2xl
                    transition-all duration-300
                    hover:scale-105
                    `}>

                <div>
                    <img 
                        key={s.name}
                        src={s.logo}
                        alt={s.name}
                        className='h-[4vh] m-auto'
                    />

                    { s.name && <h1>{s.name}</h1> }
                
                </div>


            </div>
            )
    })

    return ( 
    <div id='skills'
        className='grid h-screen pt-[10vh]'
    >
        <h1 className=''>Skills</h1>


        <div className='grid grid-cols-3 gap-5 w-[67vw] place-content-center m-auto'>
            {renderSkills}
        </div>

    </div> );
}

export default Skills;