import Logo from "../../assets/logo.jpg";
import Hamburger from "../../assets/hamburger.png";
import User from "../../assets/user.jpg";
import "./navbar.style.css";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="hamburger" src={Hamburger} alt="menu" />
        <a href="/">
          <img className="logo" src={Logo} alt="Riddle" />
        </a>
      </div>

      <img className="user-profile-pic" src={User} alt={user.name} />
    </div>
  );
};

export default Navbar;
