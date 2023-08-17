import bird from './Assets/media/newbw.png'

function StyledCard() {
    return ( 
        <div 
            className='h-[50%] w-[50%] bg-slate-600 hover:bg-white relative group/div '
            >

            <img src={bird} alt='bg' className='h-full object-cover group-hover/div:opacity-5' />

            <div className='absolute top-0 h-full w-full hidden  group-hover/div:block'>
                <p
                    className='group-hover/div:animate-glide-in-top text-black text-xl font-bold'>this is some words</p>

                <div
                    className='text-black group-hover/div:animate-glide-in-bottom'
                >
                    <button
                        className='border-2 border-black rounded-full p-1 group-hover/div:animate-glide-in-left'
                    >Git</button>

                    <button
                        className='border-2 border-black rounded-full p-1 group-hover/div:animate-glide-in-right'
                    >Demo</button>
                   
                </div>
            </div>
           

        </div> 
        );
}

export default StyledCard;