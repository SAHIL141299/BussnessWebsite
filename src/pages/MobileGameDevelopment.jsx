import React from "react";
import MobileGameDevelopmentHeading from "../pagescomponents/MobileGameDevelopment/MobileGameDevelopment";
import ServiceSection from "../pagescomponents/MobileGameDevelopment/ServiceSection";
import TestimonialSection from "../pagescomponents/MobileGameDevelopment/TestimonialSection";
import {
  serviceData,
  testimonialData,
} from "../mockdata/MobileGameDevelopment";
import ExpoloreService from "../pagescomponents/MobileGameDevelopment/ExpoloreService";
import SolutionDeliverSection from "../pagescomponents/MobileGameDevelopment/SolutionDeliverSection";
import CTASection from "../pagescomponents/MobileGameDevelopment/CTASection";
import WhyUsSection from "../pagescomponents/MobileGameDevelopment/WhyUsSection";
import ExpertiseSection from "../pagescomponents/MobileGameDevelopment/ExpertiseSection";
import SuccessStorySection from "../pagescomponents/MobileGameDevelopment/SuccessStorySection";
import CTAQueteSection from "../pagescomponents/MobileGameDevelopment/CTAQueteSection";
import IndustriesSection from "../pagescomponents/MobileGameDevelopment/IndustriesSection";
import SpaceSection from "../pagescomponents/MobileGameDevelopment/SpaceSection";
import ClientBrandSection from "../pagescomponents/MobileGameDevelopment/ClientBrandSection";
import CTAProjectSection from "../pagescomponents/MobileGameDevelopment/CTAProjectSection";

const MobileGameDevelopment = () => {
  return (
    <>
      <MobileGameDevelopmentHeading />
      {/* <section class="section-space primary-bg hire-testimonial-section">
        <div class="container">
          <div class="row align-items-center why-hire">
            <div class="col-lg-8 pb-5 pb-lg-0">
              <div class="middle-content">
                <h2>Unleash New Ways to Download Games on Play Store</h2>
                <div class="title-text">
                  <p>
                    If you have a game app idea that can offer a superlative and
                    adventurous experience to users, our mobile game app
                    developers would love to develop it for you. One of the key
                    secrets to our success is our high-quality, domain-specific
                    development team, which creates mobile game applications
                    that meet the specific needs of our clients.&nbsp;
                  </p>

                  <p>
                    Since our inception, we have received a great deal of client
                    support. <strong>Expert App Devs</strong>, India's leading
                    offshore{" "}
                    <a href="https://www.expertappdevs.com/">
                      mobile game development company
                    </a>
                    , is a reputable name to turn to for exceptional mobile game
                    development services.
                  </p>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire dedicated mobile game developers
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="swiper-container testimonials-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div
                  class="swiper-wrapper"
                  id="swiper-wrapper-d6475a4ca9a61c8d"
                  aria-live="off"
                  style={{transitionDuration: "0ms", transform: "translate3d(-808px, 0px, 0px)" }}
                >
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 2"
                    style={{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        I am very happy with the final product from the solution
                        as well as support and service from Expert App Devs.
                        They also covered the latest OS updates for Android and
                        iOS apps in the final product! Thank you to the team!
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Harlie X.</strong>
                          Healthcare CFO, Phoenix
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 2"
                    style={{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        The team of android app developers is skilled in android
                        development on the Android platform as well as
                        cross-platform, delivering high-quality apps. Highly
                        recommended android developers because their aim turning
                        in the best possible results.
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Justin Rath</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 2"
                    style={{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        I am very happy with the final product from the solution
                        as well as support and service from Expert App Devs.
                        They also covered the latest OS updates for Android and
                        iOS apps in the final product! Thank you to the team!
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Harlie X.</strong>
                          Healthcare CFO, Phoenix
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 2"
                    style={{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        The team of android app developers is skilled in android
                        development on the Android platform as well as
                        cross-platform, delivering high-quality apps. Highly
                        recommended android developers because their aim turning
                        in the best possible results.
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Justin Rath</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <ServiceSection data={serviceData} /> */}
      <TestimonialSection testimonials={testimonialData} />
        <ExpoloreService />
        <SolutionDeliverSection />
        <CTASection />
        <WhyUsSection />
        <ExpertiseSection />
        <SuccessStorySection />
        <CTAQueteSection />
        <IndustriesSection />
        <SpaceSection />
        <ClientBrandSection />
        <CTAProjectSection />
    </>
  );
};

export default MobileGameDevelopment;
