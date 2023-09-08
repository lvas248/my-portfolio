import { useEffect } from 'react'

function SkillCard({skill}){

    useEffect( ()=>{

        function handleScroll(e){
          
        }
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div className='relative shadow-2xl transition-all duration-300 sm:hover:scale-105'>
                
            <div className='
                h-[15vh] w-[15vh]
                sm:h-[20vh] sm:w-[20vh]
                border-[6px] border-black 
                rounded-3xl
                absolute
                top-4 right-4
                bg-black
            '>

            </div>
            <div 
                className={`
                    drop-shadow-xl
                    grid place-content-center
                    text-white
                    bgGreen
                    rounded-3xl
                    h-[15vh] w-[15vh]
                    sm:h-[20vh] sm:w-[20vh]
                    m-auto
                    p-2
                    border-[6px] border-black
                    `}>

                    <img 
                        key={skill.name}
                        src={skill.logo}
                        alt={skill.name}
                        className='h-[25px] m-auto'
                    />

                    { skill.name && <h1 className='text-[20px]'>{skill.name}</h1> }
                

            </div>

        </div>        
    )


}

export default SkillCard;