
import EmailSender from "./EmailSender";

function Contact() {
    return ( 
        <div 
            id='contact'
            className='min-h-[80vh]'
            >

            <div className='min-h-[95vh] max-w-[1050px] m-auto pt-[8vh] sm:pt-[10vh]'>
                
                <h1
                    className='mb-5 font-bold pl-[10vw] text-left textGreen '
                >contact.</h1>

                <div className='mb-5 m-auto text-xs sm:text-sm text-center font-bold textGreen w-[80vw] sm:w-[67vw] max-w-[500px]'>
                    <p>Have a Question or Message? Feel free to reach out!</p>
                </div>

                <EmailSender />

            </div>
            
        </div> 
    );
}

export default Contact;