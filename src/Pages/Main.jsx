import { useState } from "react"
import Date from "../components/Date/Date"
import dayjs from "dayjs"
import Loader from "../components/Loader/Loader"
import Alert from "../components/Alert/Alert"


const Main = () => {
 const [loading,setLoading]=useState(false) 
  const [open,setOpen]=useState(false)
  const [guests,setGuests]=useState(0)
  const [arrival,setArrival]=useState(dayjs('2024-04-02'))
  const [departure,setDeparture]=useState(dayjs('2024-04-04'))

  console.log("arrival",arrival.format('DD/MM/YYYY'))
  console.log("departure",departure.format('DD/MM/YYYY'))


  const handleClick=(e)=>{
    e.preventDefault()
    setLoading(true);
    setOpen(true)


  }
  return (
   <>
   {/* {loading && <Loader open={loading} setOpen={setLoading}/>} */}
   {loading && <Alert open={open} setOpen={setOpen}/>}
    <header className="header" id="home">
      <div className="section__container header__container">
        <p className="section__subheader">ABOUT US</p>
        <h1>The Perfect<br />Base For You</h1>
        <button className="btn">Take A Tour</button>
      </div>
    </header>

    <section className="booking">
      <div className="section__container booking__container">
        <form >
          <div className="input__group">
            <label htmlFor="arrival">Arrival Date</label>
            <Date value={arrival} setValue={setArrival}/>
          </div>
          <div className="input__group">
            <label htmlFor="departure">Departure Date</label>
            <Date value={departure} setValue={setDeparture}/>
          </div>
          <div className="input__group">
            <label htmlFor="guests">Guests</label>
            <input type="text" placeholder="No Of Guests" inputMode={"numeric"} value={guests} onChange={(e)=>setGuests(e.target.value)}/>
          </div>
          <button className="btn" onClick={handleClick}>Check Availability</button>
        </form>
      </div>
    </section>
   </>
  )
}

export default Main
