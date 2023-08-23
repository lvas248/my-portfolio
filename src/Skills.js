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
                    h-[15vh] w-[15vh]
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
                        className='h-[25px] m-auto'
                    />

                    { s.name && <h1 className='text-[20px]'>{s.name}</h1> }
                

            </div>
            )
    })

    return ( 
    <div id='skills'
        className='min-h-screen  max-w-[1050px] m-auto pt-[10vh] sm:pt-[10vh] grid relative '

    >
        <div className='pl-[10vw] flex'>
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

        <div className='m-auto text-xs sm:text-sm text-center font-bold textGreen w-[80vw] sm:w-[67vw]'>
            <p>Take a peek into the machinery propelling my web development. Encounter tools for dynamic interfaces, data finesse, and more. Uncover the gears that power the experience.</p>
        </div>


        <div className='
            flex flex-wrap            
            m-auto
            gap-3
            sm:w-[67vw] p-[2vh]
            '>

            {renderSkills}
        </div>

    </div> );
}

export default Skills;