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
        <div className='pl-[10vw] flex flex-col sm:flex-row '>
            <h1
                className='text-left text-[40px] sm:text-[50px] textOrange'
            >skills.</h1>
            <h1
                className='text-left text-[40px] sm:text-[50px] textGreen'
            >languages.</h1>
            <h1
                className='text-left text-[40px] sm:text-[50px] text-white'
            >frameworks.</h1>            
        </div>

        <div className='m-auto text-xs sm:text-sm text-left font-bold textGreen w-[80vw] sm:w-[67vw]'>
            <p>Explore the vast arsenal of languages, frameworks, and seamless integration of APIs in my toolkit.</p>
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