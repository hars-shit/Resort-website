import About from "../components/About"
import Blog from "../components/Blog"
import Facilities from "../components/Facilities"
import FoodMenu from "../components/FoodMenu"
import Intro from "../components/Intro"
import Marriage from "../components/Marriage"
import Room from "../components/Room"
import Contact from "./Contact/Contact"
import Review from "./Review/Review"


const All = () => {
  return (
   <>
   <Marriage />
   <About />
   <Room />
   <Intro />
   {/* <Facilities />  */}
   <FoodMenu />
   <Contact />
   {/* <Review /> */}
   {/* <Blog /> */}
   </>
  )
}

export default All
