import "./navbar.scss";
import logo from "/logo.svg";
import logoText from "/logo-text.svg";
import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants";

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
          {navbarLinks.map((link) => (
            <li key={link.route}>
              <NavLink
                to={link.route}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
