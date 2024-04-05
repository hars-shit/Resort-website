import a from '../img/f1.jpg'
import b from '../img/f2.jpg'
import c from '../img/camp.jpg'
const Room = () => {
  return (
    <section className="room__container" id="room">
    <p className="section__subheader">ROOMS</p>
    <h2 className="section__header">Hand Picked Rooms</h2>
    <div className="room__grid">
     
      <div className="room__card">
        <img src={b} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Family Suite</h4>
            <p>Consist of multiple rooms and a common living area.</p>
          </div>
          <h3>$599<span>/night</span></h3>
        </div>
      </div>
      <div className="room__card">
        <img src={a} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Deluxe Suite</h4>
            <p>Well-appointed rooms designed for guests who desire a more.</p>
          </div>
          <h3>$399<span>/night</span></h3>
        </div>
      </div>
      <div className="room__card">
        <img src={c} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Luxury Penthouse</h4>
            <p>
              Top-tier accommodations usually on the highest floors of a
              hotel.
            </p>
          </div>
          <h3>$799<span>/night</span></h3>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Room
