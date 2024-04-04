import About from "../components/About"
import Blog from "../components/Blog"
import Facilities from "../components/Facilities"
import FoodMenu from "../components/FoodMenu"
import Intro from "../components/Intro"
import Room from "../components/Room"
import Contact from "./Contact/Contact"


const All = () => {
  return (
   <>
   <About />
   <Room />
   <Intro />
   {/* <Facilities />  */}
   <FoodMenu />
   <Contact />
   <Blog />
   </>
  )
}

export default All
