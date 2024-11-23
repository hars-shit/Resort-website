import Main from "../Pages/Main"
import { Link, useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'
const Header = () => {

  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate("/")
  }
  return (
    <>
      <nav>
        <div className="nav__bar">
          <div className="nav__header">
            <div className="logo nav__logo" onClick={handleNavigate} style={{cursor:"pointer"}}>
              <div><img style={{ height: "80px" }} src={logo} alt="" /></div>
              <span>OAKWOOD<br />RESORT</span>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><Link to="/">Home</Link></li>

            <li><Link to="/galary">Galary</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>
      </nav>
      <Main />
    </>
  )
}

export default Header
