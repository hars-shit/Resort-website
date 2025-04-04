import './Galary.css'
import a from '../../img/g1.jpg'
import b from '../../img/g2.jpg'
import c from '../../img/g3.jpg'
import d from '../../img/g8.jpg'
import e from '../../img/g4.jpg'
import f from '../../img/g5.jpeg'
import g from '../../img/g6.jpg'
import h from '../../img/g7.jpg'
import { useState } from 'react'
import VideoGallery from './VideoGalary'
import { Link } from 'react-router-dom'
const Galary = () => {
    const [all,setAll]=useState(true)
    const [camping,setCamping]=useState(false)
    const [food,setFood]=useState(false)
    const [others,setOthers]=useState(false)

    const handleAll=()=>{
        setAll(true)
        setCamping(false)
        setFood(false)
        setOthers(false)

    }
    const handleCamping=()=>{
        setCamping(true)
        setFood(false)
        setOthers(false)
        setAll(false)
    }
    const handleFood=()=>{
        setCamping(false)
        setFood(true)
        setOthers(false)
        setAll(false)

    }
    const handleOthers=()=>{
        setCamping(false)
        setFood(false)
        setOthers(true)
        setAll(false)
    }
  return (
    <section className="portfolio">
	
	<header className="section-head">
		<h1>Latest Memories with Us</h1>
	</header>

	<main className="mainContainer">

		<div className="button-group">
			<button className={`button ${all ? 'active' : ''}`}onClick={handleAll}>All</button>
			<button className={`button ${camping ? 'active' : ''}`} onClick={handleCamping}>Camping</button>
		<button className={`button ${food ? 'active' : ''}`} onClick={handleFood}>Food</button>
			<button className={`button ${others ? 'active' : ''}`} onClick={handleOthers}>Others</button>
		</div>
    {/* for all  */}
	{
        all &&
		<div className="gallery">
		
			<div className="item design">
				<img src={a} />
				<div className="overlay">
					<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item design">
				<img src={b}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item development">
				<img src={c}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>
		
			<div className="item development">
				<img src={d} />
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>
		
			<div className="item development">
				<img src={e} />
				<div className="overlay">
					<a href="#">VIEW MORE</a>
				</div>
			</div>
		
			<div className="item logo">
				<img src={f} />
				<div className="overlay">
					<a href="#">VIEW MORE</a>
				</div>
			</div>
			<div className="item logo">
				<img src={g} />
				<div className="overlay">
					<a href="#">VIEW MORE</a>
				</div>
			</div>
			<div className="item logo">
				<img src={h} />
				<div className="overlay">
					<a href="#">VIEW MORE</a>
				</div>
			</div>
	

		</div>
}

{/* for camping  */}
{
        camping &&
		<div className="gallery">
		
			<div className="item design">
				<img src={b} />
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item design">
				<img src={g}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item development">
				<img src={h}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>
		
			
	

		</div>
}

{/* for food  */}

{
        food &&
		<div className="gallery">
		
			<div className="item design">
				<img src={e} />
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item design">
				<img src={f}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			
	

		</div>
}

{/* for others  */}

{
        others &&
		<div className="gallery">
		
			<div className="item design">
				<img src={a} />
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item design">
				<img src={c}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>

			<div className="item development">
				<img src={d}/>
				<div className="overlay">
				<Link to="/contact">Contact Us</Link>
				</div>
			</div>
		
	

		</div>
}


	</main>
	{/* <VideoGallery /> */}

</section>
  )
}

export default Galary
