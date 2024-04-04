import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate=useNavigate()
  return (
    <section className="intro">
      <div className="section__container intro__container">
        <div className="intro__cotent">
          <p className="section__subheader">MINI POND VIDEO</p>
          <h2 className="section__header">We have Rainbow Trout Fish</h2>
          <p className="section__description">
            Nestled within the serene landscape of Oakwood Resort lies a
            picturesque pond adorned with vibrant rainbow trout. This tranquil
            oasis offers a captivating escape for guests seeking solace amidst
            nature's embrace.
          </p>
          <button className="btn" onClick={()=>navigate('/contact')}>Book Now</button>
        </div>
        <div className="intro__video">
          <video
            src="/src/img/WhatsApp Video 2024-04-02 at 9.24.17 AM.mp4"
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
