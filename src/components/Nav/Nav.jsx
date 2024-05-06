import { NavLink } from "react-router-dom";
import "./Nav.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Nav = () => {
  return (
    <section className="nav-wrapper">
      <nav className="nav-container">
        <aside className="nav__logo">
          <NavLink className={() => "nav__logo--link"} to="/">
            andreasb
          </NavLink>
        </aside>
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
            to="/contact"
          >
            Contact
          </NavLink>
          <aside className="toggle-container">
            <ToggleSwitch />
          </aside>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
