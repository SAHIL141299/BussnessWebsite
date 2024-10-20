import React from "react";
import "./Footer.css";
import Whatapp from "./Whatapp";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="footer-top">
          <ul>
            <li className="address d-none-landing-page flex-column align-items-start">
              <a
                title="Expert App Devs."
                href="https://www.expertappdevs.com"
                className="footer-logo mb-3"
              >
                <img
                  src="https://www.expertappdevs.com/front/images/expert-app-devs-white.svg"
                  alt="best mobile app development company"
                  title="best mobile app development company"
                  width="300"
                  height="62"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/sPVFREhr7u4pxwKE6"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="16"
                    height="25"
                  >
                    <path
                      d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                      fill="#14c4dc"
                    />
                  </svg>
                </span>
                <span>
                  735, Iscon Emporio, Beside Star Bazaar,
                  <br /> Satellite, Ahmedabad, Gujarat 380015, India
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ pointerEvents: "none;" }}
                class="mb-3"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="16"
                    height="25"
                  >
                    <path
                      d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                      fill="#14c4dc"
                    ></path>
                  </svg>
                </span>
                <span>
                  Suite 1-454, 7558 W Thunderbird Rd, <br />
                  Peoria, Phoenix, AZ 85381 USA{" "}
                </span>
              </a>
              <a
                href="https://maps.app.goo.gl/HKFGd7oYLJtTyE8P9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="16"
                    height="25"
                  >
                    <path
                      d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                      fill="#14c4dc"
                    ></path>
                  </svg>
                </span>
                <span>
                  Unit No: 30-01-5111, Jewellery &amp; Gemplex 3, <br />
                  Plot No: DMCC-PH2-J&amp;GPlexS, Jewellery &amp; Gemplex,{" "}
                  <br />
                  Dubai, United Arab Emirates{" "}
                </span>
              </a>
            </li>
            <li className="address flex-column align-items-start hire-footer">
              <a
                title="Hire Mobile App Developers"
                href="https://www.expertappdevs.com/hire-mobile-app-developers-india"
                className="mb-3"
                target="_blank"
              >
                Hire Mobile App Developers
              </a>
              <a
                title="Hire iOS Developers"
                href="https://www.expertappdevs.com/hire-ios-developers-india"
                className="mb-3"
                target="_blank"
              >
                Hire iOS Developers
              </a>
              <a
                title="Hire Android Developers"
                href="https://www.expertappdevs.com/hire-android-developers-india"
                className="mb-3"
                target="_blank"
              >
                Hire Android Developers
              </a>
              <a
                title="Hire Android Developers"
                href="https://www.expertappdevs.com/hire-android-developers-india"
                className="mb-3"
                target="_blank"
              >
                Hire Flutter Developers
              </a>

              <a
                title="Hire Android Developers"
                href="https://www.expertappdevs.com/hire-android-developers-india"
                className="mb-3"
                target="_blank"
              >
                Hire React Native Developers
              </a>

              <a
                title="Hire Android Developers"
                href="https://www.expertappdevs.com/hire-android-developers-india"
                className="mb-3"
                target="_blank"
              >
                Hire Unity Developers
              </a>
            </li>
            <li class="footer-contact-list d-none-landing-page">
              <div class="footer-contact-info footer-contact-call">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                      fill="#14c4dc"
                    ></path>
                  </svg>
                </span>
                <span>
                  <a href="tel:917016166822">+91 701-616-6822</a>
                  <a class="d-block" href="tel:16232422622">
                    +1-623-242-2622
                  </a>
                  <a class="d-block" href="tel:971588711412">
                    +971 58-871-1412
                  </a>
                </span>
              </div>

              <div class="footer-contact-info">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                      fill="#14c4dc"
                    ></path>
                  </svg>
                </span>
                <span>
                  <a href="mailto:sales@expertappdevs.com">
                    sales@expertappdevs.com
                  </a>
                </span>
              </div>

              <div class="footer-contact-info social-links">
                <ul class="social-icon-list">
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="facebook"
                      href="https://www.facebook.com/ExpertAppDevs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="10"
                        height="17"
                      >
                        <path
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          fill="#bccaf6"
                        ></path>
                      </svg>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="instagram"
                      href="https://www.instagram.com/expertappdevs/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="14"
                        height="17"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          fill="#bccaf6"
                        ></path>
                      </svg>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="twitter"
                      href="https://twitter.com/ExpertAppDevs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="linkedin"
                      href="https://www.linkedin.com/company/expert-app-devs/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="14"
                        height="17"
                      >
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          fill="#bccaf6"
                        ></path>
                      </svg>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="youtube"
                      href="https://www.youtube.com/channel/UCqJtHff6w43-wV0tRPtBTsw"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="22"
                        height="22"
                      >
                        <path
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                          fill="#bccaf6"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="skype"
                      href="skype:live:.cid.bb618fdf0616a929?chat"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="14"
                        height="17"
                      >
                        <path
                          d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
                          fill="#bccaf6"
                        ></path>
                      </svg>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="dribbble"
                      href="https://dribbble.com/ExpertAppDevs"
                    >
                      <svg
                        viewBox="0 0 56.693 56.693"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="19"
                        fill="#bccaf6"
                      >
                        <path d="M28.347,0c-3.293,0-6.526,0.389-9.678,1.152c-0.607,0.153-1.193,0.353-1.75,0.589L12.3,4.35c-0.675,0.315-1.312,0.708-1.89,1.165l-2.778,2.077c-0.578,0.457-1.092,0.984-1.521,1.563l-3.027,3.793c-0.364,0.456-0.702,0.948-1.004,1.471L0,21.87c-0.214,0.41-0.404,0.835-0.566,1.273c-0.613,1.601-1.07,3.263-1.362,4.977c-0.292,1.714-0.447,3.457-0.447,5.207c0,1.75,0.155,3.492,0.447,5.207c0.292,1.714,0.749,3.376,1.362,4.977c0.162,0.438,0.352,0.863,0.566,1.273l3.027,3.793c0.302,0.523,0.64,1.015,1.004,1.471l3.793,3.027c0.428,0.579,0.943,1.106,1.521,1.563l2.778,2.077c0.578,0.457,1.215,0.85,1.89,1.165l4.618,1.746c0.557,0.236,1.143,0.436,1.75,0.589c3.152,0.763,6.385,1.152,9.678,1.152c3.293,0,6.526-0.389,9.678-1.152c0.607-0.153,1.193-0.353,1.75-0.589l4.618-1.746c0.675-0.315,1.312-0.708,1.89-1.165l2.778-2.077c0.578-0.457,1.092-0.984,1.521-1.563l3.027-3.793c0.364-0.456,0.702-0.948,1.004-1.471l3.793-3.027c0.214-0.41,0.404-0.835,0.566-1.273c0.613-1.601,1.07-3.263,1.362-4.977c0.292-1.714,0.447-3.457,0.447-5.207c0-1.75-0.155-3.492-0.447-5.207c-0.292-1.714-0.749-3.376-1.362-4.977c-0.162-0.438-0.352-0.863-0.566-1.273L50.1,12.3c-0.302-0.523-0.64-1.015-1.004-1.471l-3.793-3.027c-0.428-0.579-0.943-1.106-1.521-1.563l-2.778-2.077c-0.578-0.457-1.215-0.85-1.89-1.165l-4.618-1.746c-0.557-0.236-1.143-0.436-1.75-0.589C34.873,0.389,31.64,0,28.347,0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      target="_blank"
                      title="behance"
                      href="https://www.behance.net/expert-app-devs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                          fill="#bccaf6"
                        ></path>
                      </svg>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="last-li" style={{ position: "static", zIndex: "9;" }}>
              <div class="first-img" style={{ marginBottom: "30px" }}>
                <a
                  href="https://www.trustpilot.com/evaluate/expertappdevs.com"
                  target="_blank"
                  rel="nofollow"
                  style={{ maxWidth: "70%", display: "inline-block" }}
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/trustPilot-review.png"
                    title="TrustPilot"
                    alt="TrustPilot"
                    width="500"
                    height="600"
                  />
                </a>
              </div>

              <div class="last-img" style={{ marginLeft: "40px" }}>
                <a
                  href="https://clutch.co/profile/expert-app-devs"
                  target="blank"
                  style={{
                    display: "inline-block",
                    width: "80%",
                    maxWidth: "300px",
                  }}
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/Clutch-Rating.png"
                    title="clutch"
                    alt="clutch"
                    width="500"
                    height="600"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Expert App Devs. All Rights Reserved.</p>
          <div class="footer-menu">
            <ul>
              <li>
                <a
                  title="Pitch Deck"
                  target="_blank"
                  href="https://www.expertappdevs.com/hire-us-for-tailor-made-mobile-app-development-services.pdf"
                >
                  Pitch Deck
                </a>
              </li>
              <li>
                <a
                  title="Blog"
                  class=""
                  href="https://www.expertappdevs.com/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  title="About"
                  class=""
                  href="https://www.expertappdevs.com/about-us"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  title="Career"
                  class=""
                  href="https://www.expertappdevs.com/career"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  title="Career"
                  class=""
                  href="https://www.expertappdevs.com/holiday-list"
                >
                  Holiday
                </a>
              </li>
              <li>
                <a
                  title="Contact us"
                  class=""
                  href="https://www.expertappdevs.com/contact-us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  title="Privacy Policy"
                  class=""
                  href="https://www.expertappdevs.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  title="Sitemap"
                  class=""
                  href="https://www.expertappdevs.com/sitemap"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <Whatapp />
    <BackToTop />
    </>
  );
};

export default Footer;
