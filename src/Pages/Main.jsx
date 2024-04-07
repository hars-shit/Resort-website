import { useState } from "react"
import Date from "../components/Date/Date"
import dayjs from "dayjs"
import emailjs from '@emailjs/browser'
import Loader from "../components/Loader/Loader"
import Alert from "../components/Alert/Alert"
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const Main = () => {
  const navigate=useNavigate()

 const [loading,setLoading]=useState(false) 
  const [open,setOpen]=useState(false)
  const [guests,setGuests]=useState(0)
  const [arrival,setArrival]=useState(dayjs('2024-04-02'))
  const [departure,setDeparture]=useState(dayjs('2024-04-04'))
  const [number,setNumber]=useState()

  // console.log("arrival",arrival.format('DD/MM/YYYY'))
  // console.log("departure",departure.format('DD/MM/YYYY'))


  const handleClick=(e)=>{
    e.preventDefault()
    setLoading(true);
    setOpen(true)
    console.log("sa",arrival.format('DD/MM/YYYY'),departure.format('DD/MM/YYYY'),number,guests)
    const serviceId = 'service_5cm6de2';
    const templateId='template_dsv2i0i';
    const publicKey='ut4ca-rSCi1fGujS4';
   
    const obj = {
      from_number: number,
      from_arrival: arrival.format('YYYY-MM-DD'), // Format the arrival date
      from_departure: departure.format('YYYY-MM-DD'), // Format the departure date
      from_guests: guests,
    };
    emailjs.send(serviceId,templateId,obj,publicKey)
    .then((response)=>{
      console.log("Email sent Successfully",response)
    })
    .catch((error)=>{
      console.error("Error sending Failed",error)
    })

  }
  return (
   <>
   {/* {loading && <Loader open={loading} setOpen={setLoading}/>} */}
   {loading && <Alert open={open} setOpen={setOpen}/>}
    <header className="header" id="home">
      <div className="section__container header__container">
        {/* <p className="section__subheader">The</p> */}
        <h1>Escape to <br />Uttarakhand's Charm</h1>
        <button className="btn" onClick={()=>navigate('/galary')}>Visit Galary</button>
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
            <label htmlFor="guests">Mobile Number</label>
            <input type="text" placeholder="Mobile Number" inputMode={"numeric"} value={number} onChange={(e)=>setNumber(e.target.value)}/>
          </div>
          <div className="input__group">
            <label htmlFor="guests">Guests</label>
            <input type="text" placeholder="No Of Guests" inputMode={"numeric"} value={guests} onChange={(e)=>setGuests(e.target.value)}/>
          </div>
  
          <button className="btn border" onClick={handleClick}>Check Availability
         <FaArrowCircleRight style={{fontSize:'1.5rem'}}/>
          </button>
      
         
        </form>
      </div>
    </section>
   </>
  )
}

export default Main
