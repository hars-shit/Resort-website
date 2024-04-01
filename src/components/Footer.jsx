import React from "react"
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosGlasses } from "react-icons/io";
import { IoLocation } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo footer__logo">
            <div>H</div>
            <span>HOTEL<br />MIRANDA</span>
          </div>
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium unde. Doloremque eaque debitis laborum labore voluptates
            iste molestiae consectetur.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#"><i className="ri-youtube-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <div className="footer__links">
            <li><a href="#">Online Booking</a></li>
            <li><a href="#">Room Customization</a></li>
            <li><a href="#">Virtual Tours</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Concierge Services</a></li>
            <li><a href="#">Customer Support</a></li>
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
                <p>+91 9876543210</p>
              </div>
            </li>
            <li>
              <span><i className="ri-record-mail-line"></i></span>
              <IoIosGlasses className="fas"/>
              <div>
                <h5>Email</h5>
                <p>info@hotelmiranda.com</p>
              </div>
            </li>
            <li>
              <span><i className="ri-map-pin-2-fill"></i></span>
              <IoLocation className="fas"/>
              <div>
                <h5>Location</h5>
                <p>First St. NYC</p>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
