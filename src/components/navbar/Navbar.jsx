import "./Navbar.css"
import guy_and_coin from "../../assets/guy_and_coin.svg"

// Company dashboard navbar - Top Navbar -
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="/">Home</a>
        <a className="active_link" href="/">
          My Dashboard
          </a>
        <a href="/">Log out</a>
      </div>
      <div className="navbar__right">
        <a href="/">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="/">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="/!">
          <img width="30" src={guy_and_coin} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;