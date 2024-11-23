import t from '../img/t.jpeg'
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
              <h4>Restaurant</h4>
              <p>We serves authentic local Uttarakhandi Pahadi cuisine in our restaurant, offering a taste of the rich culinary heritage of the Himalayan foothills.</p>
            </div>
          </div>
        </div>
        <div className="room__card">
          <img src={t} style={{objectFit:"cover",maxHeight:"400px"}} alt="room" />
          <div className="room__card__details">
            <div>
              <h4>Rainbow Trout Fish</h4>
              <p>Indulge in the freshest and most flavorful rainbow trout fish dishes at our restaurant, nestled within the serene ambiance of Oakwood Resort.
              </p>
            </div>

          </div>
        </div>
        <div className="room__card">
          <img src={c} alt="room" />
          <div className="room__card__details">
            <div>
              <h4>Dome Tent</h4>
              <p>
                Available at best price for your stay on double Sharing      </p>
            </div>
            <h3>₹1000<span>/night</span></h3>
            {/* <h3>$799<span>/night</span></h3> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Room
