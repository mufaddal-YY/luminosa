"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer-top footer-style2 bt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b20">
              <div className="m-b10">
                <Image width={150} src={logo} alt="Luminosa Technologies" />
              </div>
              <p>
                "Transform your business with Luminosa's software expertise,
                industry knowledge, & business consulting - Building Tomorrow
                Together."
              </p>

              <div className="bg-gray-light radius-md p-10">
                <div className="d-flex justify-content-around">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 51 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M50.0082 24.6333C50.2258 37.9896 38.9879 49.212 25.4263 49.1497C11.9035 49.0874 0.859863 38.0597 0.859863 24.5242C0.859863 11.0122 11.989 0 25.6283 0C39.12 0 50.0005 10.9966 50.0005 24.6255L50.0082 24.6333ZM20.7244 28.8076C20.7244 28.8076 20.7399 28.8076 20.7477 28.8076C20.7477 31.549 20.7632 34.2981 20.7399 37.0395C20.7399 37.7326 20.9731 38.0519 21.6958 38.0285C22.7917 37.9974 23.8953 37.9896 24.9911 38.0285C25.6517 38.0519 25.9081 37.7715 25.9703 37.1407C26.1257 35.6221 25.9858 34.1112 26.048 32.5926C26.1102 30.9805 25.8615 29.3684 26.0713 27.764C26.3977 25.2407 28.9546 23.7221 31.3328 24.6021C32.8172 25.1473 33.7109 26.479 33.7265 28.2391C33.7498 31.2452 33.7498 34.2436 33.7265 37.2497C33.7265 37.9195 33.913 38.1532 34.628 38.0831C35.7471 37.974 36.8896 37.9585 38.0087 38.1454C38.7703 38.27 39.0501 37.9818 39.0423 37.203C39.019 33.457 39.0656 29.711 39.019 25.965C38.9879 23.0523 37.0217 20.3499 34.3249 19.797C31.7058 19.2596 29.1023 19.3219 26.9573 21.3546C26.7164 21.5804 26.4521 22.0009 26.0713 21.7985C25.6983 21.6038 25.8615 21.1443 25.9314 20.825C26.0636 20.1552 25.8537 19.9138 25.162 19.8437C24.0351 19.7269 22.9082 19.7424 21.7813 19.6957C20.9653 19.6646 20.7088 19.9917 20.7166 20.7782C20.7477 23.4573 20.7244 26.1364 20.7244 28.8154V28.8076ZM17.3204 28.8777C17.3204 26.1364 17.3048 23.3872 17.3359 20.6459C17.3359 19.9371 17.1105 19.6646 16.3878 19.6879C15.2298 19.7347 14.064 19.7191 12.8982 19.6879C12.2998 19.6724 12.0123 19.8515 12.0123 20.5057C12.0201 26.0585 12.0123 31.6113 12.0045 37.1641C12.0045 37.8572 12.3076 38.0519 12.9527 38.0363C14.0796 37.9974 15.2142 37.9818 16.3411 38.0363C17.1183 38.0675 17.3437 37.7638 17.3359 37.0161C17.3048 34.3059 17.3204 31.5957 17.3204 28.8777ZM14.5226 16.8609C16.3023 16.8453 17.8644 15.3189 17.8489 13.6133C17.8333 11.9234 16.2401 10.3969 14.4837 10.3969C12.8905 10.3969 11.4061 11.9779 11.4372 13.6601C11.4683 15.4123 12.8827 16.8765 14.5226 16.8609Z"
                        fill="#212B36"
                      />
                    </svg>
                  </div>
                  <div className="m-l10">
                    <svg
                      width="2"
                      height="43"
                      viewBox="0 0 2 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="1.1875"
                        y1="43"
                        x2="1.1875"
                        y2="2.35669e-08"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div className="m-l10">
                    <span className="text-dark">
                      Follow our Latest Updates <br className="hidden" /> on
                      Linkedin
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg col-md-6 col-sm-6">
              <h5>Solutions</h5>
              <hr className="borderSmall" />

              <Link href={"/"}>
                <p>Discover All Solution</p>
              </Link>
              <Link href={"/"}>
                <p>PLM Solution</p>
              </Link>
              <Link href={"/"}>
                <p>Digital Services</p>
              </Link>
              <Link href={"/"}>
                <p>Software Solutions</p>
              </Link>
            </div>
            <div className="col-lg col-md-6 col-sm-6">
              <h5>Services & Support</h5>
              <hr className="borderSmall" />

              <Link href={"/"}>
                <p>Services</p>
              </Link>
              <Link href={"/"}>
                <p>Support</p>
              </Link>
              <Link href={"/"}>
                <p>Trainings</p>
              </Link>
            </div>
            <div className="col-lg col-md-6 col-sm-6">
              <h5>Resources</h5>
              <hr className="borderSmall" />

              <Link href={"/"}>
                <p>Blog</p>
              </Link>
              <Link href={"/"}>
                <p>Webinars</p>
              </Link>
              <Link href={"/"}>
                <p>News</p>
              </Link>
              <Link href={"/"}>
                <p>Request Demo</p>
              </Link>
            </div>
            <div className="col-lg col-md-6 col-sm-6">
              <h5>About Us</h5>
              <hr className="borderSmall" />

              <Link href={"/"}>
                <p>Meet Luminosa</p>
              </Link>
              <Link href={"/"}>
                <p>Careers</p>
              </Link>
              <Link href={"/"}>
                <p>Partners</p>
              </Link>
              <Link href={"/"}>
                <p>Privacies and Cookies</p>
              </Link>
              <Link href={"/"}>
                <p>Terms and Conditions</p>
              </Link>
            </div>
          </div>
        </div>
        <hr className="borderSmall" />
        <div className="container">
          <div className="row m-t50 m-b30">
            <div className="col-lg-6">
              <h5 className="m-b0">Subscribe to our Newsletter</h5>
              <p>Receive Personal News and updates on your mail</p>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-action">
                <form className="subscription-form">
                  <div className="ajax-message"></div>
                  <div className="input-group">
                    <input
                      name="email"
                      required="required"
                      className="form-control"
                      placeholder="Your Email Address"
                      type="email"
                    />
                    <span className="input-group-btn">
                      <button
                        name="submit"
                        valueDefault="Submit"
                        type="submit"
                        className="btn-primary button-md radius-md bg-black">
                        Subscribe
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr className="borderSmall" />
          <div className="row  m-t50 m-b30">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="m-b20">
                <h5>Contact Information</h5>
                <p>+91 - 1234567890</p>
              </div>
              <div>
                <h5>Address</h5>
                <p>
                  Luminosa Technology DIS Pvt Ltd, Office No:202,
                  <br className="hidden" /> Pristine Square, Wakad Pune-411057,
                  India.
                </p>
              </div>
            </div>
          </div>
          <hr className="borderSmall" />
          <div className="text-center">
            <h6>All rights reserved | Luminosa Technology DIS Pvt. Ltd.</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
