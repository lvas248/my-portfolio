import { skills } from './Data'

function Skills() {

    console.log(skills)
    const renderSkills = skills?.map( s =>{
        return (
                <div className='flex text-white'>

                    <img 
                        key={s.name}
                        src={s.logo}
                        alt={s.name}
                        className='h-[5vh] mr-1'
                    />

                    { s.name && <h1>{s.name}</h1> }
                
                    </div>
            )
    })

    return ( 
    <div id='skills'
        className='h-screen bgOrange pt-[10vh]'
    >
        <h1 className=''>Skills</h1>
        <div className='grid grid-cols-3'>
            {renderSkills}
        </div>

    </div> );
}

export default Skills;