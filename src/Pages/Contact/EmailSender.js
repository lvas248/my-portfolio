import emailjs from 'emailjs-com'
import { useState } from 'react'

function EmailSender() {

    const [ toggleNotify, setToggleNotify ] = useState(false)
    const [ emailObj, setEmailObj ] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    function updateEmailObj(e){
        const copy = {...emailObj}
        copy[e.target.name] = e.target.value
        setEmailObj(copy)
    }

    function sendEmail(e){
        e.preventDefault()
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            emailObj,
            process.env.REACT_APP_USER_ID
        ).then( res => {
            if(res.status === 200){
                setToggleNotify(true)
                setEmailObj({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                })
                setTimeout(()=>{
                    setToggleNotify(false)
                },3000)
            }
        })
    }
    
    return ( 


            <form onSubmit={sendEmail} className='relative w-[80vw] h-[60vh] sm:w-[67vw] max-w-[500px] m-auto  bgGreen text-white p-6 rounded-3xl border-black border-[6px]'>

                <div
                    className={`bgOrange absolute top-0 left-0 h-full w-full rounded-3xl text-white grid place-content-center animate-fade-in ${ !toggleNotify && 'hidden'}`}
                >
                    <h1>email has been sent.</h1>
                </div>
                
                <h1 className='text-left text-2xl font-bold text-white'>GET IN TOUCH</h1>

                <div className='flex flex-col p-1 text-left gap-2 text-xs sm:text-lg'>

                        <label className='font-bold'>name</label>
                        <input className='p-1 pl-2 rounded-xl bg-stone-200' required name='name' value={emailObj.name} onChange={updateEmailObj}/>

                        <label className='font-bold'>email: </label>
                        <input className=' p-1 pl-2 rounded-xl bg-stone-200' required type='email' name='email' value={emailObj.email} onChange={updateEmailObj}/>
                
                        <label className='font-bold'>company </label>
                        <input className='p-1 pl-2 rounded-xl bg-stone-200' placeholder='optional' name='company' value={emailObj.company} onChange={updateEmailObj}/>

                        <label className='font-bold'>message </label>
                        <textarea className='col-span-2 p-1 pl-2 rounded-xl h-[150px] bg-stone-200' required name='message' value={emailObj.message} onChange={updateEmailObj} />

                        <button className='border-2 w-full border-black p-2 sm:p-1 rounded-2xl bgOrange text-stone-200 font-bold'>Send Email</button>

                </div>


            </form> 

     
    );
}

export default EmailSender;