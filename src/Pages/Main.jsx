

const Main = () => {
  return (
   <>
    <header className="header" id="home">
      <div className="section__container header__container">
        <p className="section__subheader">ABOUT US</p>
        <h1>The Perfect<br />Base For You</h1>
        <button className="btn">Take A Tour</button>
      </div>
    </header>

    <section className="booking">
      <div className="section__container booking__container">
        <form action="/">
          <div className="input__group">
            <label htmlFor="arrival">Arrival Date</label>
            <input type="text" placeholder="Your Arrival Date" />
          </div>
          <div className="input__group">
            <label htmlFor="departure">Departure Date</label>
            <input type="text" placeholder="Your Departure Date" />
          </div>
          <div className="input__group">
            <label htmlFor="guests">Guests</label>
            <input type="text" placeholder="No Of Guests" />
          </div>
          <button className="btn">Check Availability</button>
        </form>
      </div>
    </section>
   </>
  )
}

export default Main
