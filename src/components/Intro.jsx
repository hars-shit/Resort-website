import { useNavigate } from "react-router-dom";
import a from '../img/WhatsApp Video 2024-04-02 at 9.24.16 AM.mp4'
const Intro = () => {
  const navigate = useNavigate()
  return (
    <section className="intro">
      <div className="section__container intro__container">
        <div className="intro__cotent">
          <p className="section__subheader">MINI POND VIDEO</p>
          <h2 className="section__header">We have Rainbow Trout Fish</h2>
          <p className="section__description">
            Savor the taste of our culinary delights, elevated by the freshest catch of Rainbow Trout fish, promising a meal that's not only delicious but also nutritious and satisfying.
          </p>
          <button className="btn" onClick={() => navigate('/contact')}>Book Now</button>
        </div>
        <div className="intro__video">
          <video
            src={a}
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Intro;
