import './Review.css'
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import a from '../../img/f1.jpg'
import b from '../../img/f2.jpg'
import c from '../../img/f3.jpg'
import d from '../../img/f4.jpg'
const Review = () => {
  return (
   
  <section id='testmonials'>
  <div className='testimonial-heading'>
  <span>Review's</span>
  <h1>Clients Says</h1>

  </div>
  <div className='testimonial-box-container'>
  {/* box-1 */}
  <div className='testimonial-box'>
  <div className='box-top'>

  <div className='profile'>
  <div className='profile-img'>
  <img src={a}/>

  </div>
  <div className='name-user'>
    <strong>Harshit </strong>
    <span>@harshitnaekk</span>
  </div>

  </div>
  <div className='reviews'>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  <FaStar/>
 <FaRegStar/>
  </div>
  </div>
  {/* comments */}
  <div>
<div className='client-comment'>
  <p>“I was completely impressed with their professionalism and customer service.”
“The ambiance here is always inviting and comfortable.”
“This is my go-to place for  the best in town.”</p>
</div>
  </div>

  </div>
  {/* box-2 */}
  <div className='testimonial-box'>
  <div className='box-top'>

  <div className='profile'>
  <div className='profile-img'>
  <img src={b}/>

  </div>
  <div className='name-user'>
    <strong>priya shah </strong>
    <span>@harshitnaekk</span>
  </div>

  </div>
  <div className='reviews'>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  <FaStar/>
 <FaRegStar/>
  </div>
  </div>
  {/* comments */}
  <div>
<div className='client-comment'>
  <p>“I was completely impressed with their professionalism and customer service.”
“The ambiance here is always inviting and comfortable.”
“This is my go-to place for  the best in town.”</p>
</div>
  </div>

  </div>
  {/* box-3 */}
  <div className='testimonial-box'>
  <div className='box-top'>

  <div className='profile'>
  <div className='profile-img'>
  <img src={c}/>

  </div>
  <div className='name-user'>
    <strong>ayush singh </strong>
    <span>@harshitnaekk</span>
  </div>

  </div>
  <div className='reviews'>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  </div>
  </div>
  {/* comments */}
  <div>
<div className='client-comment'>
  <p>“I was completely impressed with their professionalism and customer service.”
“The ambiance here is always inviting and comfortable.”
“This is my go-to place for  the best in town.”</p>
</div>
  </div>

  </div>
  {/* box-4 */}
  <div className='testimonial-box'>
  <div className='box-top'>

  <div className='profile'>
  <div className='profile-img'>
  <img src={d}/>

  </div>
  <div className='name-user'>
    <strong>Anisha </strong>
    <span>@Anishatnaekk</span>
  </div>

  </div>
  <div className='reviews'>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  
 <FaRegStar/>
 <FaRegStar/>
  </div>
  </div>
  {/* comments */}
  <div>
<div className='client-comment'>
  <p>“I was completely impressed with their professionalism and customer service.”
“The ambiance here is always inviting and comfortable.”
“This is my go-to place for  the best in town.”</p>
</div>
  </div>

  </div>

  </div>

  </section>
  )
}

export default Review