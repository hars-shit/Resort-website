import React from 'react'
import './Marriage.css'
import video from '../img/w.mp4'
import { useNavigate } from 'react-router-dom'
const Marriage = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/contact")
    }
    return (
        <section className="wedding-section">
            <h1>Your Dream Wedding Awaits</h1>
            <p>Watch our beautiful wedding scenes and imagine your special day at our resort.</p>

            <div className="video-container">
                <div className="label">Magical Moments</div>
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <button className="inquire-button" onClick={handleClick}>Inquire About Weddings</button>
        </section>
    )
}

export default Marriage