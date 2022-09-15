// import "./main.css";
function App() {
  return (
    <div>
      {/****************************** Header Starts Here ******************************/}
      <header>
        <div className="top-port">
          <div className="container">
            <div className="row top-row">
              <div className="col-lg-4 header-left-box col-md-5 d-none d-sm-block">
                <p>We have more than 15 years of experience</p>
              </div>
              <div className="col-lg-8 col-md-7 header-right-box">
                <ul>
                  <li className="hs-1">
                    <i className="fas fa-headphones" />
                    <a
                      href="https://wa.me/+2348084838268"
                      target="_link"
                      rel="no referrer"
                    >
                      +234 808 483 8268
                    </a>
                  </li>
                  <li>
                    <a href="mailto:leewebs@yahoo.com">
                      <i className="fas fa-envelope" /> leewebs@yahoo.com
                    </a>
                  </li>
                  <li className="hs">
                    <i className="fas fa-map-marker-alt" /> Lagos, Nigeria
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="logo-head" className="logo-port">
          <div className="container ">
            <div className="row logo-port-content">
              <div className="col-sm-12 logo-box col-md-4">
                <img src="assets/images/logo.jpg" alt="" />
                <a
                  data-toggle="collapse"
                  data-target="#nav-head"
                  href="#nav-head"
                >
                  <i className="fas d-block d-md-none small-menu fa-bars" />
                </a>
              </div>
              <div id="menu" className="col-sm-8 d-none d-md-block ">
                <div className="row">
                  <div className="col-lg-4 col-md-2"></div>
                  <div className="col-lg-4 col-md-5">
                    <div className="row cvnbj">
                      <div className="col-sm-3 no-padding center ibk-l">
                        <i className="fas fa-hourglass-half" />
                      </div>
                      <div className="col-sm-9 det-li">
                        <b>Monday - Saturday</b>
                        <br />
                        <b>9AM - 8.30PM</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    <div className="row cvnbj">
                      <div className="col-sm-3 no-padding center ibk-l">
                        <i className="fas fa-mobile-alt cl3" />
                      </div>
                      <div className="col-sm-9 det-li">
                        <b>Call Us</b>
                        <br />
                        <b>+234 808 483 8268</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav-head" className="nav-port">
          <div className="container no-padding">
            <div className="row nav-row no-margin">
              <div className="col-md-9 nav-coll col-sm-12">
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about_us.html">About US</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    {/* <li>
                      <a href="blog.html">Blog</a>
                    </li> */}
                    <li>
                      <a href="contact_us.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-3 col-sm-12 cart-ap">
                <ul>
                  <li>
                    <a onclick="showModel()">
                      <i className="far fa-calendar-alt" /> Get Appointment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ######## Header End ####### */}
      {/* ################# Slider Starts Here#######################-*/}
      <div className="slider">
        {/* Set up your HTML */}
        <div className="owl-carousel ">
          <div className="slider-img">
            <div className="item">
              <div className="slider-img">
                <img src="assets/images/slider/slider-1.jpg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="slider-captions">
                      <h1 className="slider-title">
                        Feeling stress or anxious?
                      </h1>
                      <p className="slider-text hidden-xs">
                        We can help you conquer a wide range of psychological
                        and emotional problems.
                      </p>
                      <a href="#" className="btn btn-info hidden-xs">
                        View All Therapies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-img">
              <img src="assets/images/slider/slider-2.jpg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                  <div className="slider-captions">
                    <h1 className="slider-title">It's time for better help.</h1>
                    <p className="slider-text hidden-xs">
                      We can help you conquer a wide range of psychological and
                      emotional problems.
                    </p>
                    <a href="#" className="btn btn-info hidden-xs">
                      Schedule A Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-img">
              {" "}
              <img src="assets/images/slider/slider-3.jpg" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                  <div className="slider-captions">
                    <h1 className="slider-title">Meet our psychiatrists</h1>
                    <p className="slider-text hidden-xs">
                      Our psychiatrists are highly skilled to meet your unique
                      needs.
                    </p>
                    <a href="#" className="btn btn-info hidden-xs">
                      Meet Psychiatrists
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ################# Why Choos Us Starts Here#######################-*/}
      <section className="why-shoos">
        <div className="container">
          <div className="row">
            <div className="col-md-8 wc-txt">
              <h2>Why Choose Santol AC Service</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                placerat massa leo, eget vehicula ante mollis eget. Mauris
                tellus velit, posuere vel lacus a, scelerisque vehicula tortor.
                Sed sollicitudin non metus nec interdum. Cras convallis erat
                magna, eu pulvinar justo dignissim ut. Nulla at nulla eu mi
                maximus finibus. Morbi at ipsum lectus. Pellentesque posuere
                nisl mauris, sit amet interdum diam tempor nec. Morbi dapibus
                euismod libero at tincidunt.{" "}
              </p>
              <div className="row wc-res">
                <div className="col-md-4">
                  <div className="wc-cov">
                    <i className="far fa-life-ring" /> <br />
                    <b>Safty</b>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wc-cov">
                    <i className="fas fa-thermometer-quarter" /> <br />
                    <b>Quality</b>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wc-cov">
                    <i className="far fa-check-square" /> <br />
                    <b>Tradition</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-box">
                <div className="fb-title">
                  <h3>Get Appointment</h3>
                </div>
                <div className="fb-det">
                  <div className="fb-row">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="form-control"
                    />
                  </div>
                  <div className="fb-row">
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      className="form-control"
                    />
                  </div>
                  <div className="fb-row">
                    <input
                      type="text"
                      placeholder="Enter Email Address"
                      className="form-control"
                    />
                  </div>
                  <div className="fb-row">
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="form-control"
                    />
                  </div>
                  <div className="fb-row">
                    <textarea
                      row={4}
                      placeholder="Enter Your Message"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="fb-row">
                    <button className="btn btn-info">Book Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ################# Key Features Starts Here#######################-*/}
      <section className="key-features">
        <div className="container">
          <div className="inner-title">
            <h2>Our Key Features</h2>
            <p>Take a look at some of our key features</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-hospital-alt" />
                <h5>High Performance</h5>
                <p>
                  High Performanc Lorem ipsum dolor sit amet, consectetur
                  adipiscing consectetur adipiscing elit. Donec ut erat nec leo
                  lobortis blandit.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-user-md" />
                <h5>Fully Redundant</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ipsum dolor sit amet, consectetur ut erat nec leo lobortis
                  blandit.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-briefcase-medical" />
                <h5>Secure Infrastructure</h5>
                <p>
                  {" "}
                  Consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Donec ut erat nec leo lobortis
                  blandit.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-capsules" />
                <h5>Instant Activation</h5>
                <p>
                  {" "}
                  Donec ut erat nec leo Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-prescription-bottle-alt" />
                <h5>Dedicated Support</h5>
                <p>
                  Adipiscing elit Lorem ipsum dolor sit amet, sit amet,
                  consectetur adipiscing elit. Donec ut erat nec leo lobortis
                  blandit.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="far fa-thumbs-up" />
                <h5>Powerful Automation</h5>
                <p>
                  Powerful Automation Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ************************* Gallery Starts Here ************************** */}
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="gallery-filter d-none d-sm-block">
              <button
                className="btn btn-default filter-button"
                data-filter="all"
              >
                All
              </button>
              <button
                className="btn btn-default filter-button"
                data-filter="hdpe"
              >
                Finance
              </button>
              <button
                className="btn btn-default filter-button"
                data-filter="sprinkle"
              >
                Digital Marketing
              </button>
              <button
                className="btn btn-default filter-button"
                data-filter="spray"
              >
                {" "}
                Money
              </button>
              <button
                className="btn btn-default filter-button"
                data-filter="irrigation"
              >
                Business Alaysis
              </button>
            </div>
            <br />
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
              <img
                src="assets/images/gallery/gallery_01.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter sprinkle">
              <img
                src="assets/images/gallery/gallery_02.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
              <img
                src="assets/images/gallery/gallery_03.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
              <img
                src="assets/images/gallery/gallery_04.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
              <img
                src="assets/images/gallery/gallery_05.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
              <img
                src="assets/images/gallery/gallery_06.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
              <img
                src="assets/images/gallery/gallery_06.jpg"
                className="img-responsive"
              />
            </div>
            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
              <img
                src="assets/images/gallery/gallery_08.jpg"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ######## Gallery End ####### */}
      {/* ################# Custom Message Starts Here#######################-*/}
      <section className="custom-msg">
        <div className="container">
          <div className=" cust-msg">
            <h2>Loogin for a Custom Solution</h2>
            <p>
              Our technicians can provide you with the best custom made
              solutions <br /> on the market, no matter whether you're a small
              business or large enterprise.
            </p>
            <div className="btn btn-warning">Get in Touch</div>
          </div>
        </div>
      </section>
      {/*  *************************Testimonial Starts Here ************************** */}
      <div className="customer-serv">
        <div className="container">
          <div className="row session-title">
            <h2>Happy Customers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo
              lobortis blandit.
            </p>
          </div>
          <div className="row ro-clo">
            <div
              data-anijs="if: scroll, on: window, do: bounceInLeft animated, before: scrollReveal"
              className="bghn col-sm-4"
            >
              <div className="shado-2 card-b">
                <p>
                  We have intentionally decided not to include jQuery-based
                  fallbacks for the transitions. to include jQuery-based
                </p>
              </div>
              <div className="cust-det row">
                <div className="col-sm-3 col-3 img-circl">
                  <img alt="" src="assets/images/testimonial/member-01.jpg" />
                </div>
                <div className="col-sm-5 col-5 an-mtc no-padding">
                  <b>Sarath Ali</b>
                  <p>(Sales Agent)</p>
                </div>
                <div className="col-sm-4 col-4 star-par">
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4 bghn">
              <div className="shado-2 card-b">
                <p>
                  We have intentionally decided not to include jQuery-based
                  fallbacks for the transitions. to include jQuery-based
                </p>
              </div>
              <div className="cust-det row">
                <div className="col-sm-3 col-3 img-circl">
                  <img alt="" src="assets/images/testimonial/member-02.jpg" />
                </div>
                <div className="col-sm-5 col-5 an-mtc no-padding">
                  <b>Binny Aderson</b>
                  <p>(Sales Agent)</p>
                </div>
                <div className="col-sm-4  col-4 star-par">
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-anijs="if: scroll, on: window, do: bounceInRight animated, before: scrollReveal"
              className="col-sm-4 bghn"
            >
              <div className="shado-2 card-b">
                <p>
                  We have intentionally decided not to include jQuery-based
                  fallbacks for the transitions. to include jQuery-based
                </p>
              </div>
              <div className="cust-det row">
                <div className="col-sm-3 col-3 img-circl">
                  <img alt="" src="assets/images/testimonial/member-03.jpg" />
                </div>
                <div className="col-sm-5 col-5 an-mtc no-padding">
                  <b>Dweail Samluel</b>
                  <p>(Sales Agent)</p>
                </div>
                <div className="col-sm-4 col-4 star-par">
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ######## Testimonial End ####### */}
      {/* ################# Footer Starts Here#######################-*/}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
                Smart Eye is a leading provider of information technology,
                consulting, and business process services. Our dedicated
                employees offer strategic insights, technological expertise and
                industry experience.
              </p>
              <p>
                We focus on technologies that promise to reduce costs,
                streamline processes and speed time-to-market, Backed by our
                strong quality processes and rich experience managing global...{" "}
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h2>Useful Links</h2>
              <ul className="list-unstyled link-list">
                <li>
                  <a ui-sref="about" href="#/about">
                    About us
                  </a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a ui-sref="portfolio" href="#/portfolio">
                    Portfolio
                  </a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a ui-sref="products" href="#/products">
                    Latest jobs
                  </a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a ui-sref="gallery" href="#/gallery">
                    Pricing
                  </a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a ui-sref="contact" href="#/contact">
                    Contact us
                  </a>
                  <i className="fa fa-angle-right" />
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                ShegTech Limited, <br />
                Alimosho, <br />
                Lagos, Nigeria <br />
                Phone: +2348084838268 <br />
                Email: leewebs@yahoo.com
                {/* <a href="mailto:leewebs@yahoo.com" className>
                  leewebs@yahoo.com
                </a> */}
                <br />
                <a href="https://olamilekan.netlify.app" className>
                  Leewebs
                </a>
              </address>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <div className="container">
          <a href="https://olamilekan.netlify.app">
            2022 © All Rights Reserved | Designed and Developed by Leewebs
          </a>
          <span>
            <a>
              <i className="fab fa-github" />
            </a>
            <a>
              <i className="fab fa-google-plus-g" />
            </a>
            <a>
              <i className="fab fa-pinterest-p" />
            </a>
            <a>
              <i className="fab fa-twitter" />
            </a>
            <a>
              <i className="fab fa-facebook-f" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
