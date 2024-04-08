import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import "./style.css"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo footer__logo">
            <div>H</div>
            <span>OAKWOOD<br />RESORT</span>
          </div>

          <div className="frame">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.072483127351!2d79.30894009904627!3d30.407227752171146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d458db25f9b9%3A0x3c8e88f7178344d7!2sGopeshwar%2C%20Uttarakhand%20246401!5e0!3m2!1sen!2sin!4v1707135428328!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{border: "0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </div>

        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <div className="footer__links" >
          <li style={{marginBottom:'1.25rem'}}><Link to="/">Home</Link></li>
        <li style={{marginBottom:'1.25rem'}}><a href="#about">About</a></li>
        <li style={{marginBottom:'1.25rem'}}><Link to="/galary">Galary</Link></li>
        <li style={{marginBottom:'1.25rem'}}><a href="#room">Camps</a></li>
        <li style={{marginBottom:'1.25rem'}}><Link to="/contact">Contact</Link></li>
        <li style={{marginBottom:'1.25rem'}}><a href="#menu">Activities</a></li>
          </div>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <div className="footer__links">
            <li>
              <span><i className="ri-phone-fill"></i></span>
              <FaPhoneAlt className="fas"/>
              <div>
                <h5>Phone Number</h5>
                <p>+91 9520593613</p>
              </div>
            </li>
            <li>
              <span><i className="ri-record-mail-line"></i></span>
              <IoMail className="fas"/>
              <div>
                <h5>Email</h5>
                <p>oakwoodresortchamoli@gmail.com</p>
              </div>
            </li>
            <li>
              <span><i className="ri-map-pin-2-fill"></i></span>
              <IoLocation className="fas"/>
              <div>
                <h5>Location</h5>
                <p>Gopeshwar,Uttarakhand</p>
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
