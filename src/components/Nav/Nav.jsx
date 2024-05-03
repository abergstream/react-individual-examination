import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <section className="nav-wrapper">
      <nav className="nav-container">
        <aside></aside>
        <div className="nav__menu">
          <a className="nav__item" onClick={() => navigate("/")}>
            Home
          </a>
          <a className="nav__item" onClick={() => navigate("/projects")}>
            Projects
          </a>{" "}
          <a className="nav__item" onClick={() => navigate("/projects")}>
            About
          </a>
        </div>
        <aside></aside>
      </nav>
    </section>
  );
};

export default Nav;
