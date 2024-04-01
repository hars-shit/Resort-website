import Main from "../Pages/Main"

const Header = () => {
  return (
    <>
    <nav>
    <div className="nav__bar">
      <div className="nav__header">
        <div className="logo nav__logo">
          <div>H</div>
          <span>HOTEL<br />MIRANDA</span>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#room">Room</a></li>
        <li><a href="#feature">Feature</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#news">News</a></li>
      </ul>
    </div>
  </nav>
  <Main />
    </>
  )
}

export default Header
