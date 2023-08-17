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
            console.log(res)
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
                },2000)
            }
        })
    }
    
    return ( 
    <form onSubmit={sendEmail} className='relative w-[67vw] max-w-[500px] m-auto grid place-content-center'>
        
        <div className={`absolute h-full w-full top-0 left-0 backdrop-blur-3xl ${!toggleNotify && 'hidden'} animate-fade-in`}>

        </div>

        <div className='grid grid-cols-3 gap-2 place-content-center p-1'>
            <label className='col-span-1'>Name: </label>
            <input className='col-span-2 p-1 rounded-xl text-center' name='name' value={emailObj.name} onChange={updateEmailObj}/>
        
            <label className='col-span-1'>Email Address: </label>
            <input className='col-span-2 p-1 rounded-xl text-center' name='email' value={emailObj.email} onChange={updateEmailObj}/>
            
            <label className='col-span-1'>Company: </label>
            <input className='col-span-2 p-1 rounded-xl text-center' placeholder='optional' name='company' value={emailObj.company} onChange={updateEmailObj}/>

            <label className='col-span-1'>Message: </label>
            <textarea className='col-span-2 p-1 rounded-xl text-left h-[150px]' name='message' value={emailObj.message} onChange={updateEmailObj} />
        </div>

        <button className='border-2 w-full border-black p-1 rounded-2xl '>Send Email</button>

    </form> );
}

export default EmailSender;