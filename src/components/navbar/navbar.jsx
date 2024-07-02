import "./navbar.scss";
import logo from "/logo.svg";
import logoText from "/logo-text.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo text" />
        </a>
      </div>

      <div className="navbar__menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
