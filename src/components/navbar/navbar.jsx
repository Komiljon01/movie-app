import "./navbar.scss";
import logo from "/logo.svg";
import logoText from "/logo-text.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo text" />
        </Link>
      </div>

      <div className="navbar__menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tv"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tv Shows
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
