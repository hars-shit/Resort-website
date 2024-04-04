import "./style.css";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import a from '../img/a.jpg'
import b from '../img/camp.jpg'

const About = () => {
  const navigate=useNavigate()
  return (
    <section className="about" id="about">
      <div className="section__container about__container">
        <div className="about__grid">
          <div className="about__image">
            <img src={a} alt="about 1" />
          </div>
          <div className="about__card">
            <span>
              <i className="ri-user-line"></i>
            </span>
            <CiUser className="CiUser" />
            <h4>Strong Team</h4>
            <p>
              Unlocking Hospitality Excellence And Ensures Your Perfect Stay
            </p>
          </div>
          <div className="about__image">
            <img src={b} alt="about 2" />
          </div>
          <div className="about__card">
            <span>
              <i className="ri-calendar-check-line"></i>
            </span>
            <SlCalender className="CiUser sl" />
            <h4>Dome Tent</h4>
            <p>Nestled among oak trees and vibrant wildlife</p>
          </div>
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">Immerse yourself at Oak Wood Resort</h2>
          <p className="section__description">
            Oak Wood Resort is a perfect destination for visitors who are
            interested in exploring Uttarakhand Garhwal region. The resort is
            situated in the Mandal village, which is 14 kilometers away from
            Gopeshwar on the route to Chopta. This place is famous for its
            scenic view in Uttarakhand as well as in India. The resort is
            designed around the concept of beauty of nature and around the
            resort it is full of oak trees, forest, orchid flowers and wildlife.
          </p>
          <button className="btn" onClick={()=>navigate('/contact')}>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default About;
