import Main from "../Pages/Main"
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav>
    <div className="nav__bar">
      <div className="nav__header">
        <div className="logo nav__logo">
          <div>H</div>
          <span>OAKWOOD<br />RESORT</span>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/galary">Galary</Link></li>
        <li><a href="#room">Camps</a></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="#menu">Activities</a></li>
      </ul>
    </div>
  </nav>
  <Main />
    </>
  )
}

export default Header
