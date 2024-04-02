import "./style.css"
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const About = () => {
  return (
    <section className="about" id="about">
    <div className="section__container about__container">
      <div className="about__grid">
        <div className="about__image">
          <img src="/src/img/a.jpg" alt="about 1" />
        </div>
        <div className="about__card">
          <span><i className="ri-user-line"></i></span>
          <CiUser className="CiUser"/>
          <h4>Strong Team</h4>
          <p>
            Unlocking Hospitality Excellence And Ensures Your Perfect Stay
          </p>
        </div>
        <div className="about__image">
          <img src="/src/img/camp.jpg" alt="about 2" />
        </div>
        <div className="about__card">
          <span><i className="ri-calendar-check-line"></i></span>
          <SlCalender className="CiUser sl"/>
          <h4>Luxury Room</h4>
          <p>Experience Unrivaled Luxury at Our Exquisite Luxury Rooms</p>
        </div>
      </div>
      <div className="about__content">
        <p className="section__subheader">ABOUT US</p>
        <h2 className="section__header">Discover Our Underground</h2>
        <p className="section__description">
          Welcome to a hidden realm of extraordinary accommodations where
          luxury, comfort, and adventure converge. Our underground hotels
          offer an unparalleled escape from the ordinary, inviting you to
          explore a subterranean world of wonders.
        </p>
        <button className="btn">Book Now</button>
      </div>
    </div>
  </section>
  )
}

export default About
