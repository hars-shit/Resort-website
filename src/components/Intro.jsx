
const Intro = () => {
  return (
    <section className="intro">
      <div className="section__container intro__container">
        <div className="intro__cotent">
          <p className="section__subheader">INTRO VIDEO</p>
          <h2 className="section__header">Meet With Our Luxury Place</h2>
          <p className="section__description">
            Whether you are seeking a cozy and exclusive hideaway or an immersive
            journey beneath the surface, Hotel Miranda promises to be an
            unforgettable stay, where the depths of comfort and excitement await
            your arrival.
          </p>
          <button className="btn">Book Now</button>
        </div>
        <div className="intro__video">
          <video src="/src/img/WhatsApp Video 2024-04-02 at 9.24.17 AM.mp4" autoPlay muted loop></video>
        </div>
      </div>
    </section>
  )
}

export default Intro
