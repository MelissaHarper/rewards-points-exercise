import { Link } from "react-router-dom";
import coffeeBeans from "../images/coffee-beans.png";
import { memo } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="index.html">
          <img
            src={coffeeBeans}
            className="navbar-brand-image img-fluid"
            alt="Barista Cafe Template"
          />
          Barista
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item">
              <a className="nav-link click-scroll" href="/home/#section_1">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="/home/#section_2">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="/home/#section_3">
                Our Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="/home/#section_4">
                Reviews
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="/home/#section_5">
                Contact
              </a>
            </li>
          </ul>

          <div className="ms-lg-3">
            <Link className="btn custom-btn custom-border-btn" to="/">
              Rewards Points
              <i className="bi-arrow-up-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);
