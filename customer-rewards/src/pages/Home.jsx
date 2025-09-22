import pexels from "../videos/pexels-mike-jones-9046237.mp4";
import portrait from "../images/team/portrait-elegant-old-man-wearing-suit.jpg";
import barista from "../images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg";
import owner from "../images/team/small-business-owner-drinking-coffee.jpg";
import smile from "../images/team/smiley-business-woman-working-cashier.jpg";
import sweater from "../images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg";
import senior from "../images/reviews/senior-man-white-sweater-eyeglasses.jpg";
import glasses from "../images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg";
import { memo } from "react";

function Home() {
  return (
    <>
      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mx-auto">
              <em className="small-text">welcome to Barista.co</em>

              <h1>Cafe Klang</h1>

              <p className="text-white mb-4 pb-lg-2">
                your <em>favourite</em> coffee daily lives.
              </p>

              <a
                className="btn custom-btn custom-border-btn smoothscroll me-3"
                href="#section_2"
              >
                Our Story
              </a>

              <a
                className="btn custom-btn smoothscroll me-2 mb-2"
                href="#section_3"
              >
                <strong>Check Menu</strong>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-slides"></div>
      </section>

      <section className="about-section section-padding" id="section_2">
        <div className="section-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="ratio ratio-1x1">
                <video
                  autoPlay=""
                  loop=""
                  muted=""
                  className="custom-video"
                  poster=""
                >
                  <source src={pexels} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="about-video-info d-flex flex-column">
                  <h4 className="mt-auto">We Started Since 2009.</h4>

                  <h4>Best Cafe in Klang.</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
              <em className="text-white">Barista.co</em>

              <h2 className="text-white mb-3">Cafe KL</h2>

              <p className="text-white">
                The café had been in the town for as long as anyone could
                remember, and it had become a beloved institution among the
                locals.
              </p>

              <p className="text-white">
                The café was run by a friendly and hospitable couple, Mr. and
                Mrs. Johnson. Barista Cafe is free Bootstrap 5 HTML layout
                provided by{" "}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com"
                  target="_blank"
                >
                  Tooplate
                </a>
                .
              </p>

              <a
                href="#barista-team"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Meet Baristas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="barista-section section-padding section-bg"
        id="barista-team"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              <em className="text-white">Creative Baristas</em>

              <h2 className="text-white">Meet People</h2>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="team-block-wrap">
                <div className="team-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">Steve</h4>

                    <p className="badge ms-4">
                      <em>Boss</em>
                    </p>
                  </div>

                  <p className="text-white mb-0">
                    your favourite coffee daily lives tempor.
                  </p>
                </div>

                <div className="team-block-image-wrap">
                  <img
                    src={portrait}
                    className="team-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="team-block-wrap">
                <div className="team-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">Sandra</h4>

                    <p className="badge ms-4">
                      <em>Manager</em>
                    </p>
                  </div>

                  <p className="text-white mb-0">
                    your favourite coffee daily lives.
                  </p>
                </div>

                <div className="team-block-image-wrap">
                  <img
                    src={barista}
                    className="team-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="team-block-wrap">
                <div className="team-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">Jackson</h4>

                    <p className="badge ms-4">
                      <em>Senior</em>
                    </p>
                  </div>

                  <p className="text-white mb-0">
                    your favourite coffee daily lives.
                  </p>
                </div>

                <div className="team-block-image-wrap">
                  <img
                    src={owner}
                    className="team-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="team-block-wrap">
                <div className="team-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">Michelle</h4>

                    <p className="badge ms-4">
                      <em>Barista</em>
                    </p>
                  </div>

                  <p className="text-white mb-0">
                    your favourite coffee daily consectetur.
                  </p>
                </div>

                <div className="team-block-image-wrap">
                  <img
                    src={smile}
                    className="team-block-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <div className="menu-block-wrap">
                <div className="text-center mb-4 pb-lg-2">
                  <em className="text-white">Delicious Menu</em>
                  <h4 className="text-white">Breakfast</h4>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Pancakes</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$12.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>Toasted Waffle</h6>

                    <span className="underline"></span>

                    <strong className="text-white ms-auto">
                      <del>$16.50</del>
                    </strong>

                    <strong className="ms-2">$12.00</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>
                      Fried Chips
                      <span className="badge ms-3">Recommend</span>
                    </h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$15.0</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>Pancakes</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$12.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Banana Cakes</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$18.0</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="menu-block-wrap">
                <div className="text-center mb-4 pb-lg-2">
                  <em className="text-white">Favourite Menu</em>
                  <h4 className="text-white">Coffee</h4>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Latte</h6>

                    <span className="underline"></span>

                    <strong className="text-white ms-auto">
                      <del>$12.50</del>
                    </strong>

                    <strong className="ms-2">$7.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>
                      White Coffee
                      <span className="badge ms-3">Recommend</span>
                    </h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$5.90</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Chocolate Milk</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$5.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>

                <div className="menu-block my-4">
                  <div className="d-flex">
                    <h6>Greentea</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$7.50</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Fresh brewed coffee and steamed milk</small>
                  </div>
                </div>

                <div className="menu-block">
                  <div className="d-flex">
                    <h6>Dark Chocolate</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">$7.25</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>Rich Milk and Foam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="reviews-section section-padding section-bg"
        id="section_4"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              <em className="text-white">Reviews by Customers</em>

              <h2 className="text-white">Testimonials</h2>
            </div>

            <div className="timeline">
              <div className="timeline-container timeline-container-left">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src={glasses}
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Sandra</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-container timeline-container-right">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src={senior}
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Don</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-container timeline-container-left">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src={sweater}
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Olivia</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <em className="text-white">Say Hello</em>
              <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
            </div>

            <div className="col-lg-6 col-12">
              <form
                action="#"
                method="post"
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">
                      Name <sup className="text-danger">*</sup>
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Jackson"
                      required=""
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Jack@gmail.com"
                      required=""
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      How can we help?
                    </label>

                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-5 col-12 mx-auto mt-3">
                  <button type="submit" className="form-control">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Home);
