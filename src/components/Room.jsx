import a from '../img/f1.jpg'
import b from '../img/f2.jpg'
import c from '../img/camp.jpg'
const Room = () => {
  return (
    <section className="room__container" id="room">
    <p className="section__subheader">Accommodation Options</p>
    <h2 className="section__header">Find Your Perfect Accommodation</h2>
    <div className="room__grid">
     
      <div className="room__card">
        <img src={b} alt="room" />
        <div className="room__card__details">
          <div>
          <h4>Dome Tent</h4>
            <p>
             Available at best price for your stay on double Sharing
            </p>
          </div>
          <h3>₹1200<span>/Person</span></h3>
        </div>
      </div>
      <div className="room__card">
        <img src={a} alt="room" />
        <div className="room__card__details">
          <div>
          <h4>Dome Tent</h4>
            <p>
             Available at best price for your stay on double Sharing
            </p>
          </div>
          <h3>₹1200<span>/Person</span></h3>
        </div>
      </div>
      <div className="room__card">
        <img src={c} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Dome Tent</h4>
            <p>
             Available at best price for your stay on double Sharing
            </p>
          </div>
          <h3>₹1200<span>/Person</span></h3>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Room
