import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import "./style.css"
import logo from '../img/logo.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo footer__logo">
            <img src={logo} style={{ width: "80px", height: "80px" }} alt="" />
            <span>OAKWOOD<br />RESORT</span>
          </div>

          <div className="frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6878.156828460786!2d79.269124!3d30.462217000000003!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733629507044!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <div className="footer__links" >
            <li style={{ marginBottom: '1.25rem' }}><Link to="/">Home</Link></li>
           
            <li style={{ marginBottom: '1.25rem' }}><Link to="/galary">Gallery</Link></li>
           
            <li style={{ marginBottom: '1.25rem' }}><Link to="/contact">Contact</Link></li>
           
          </div>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <div className="footer__links">
            <li>
              <span><i className="ri-phone-fill"></i></span>
              <FaPhoneAlt className="fas" />
              <div>
                <h5>Phone Number</h5>
                <p>+91 8755329574</p>
              </div>
            </li>
            <li>
              <span><i className="ri-record-mail-line"></i></span>
              <IoMail className="fas" />
              <div>
                <h5>Email</h5>
                <p>oakwoodresortchamoli@gmail.com</p>
              </div>
            </li>
            <li>
              <span><i className="ri-map-pin-2-fill"></i></span>
              <IoLocation className="fas" />
              <div>
                <h5>Location</h5>
                <p>Mandal , Chopta road, Gopeshwar, Uttarakhand</p>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Oakwood Resort. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
