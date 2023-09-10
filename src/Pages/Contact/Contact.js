
import EmailSender from "./EmailSender";

function Contact() {
    return ( 
        <div 
            id='contact'
            className='min-h-[80vh]'
            >

            <div className='min-h-[95vh] max-w-[1050px] m-auto pt-[12vh]'>
                
                <h1
                    className='mb-3 font-bold pl-[10vw] text-left textGreen '
                >contact.</h1>

                <div className='mb-3 m-auto text-xs sm:text-sm text-left font-bold textGreen w-[80vw] sm:w-[67vw] max-w-[500px]'>
                    {/* <p>Have a Question or Message? Feel free to reach out!</p> */}
                    <p>Feel free to reach out anytime. Your inquiries, project ideas, or tech discussions are all welcome. Let's connect and make something great happen.</p>
                </div>

                <EmailSender />

            </div>
            
        </div> 
    );
}

export default Contact;