import { useEffect } from 'react';
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosGlasses } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const Contact = () => {
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>

            <div className="contactInfo">
                
                <div className="iconGroup">
                    <div className="icon">
                       <FaPhoneAlt />
                    </div>
                    <div className="details">
                        <span>Phone</span>
                        <span>+00 110 111 00</span>
                    </div>
                </div>

                <div className="iconGroup">
                    <div className="icon">
                        <IoIosGlasses />
                    </div>
                    <div className="details">
                        <span>Email</span>
                        <span>name.tutorial@gmail.com</span>
                    </div>
                </div>

                <div className="iconGroup">
                    <div className="icon">
                      <IoLocation />
                    </div>
                    <div className="details">
                        <span>Location</span>
                        <span>X Street, Y Road, San Fransisco</span>
                    </div>
                </div>

            </div>

        </section>


        <section className="col right">
            

            <form className="messageForm">
                
                <div className="inputGroup halfWidth">
                    <input type="text" name="" required="required" />
                    <label>Your Name</label>
                </div>

                <div className="inputGroup halfWidth">
                    <input type="email" name="" required="required" />
                    <label>Email</label>
                </div>

                <div className="inputGroup fullWidth">
                    <input type="text" name="" required="required" />
                    <label>Subject</label>
                </div>

                <div className="inputGroup fullWidth">
                    <textarea required="required"></textarea>
                    <label>Say Something</label>
                </div>

                <div className="inputGroup fullWidth">
                    <button>Send Message</button>
                </div>

            </form>

            
        </section>

 

    </main>
</div>
  )
}

export default Contact