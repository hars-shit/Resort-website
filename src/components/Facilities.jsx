import { AiOutlineLike } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";

const Facilities = () => {
  return (
    <section className="section__container feature__container" id="feature">
      <p className="section__subheader">FACILITIES</p>
      <h2 className="section__header">Core Features</h2>
      <div className="feature__grid">
        <div className="feature__card">
          <span><i className="ri-thumb-up-line"></i></span>
          <AiOutlineLike className="fac"/>
          <h4>Have High Rating</h4>
          <p>
            We take pride in curating a selection of hotels that consistently
            receive high ratings and positive reviews.
          </p>
        </div>
        <div className="feature__card">
          <span><i className="ri-time-line"></i></span>
          <LuClock3 className="fac"/>
          <h4>Quite Hours</h4>
          <p>
            We understand that peace and uninterrupted rest are essential for a
            rejuvenating experience.
          </p>
        </div>
        <div className="feature__card">
          <span><i className="ri-map-pin-line"></i></span>
          <IoLocationOutline className="fac"/>
          <h4>Best Location</h4>
          <p>
            At our hotel booking website, we take pride in offering
            accommodations in the most prime and sought-after locations.
          </p>
        </div>
        <div className="feature__card">
          <span><i className="ri-close-circle-line"></i></span>
          <IoMdCloseCircleOutline className="fac"/>
          <h4>Free Cancellation</h4>
          <p>
            We understand that travel plans can change unexpectedly, which is
            why we offer the flexibility of free cancellation.
          </p>
        </div>
        <div className="feature__card">
          <span><i className="ri-wallet-line"></i></span>
          <LuWallet className="fac"/>
          <h4>Payment Options</h4>
          <p>
            Our hotel booking website offers a range of convenient payment
            options to suit your preferences.
          </p>
        </div>
        <div className="feature__card">
          <span><i className="ri-coupon-line"></i></span>
          <MdOutlineLocalOffer className="fac"/>
          <h4>Special Offers</h4>
          <p>
            Whether you are planning a romantic getaway, or a business trip, our
            carefully curated special offers cater to all your needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Facilities
