import { useEffect, useState } from 'react';
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser'
const Contact = () => {
    
    
    const [data,setData]=useState({
        name:"",
        email:"",
        number:"",
        text:""
    })
    
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData(pre=>({
            ...pre,
            [name]:value
        }))
    }
    // service id = service_fsjelbl
    // public ZrX4X_IoPovPpwQo7
    // template_9ov3i7a
    const handleSubmit=(e)=>{
        e.preventDefault();
        const serviceId = 'service_qr6089r';
        const templateId='template_i194u8b';
        const publicKey='ut4ca-rSCi1fGujS4';

        const tempObj={
            from_name:data.name,
            from_email:data.email,
            from_number:data.number,
            message:data.text

        }
    emailjs.send(serviceId,templateId,tempObj,publicKey)
    .then((response)=>{
        console.log("email sent Successfully",response);
        setData('')
    })
    .catch((error)=>{
        console.error("Error sending failed",error)
    })
        
        console.log(data)
    }

    const location = useLocation()
    useEffect(()=>{
        console.log("as",location.pathname)
    },[location.pathname])
  return (
    <div className="container">
        {
            location.pathname=='/contact' &&
            <div className='map-wrapper'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.072483127351!2d79.30894009904627!3d30.407227752171146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d458db25f9b9%3A0x3c8e88f7178344d7!2sGopeshwar%2C%20Uttarakhand%20246401!5e0!3m2!1sen!2sin!4v1707135428328!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{border: "0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    }
    <main className="row">
        <section className="col left">
 
            <div className="contactTitle">
                <h2>Get In Touch</h2>
                <p>For inquiries or bookings, feel free to reach out to us .Will connect with you as soon as possible.</p>
            </div>

            <div className="contactInfo">
                
                <div className="iconGroup">
                    <div className="icon">
                       <FaPhoneAlt />
                    </div>
                    <div className="details">
                        <span>Phone</span>
                        <a style={{fontSize:'14px'}} href="tel:+919520593613"><span>+91 9520593613</span></a>
                    </div>
                </div>

                <div className="iconGroup">
                    <div className="icon">
                        <IoMail />
                    </div>
                    <div className="details">
                        <span>Email</span>
                        <a style={{fontSize:'14px'}} href="mailto:up@gmail.com"><span>up@gmail.com</span></a>
                    </div>
                </div>

                <div className="iconGroup">
                    <div className="icon">
                      <IoLocation />
                    </div>
                    <div className="details">
                        <span >Location</span>
                        <a style={{fontSize:'14px'}} href="https://www.google.com/maps/place/Gopeshwar,+Uttarakhand" target="_blank" rel="noopener noreferrer"><span>Gopeshwar,Uttarakhand</span></a>
                    </div>
                </div>

            </div>

        </section>


        <section className="col right">
            

            <form className="messageForm">
                
                <div className="inputGroup halfWidth">
                    <input type="text" name="name" value={data.name} required="required" onChange={handleChange}/>
                    <label>Your Name</label>
                </div>

                <div className="inputGroup halfWidth">
                    <input type="email" name="email" value={data.email} required="required" onChange={handleChange}/>
                    <label>Email</label>
                </div>

                <div className="inputGroup fullWidth">
                    <input type="text" name="number" value={data.number} inputMode={"numeric"} required="required" onChange={handleChange}/>
                    <label>Phone Number</label>
                </div>

                <div className="inputGroup fullWidth">
                    <textarea name='text' value={data.text} required="required" onChange={handleChange}></textarea>
                    <label>Ask Something</label>
                </div>

                <div className="inputGroup fullWidth">
                    <button onClick={handleSubmit}>Send Message</button>
                </div>

            </form>

            
        </section>

 

    </main>
</div>
  )
}

export default Contact