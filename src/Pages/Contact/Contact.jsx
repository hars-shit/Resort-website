import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosGlasses } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="container">
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
