
import EmailSender from "./EmailSender";

function Contact() {
    return ( 
        <div 
            id='contact'
            // className='h-screen pt-20 bgGreen'
            className='min-h-screen pt-[8vh] sm:pt-[10vh] flex flex-col gap-6 bgGreen'

            >

            <h1
                className='mt-2 font-bold pl-[10vw] text-left text-white'
            >contact.</h1>

            <EmailSender />
            
        </div> 
    );
}

export default Contact;