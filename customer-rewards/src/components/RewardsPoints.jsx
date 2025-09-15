import { useState } from "react";
import { getCustomerPoints } from "./utils.jsx";
import "../js/jquery.min.js";
import "../js/bootstrap.min.js";
import "../js/jquery.sticky.js";
import "../js/click-scroll.js";
import "../js/vegas.min.js";
import "../js/custom.js";

function RewardsPoints() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [customerNumber, setCustomerNumber] = useState();
  const [customerPoints, setCustomerPoints] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const points = await getCustomerPoints(customerNumber);
      setCustomerPoints(points);
      setIsSubmitted(true);
    } catch (error) {
      alert("Error getting points:" + error.message);
    }
  };

  return (
    <>
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

      <section className="booking-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="booking-form-wrap">
                <div className="row">
                  <div className="col-lg-7 col-12 p-0">
                    <div className="text-center mb-4 pb-lg-2">
                      <h2 className="text-white">Rewards Points</h2>
                      {isSubmitted ? (
                        <div>
                          <ul className="list-group list-group-flush">
                            {Object.entries(customerPoints)
                              .filter(([key]) => key !== "totalPoints")
                              .map(([month, points]) => (
                                <li className="list-group-item" key={month}>
                                  <strong>{month}:</strong> {points} points
                                </li>
                              ))}
                          </ul>
                          <h3>Total Points: {customerPoints.totalPoints}</h3>
                        </div>
                      ) : (
                        <>
                          <em className="text-white">
                            Enter your customer number to see your rewards
                            points!
                          </em>
                          <div className="booking-form-body">
                            <div className="row">
                              <div className="col-lg-6 col-12">
                                <input
                                  type="text"
                                  name="booking-form-name"
                                  id="booking-form-name"
                                  className="form-control"
                                  placeholder="ex: c0045"
                                  onChange={(e) =>
                                    setCustomerNumber(e.target.value)
                                  }
                                  required
                                />
                              </div>

                              <div className="col-lg-4 col-md-10 col-8 mx-auto mt-2">
                                <button
                                  type="submit"
                                  className="form-control"
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-5 col-12 p-0">
                    <div className="booking-form-image-wrap">
                      <img
                        src="images/barman-with-fruits.jpg"
                        className="booking-form-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 me-auto">
              <em className="text-white d-block mb-4">Where to find us?</em>

              <strong className="text-white">
                <i className="bi-geo-alt me-2"></i>
                Bandra West, Mumbai, Maharashtra 400050, India
              </strong>

              <ul className="social-icon mt-4">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="https://x.com/minthu"
                    target="_new"
                    className="social-icon-link bi-twitter"
                  ></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp"></a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
              <em className="text-white d-block mb-4">Contact</em>

              <p className="d-flex mb-1">
                <strong className="me-2">Phone:</strong>
                <a href="tel: 305-240-9671" className="site-footer-link">
                  (65) 305 2409 671
                </a>
              </p>

              <p className="d-flex">
                <strong className="me-2">Email:</strong>

                <a
                  href="mailto:info@yourgmail.com"
                  className="site-footer-link"
                >
                  hello@barista.co
                </a>
              </p>
            </div>

            <div className="col-lg-5 col-12">
              <em className="text-white d-block mb-4">Opening Hours.</em>

              <ul className="opening-hours-list">
                <li className="d-flex">
                  Monday - Friday
                  <span className="underline"></span>
                  <strong>9:00 - 18:00</strong>
                </li>

                <li className="d-flex">
                  Saturday
                  <span className="underline"></span>
                  <strong>11:00 - 16:30</strong>
                </li>

                <li className="d-flex">
                  Sunday
                  <span className="underline"></span>
                  <strong>Closed</strong>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-12 mt-4">
              <p className="copyright-text mb-0">
                Copyright © Barista Cafe 2048 - Design:{" "}
                <a
                  rel="sponsored"
                  href="https://www.tooplate.com"
                  target="_blank"
                >
                  Tooplate
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default RewardsPoints;
