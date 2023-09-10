import { skills } from '../../Data'
import SkillCard from './SkillCard';
function Skills(){

    
    const renderSkills = skills?.map( s =>{
        return <SkillCard key={s.id} skill={s} />
    })

    return ( 
    <div 
        id='skills'
        className='min-h-screen max-w-[1050px] m-auto pt-[15vh] grid relative '

    >
        <div className='pl-[10vw] flex '>
            <h1
                className='text-left text-xl sm:text-3xl textOrange'
            >skills.</h1>
            <h1
                className='text-left text-xl textGreen'
            >languages.</h1>
            <h1
                className='text-left text-xl  text-white'
            >frameworks.</h1>            
        </div>

        <div className='m-auto text-xs sm:text-sm text-center font-bold textGreen w-[80vw] sm:w-[67vw]'>
            <p>Take a peek into the machinery propelling my web development.</p>
        </div>


        <div className='
            flex flex-wrap            
            place-content-center
            sm:m-auto
            gap-5
            sm:w-[67vw] p-[2vh]
            pb-[5vh]
            '>

            {renderSkills}
        </div>


    </div> 
    );
}

export default Skills;