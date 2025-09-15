const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="images/coffee-beans.png"
            className="navbar-brand-image img-fluid"
            alt=""
          />
          Barista.co
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
              <a className="nav-link" href="/#section_1">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#section_2">
                About us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#section_3">
                Our Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#section_4">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#section_5">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
