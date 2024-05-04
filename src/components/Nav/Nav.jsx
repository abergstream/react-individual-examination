import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <section className="nav-wrapper">
      <nav className="nav-container">
        <aside>Bild</aside>
        <div className="nav__menu">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item  "
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item  "
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__item nav__item--active" : "nav__item  "
            }
            to="/about"
          >
            About
          </NavLink>
          <aside className="nav__item toggle-container">
            <ToggleSwitch />
          </aside>
        </div>
      </nav>
    </section>
  );
};

export default Nav;