import { skills } from './Data'

function Skills() {


    const renderSkills = skills?.map( s =>{
        return (
             <div 
                key={s.id}
                className={`
                    drop-shadow-xl
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
                        className='h-[40px] m-auto'
                    />

                    { s.name && <h1 className='text-[30px]'>{s.name}</h1> }
                

            </div>
            )
    })

    return ( 
    <div id='skills'
        className='min-h-screen pt-[10vh] sm:pt-[10vh] grid gap-6 relative'

    >
        <div className='mt-2 pl-[10vw] flex flex-row sticky'>
            <h1
                className='text-left textOrange'
            >skills.</h1>
            <h1
                className='text-left textGreen'
            >languages.</h1>
            <h1
                className='text-left text-stone-300'
            >frameworks.</h1>            
        </div>


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