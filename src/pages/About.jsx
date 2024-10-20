import React from "react";
import ClientBrandSlider from "../components/ClientBrandsSlider";
import Footer from "../components/Footer";
import Header from "../components/Head";
import SwiperComponent from "../components/Swiper";
// import { clientsData } from "../mockdata/ClientsBrand";





const About = () => {

  const clientsData = [
    { name: 'ABB Group', image: 'https://www.expertappdevs.com/sitebucket/client/abb.png' },
    { name: 'Nestlé', image: 'https://www.expertappdevs.com/sitebucket/client/nestle.webp' },
    { name: 'GEA Group', image: 'https://www.expertappdevs.com/sitebucket/client/gea.png' },
    { name: 'PayPal', image: 'https://www.expertappdevs.com/sitebucket/client/paypal-logo.png' },
    { name: 'Indusind Bank', image: 'https://www.expertappdevs.com/sitebucket/client/indusind_bank.webp' },
    { name: 'National Geographic', image: 'https://www.expertappdevs.com/sitebucket/client/nationa-geographic.png' },
    { name: 'Infosys', image: 'https://www.expertappdevs.com/sitebucket/client/infosys.png' },
    { name: 'Jio', image: 'https://www.expertappdevs.com/sitebucket/client/jio.png' },
    { name: 'Godrej Agrovet', image: 'https://www.expertappdevs.com/sitebucket/client/godrejagrovet.webp' },
    { name: 'New York Stock Exchange', image: 'https://www.expertappdevs.com/sitebucket/client/ny-stock-exchange.png' },
    { name: 'Sting Sports', image: 'https://www.expertappdevs.com/sitebucket/client/stingsports.png' },
    { name: 'Sadhana', image: 'https://www.expertappdevs.com/sitebucket/client/sadhana.png' },
  ];
  return (
    <>
      <Header />
      <section class="sub-heading light-bg">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a title="Home" href="https://www.expertappdevs.com">
                      Home
                    </a>
                  </li>

                  <li class="breadcrumb-item">About Us</li>
                </ol>
              </nav>
            </div>

            <div class="col-lg-7">
              <h1>About Us</h1>

              <div class="title-text">
                <p>
                  We are a leading-edge mobile software and IoT solutions
                  provider in USA, UK, Canada, Australia, Middle East, and
                  Europe. We work remotely from India with award-winning teams
                  of designers and developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiperComponent clients={clientsData} />
      <section class="section-space">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h2 class="mb-3">Who we are?</h2>

              <div class="pr-lg-5">
                <p>
                  As a leading
                  <strong>
                    <a href="https://www.expertappdevs.com/blog/top-5-mobile-app-development-companies-in-india">
                      {" "}
                      mobile app development company
                    </a>
                  </strong>{" "}
                  in USA, UK, Canada, Australia, Middle East, and Europe, we
                  help our clients handle complex business tasks with innovative
                  IT and mobile software solutions.
                </p>

                <p>
                  Our customer base involves clients at both domestic and global
                  levels. They invest in our leading-edge and sophisticated
                  technology solutions to accomplish business operations with
                  acquirable results. With our offerings, we strive to lend a
                  helping hand to our clientele in achieving targeted outcomes.
                </p>

                <p class="mb-0">
                  As an end-to-end service provider, we specialize in developing
                  both Android &amp; iPhone applications that enhance
                  productivity and user-engagement for our partners.
                </p>

                <p>
                  Speaking of our Android &amp; iPhone app services in USA, UK,
                  Canada, Australia, Middle East, and Europe, we deliver custom
                  solutions to minimize or reduce the latency of services to
                  benefit customers.
                </p>
              </div>
            </div>

            <div class="col-lg-5 mt-lg-0 mt-4">
              <div class="dis-img">
                <img
                  src="https://www.expertappdevs.com/front/images/about-us.jpg"
                  alt="mobile app development company"
                  title="right-img"
                  width="538"
                  height="504"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientBrandSlider />
      <section class="section-space light-bg">
        <div class="container">
          <div>
            <h2>Vision &amp; Mission</h2>

            <div class="title-text">
              <p>
                To offer A-Z mobile apps and IoT solutions to our clientele for
                every niche as an end-to-end partner.
              </p>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6 mt-4 main-div">
              <a class="app-box" title="Relationship" href="javascript:">
                <div class="icon">
                  <img
                    class="w-50"
                    src="https://www.expertappdevs.com/front/images/partnership-handshake.svg"
                    alt="Relationship"
                    title="Relationship"
                    width="34"
                    height="34"
                  />
                </div>

                <h3>Relationship</h3>

                <p class="max">
                  At Expert App Devs, we invest our time and efforts to
                  cultivate and nurture client relationships. We assert
                  importance on the quality of services we offer above
                  everything; thus, delivering more effective and impressive
                  work.
                </p>
              </a>
            </div>

            <div class="col-lg-4 col-sm-6 mt-4 main-div">
              <a class="app-box" title="Excellence at work" href="javascript:">
                <div class="icon">
                  <img
                    class="w-50"
                    src="https://www.expertappdevs.com/front/images/trophy.svg"
                    alt="Excellence at work"
                    title="Excellence at work"
                    width="34"
                    height="34"
                  />
                </div>

                <h3>Excellence at work</h3>

                <p class="max">
                  No matter what business requirement you come up with, we, at
                  Expert App Devs, work tirelessly towards improving your
                  product and service in different ways. We envision a positive
                  attitude towards achieving your goals.
                </p>
              </a>
            </div>

            <div class="col-lg-4 col-sm-12 mt-4 main-div">
              <a class="app-box" title="Team spirit" href="javascript:">
                <div class="icon">
                  <img
                    class="w-50"
                    src="https://www.expertappdevs.com/front/images/team.svg"
                    alt="Team spirit"
                    title="Team spirit"
                    width="34"
                    height="34"
                  />
                </div>

                <h3>Team Spirit</h3>

                <p class="max">
                  An engaged and motivated workforce is what boosts the
                  business’s bottom line. Our experienced and skilled developers
                  take this as their motto to maintain higher morale and
                  outperform with greater productivity.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="section-space">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>Our Achievement</h2>

              <div class="title-text">
                <p>
                  Our award-winning app designers and developers have worked
                  with their heads and hearts together to serve multiple clients
                  and win their trust on our incredible journey so far. We count
                  it as a crowning achievement and pride ourselves on it.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="counter-info" id="counter-home">
                <div class="counter-txt">
                  <div class="number">
                    <span class="counter-value" data-count="2500">
                      2500
                    </span>
                    +
                  </div>

                  <h5>PROJECT COMPLETED</h5>
                </div>

                <div class="counter-txt">
                  <div class="number">
                    <span class="counter-value" data-count="600">
                      600
                    </span>
                    +
                  </div>

                  <h5>CLIENTS SERVE</h5>
                </div>

                <div class="counter-txt">
                  <div class="number">
                    <span class="counter-value" data-count="12">
                      12
                    </span>
                    +
                  </div>

                  <h5>YEARS IN BUSINESS</h5>
                </div>

                <div class="counter-txt">
                  <div class="number">
                    <span class="counter-value" data-count="400">
                      400
                    </span>
                    +
                  </div>

                  <h5>Our Team</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="siper-container recognitions-slder client-brand-slder swiper-initialized swiper-horizontal swiper-pointer-events">
            <div
              class="swiper-wrapper"
              id="swiper-wrapper-baaa1217220d3daa"
              aria-live="off"
              style={{
                transform: "translate3d(-3075px, 0px, 0px)",
                transitionDuration: "1000ms",
              }}
            >
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.10seos.com/company/expert-app-devs/389827"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/verified-256-b.svg"
                    width="177"
                    height="136"
                    alt="10SEOS"
                    title="10SEOS"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="3"
                role="group"
                aria-label="4 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.provenexpert.com/expert-app-devs/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/provenexpert-logo-with-claim.png"
                    alt="Proven Expert"
                    title="Proven Expert"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="4"
                role="group"
                aria-label="5 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.softwareworld.co/top-mobile-app-development-companies-in-usa/"
                  rel="nofollow"
                  target="_blank"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/App-Development-Companies-USA.png"
                    title="Softrware world"
                    alt="Softrware world"
                    width="177"
                    height="136"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="5"
                role="group"
                aria-label="6 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.techimply.com/profile/expert-app-devs"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/top-mobileapp-development-companies_Badge6.svg"
                    style={{ width: "230px" }}
                    title="Techimply"
                    alt="Techimply"
                    width="177"
                    height="136"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="6"
                role="group"
                aria-label="7 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://topfirms.co/companies/mobile-app-development/usa"
                  rel="nofollow"
                  target="_blank"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/mobile-app-development-companies-round-badge.png"
                    alt="Top Firms"
                    title="Top Firms"
                    width="177"
                    height="136"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="7"
                role="group"
                aria-label="8 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.designrush.com/agency/mobile-app-design-development/arizona/phoenix"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/accredited-agency.png"
                    alt="Designrush"
                    title="Designrush"
                    height="126"
                    width="127"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next swiper-slide-duplicate-active"
                data-swiper-slide-index="8"
                role="group"
                aria-label="9 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://clutch.co/profile/expert-app-devs"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/clutch.png"
                    alt="clutch 8"
                    title="clutch 2018"
                    width="177"
                    height="136"
                  />
                </a>
              </div>

              <div
                class="swiper-slide swiper-slide-duplicate-active"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.appfutura.com/companies/expertappdevs"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/badge-top-app-company.png"
                    alt="appfutura"
                    title="appfutura"
                  />
                </a>
              </div>

              <div
                class="swiper-slide"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.goodfirms.co/company/expert-app-devs"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/app-development.svg"
                    alt="goodfirms.co"
                    title="goodfirms.co"
                  />
                </a>
              </div>

              <div
                class="swiper-slide"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.10seos.com/company/expert-app-devs/389827"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/verified-256-b.svg"
                    width="177"
                    height="136"
                    alt="10SEOS"
                    title="10SEOS"
                  />
                </a>
              </div>

              <div
                class="swiper-slide swiper-slide-duplicate-next"
                data-swiper-slide-index="3"
                role="group"
                aria-label="4 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.provenexpert.com/expert-app-devs/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/provenexpert-logo-with-claim.png"
                    alt="Proven Expert"
                    title="Proven Expert"
                  />
                </a>
              </div>

              <div
                class="swiper-slide"
                data-swiper-slide-index="4"
                role="group"
                aria-label="5 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.softwareworld.co/top-mobile-app-development-companies-in-usa/"
                  rel="nofollow"
                  target="_blank"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/App-Development-Companies-USA.png"
                    title="Softrware world"
                    alt="Softrware world"
                    width="177"
                    height="136"
                  />
                </a>
              </div>

              <div
                class="swiper-slide swiper-slide-duplicate-prev"
                data-swiper-slide-index="5"
                role="group"
                aria-label="6 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.techimply.com/profile/expert-app-devs"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/top-mobileapp-development-companies_Badge6.svg"
                    style={{ width: "230px" }}
                    title="Techimply"
                    alt="Techimply"
                    width="177"
                    height="136"
                  />
                </a>
              </div>

              <div
                class="swiper-slide"
                data-swiper-slide-index="6"
                role="group"
                aria-label="7 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://topfirms.co/companies/mobile-app-development/usa"
                  rel="nofollow"
                  target="_blank"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/mobile-app-development-companies-round-badge.png"
                    alt="Top Firms"
                    title="Top Firms"
                    width="177"
                    height="136"
                  />
                </a>
              </div>

              <div
                class="swiper-slide"
                data-swiper-slide-index="7"
                role="group"
                aria-label="8 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.designrush.com/agency/mobile-app-design-development/arizona/phoenix"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/accredited-agency.png"
                    alt="Designrush"
                    title="Designrush"
                    height="126"
                    width="127"
                  />
                </a>
              </div>

              <div
                class="swiper-slide"
                data-swiper-slide-index="8"
                role="group"
                aria-label="9 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://clutch.co/profile/expert-app-devs"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/clutch.png"
                    alt="clutch 8"
                    title="clutch 2018"
                    width="177"
                    height="136"
                  />
                </a>
              </div>

              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-duplicate-prev swiper-slide-next"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.appfutura.com/companies/expertappdevs"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/badge-top-app-company.png"
                    alt="appfutura"
                    title="appfutura"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.goodfirms.co/company/expert-app-devs"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/app-development.svg"
                    alt="goodfirms.co"
                    title="goodfirms.co"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.10seos.com/company/expert-app-devs/389827"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/verified-256-b.svg"
                    width="177"
                    height="136"
                    alt="10SEOS"
                    title="10SEOS"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="3"
                role="group"
                aria-label="4 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.provenexpert.com/expert-app-devs/"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    width="177"
                    height="136"
                    src="https://www.expertappdevs.com/front/images/provenexpert-logo-with-claim.png"
                    alt="Proven Expert"
                    title="Proven Expert"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="4"
                role="group"
                aria-label="5 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://www.softwareworld.co/top-mobile-app-development-companies-in-usa/"
                  rel="nofollow"
                  target="_blank"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/App-Development-Companies-USA.png"
                    title="Softrware world"
                    alt="Softrware world"
                    width="177"
                    height="136"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="5"
                role="group"
                aria-label="6 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.techimply.com/profile/expert-app-devs"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/top-mobileapp-development-companies_Badge6.svg"
                    style={{ width: "230px" }}
                    title="Techimply"
                    alt="Techimply"
                    width="177"
                    height="136"
                  />
                </a>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate-active swiper-slide-duplicate-prev"
                data-swiper-slide-index="6"
                role="group"
                aria-label="7 / 9"
                style={{ width: "150px", marginRight: "25px" }}
              >
                <a
                  href="https://topfirms.co/companies/mobile-app-development/usa"
                  rel="nofollow"
                  target="_blank"
                >
                  <img
                    src="https://www.expertappdevs.com/front/images/mobile-app-development-companies-round-badge.png"
                    alt="Top Firms"
                    title="Top Firms"
                    width="177"
                    height="136"
                  />
                </a>
              </div>
            </div>

            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
      <section class="section-space pb-5 light-bg">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8">
              <h2>Our customers say</h2>

              <div class="title-text">
                <p>
                  We aren’t boasting! See what our customers have to say about
                  Expert App Devs and how leveraging our services has helped
                  their businesses grow.
                </p>
              </div>
            </div>

            <div class="col-12 customers-say">
              {/* <!-- <div class="swiper-container client-brand-slder">

                <div class="swiper-wrapper">

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/abb.png" alt="ABB Group" title="ABB Group" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/nestle.webp" alt="Nestlé" title="Nestlé" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/gea.png" alt="GEA Group" title="GEA Group" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/paypal-logo.png" alt="PayPal" title="PayPal" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/indusind_bank.webp" alt="Indusind Bank" title="Indusind Bank" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/nationa-geographic.png" alt="National Geographic" title="National Geographic" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/infosys.png" alt="Infosys" title="Infosys" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/jio.png" alt="Jio" title="Jio" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/godrejagrovet.webp" alt="godrejagrovet" title="godrejagrovet" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/ny-stock-exchange.png" alt="New York Stock Exchange" title="New York Stock Exchange" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/stingsports.png" alt="Sting Sports" title="Sting Sports" width="200" height="200">

                    </div>

                    
                    <div class="swiper-slide">

                        <img src="https://www.expertappdevs.com/sitebucket/client/sadhana.png" alt="Sadhana" title="Sadhana" width="200" height="200">

                    </div>

                    
                </div>

            </div> --> */}
              <script
                type="text/javascript"
                src="https://widget.clutch.co/static/js/widget.js"
              ></script>{" "}
              <div
                class="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="12"
                data-height="375"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-reviews="2259761,2249721,2247969,2247748,2167229,1961611,1914218,1902615"
                data-clutchcompany-id="1886797"
                style={{
                  transform: "scale(1)",
                  marginBottom: " 0px",
                  transformOrigin: "0px 0px",
                }}
              >
                <iframe
                  id="iframe-0.8061540740439872"
                  width="100%"
                  src="https://widget.clutch.co/widgets/get/12?ref_domain=www.expertappdevs.com&amp;uid=1886797&amp;rel_nofollow=true&amp;reviews=2259761%2C2249721%2C2247969%2C2247748%2C2167229%2C1961611%2C1914218%2C1902615&amp;ref_path=/about-us"
                  height="375px"
                  scrolling="no"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    display: "block",
                    height: "357px",
                  }}
                  title="[object Object]12"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-space">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <h2>Need a consultation?</h2>

              <div class="title-text">
                <p class="margin-none">
                  Have queries or want to know how we can help you with our
                  services? Drop us a line! We are available round the clock.
                </p>
              </div>
            </div>

            <div class="col-md-3 mt-3 text-md-right">
              <a
                title="Contact Us"
                class="btn btn-danger"
                href="https://www.expertappdevs.com/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
