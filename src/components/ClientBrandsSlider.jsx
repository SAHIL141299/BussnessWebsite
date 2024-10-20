// ClientBrandSlider.js
import React from "react";
// import clientBrands from "./clientBrands";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper-bundle.min.css";
import clientBrands from "../mockdata/ClientsBrand";

const ClientBrandSlider = () => {
  return (
    <section class="section-space client-brand service-client">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="swiper-container client-brand-slder swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                class="swiper-wrapper align-items-center"
                id="swiper-wrapper-5e275efbd82a741d"
                aria-live="off"
                style={{transform: "translate3d(-2870px, 0px, 0px)", transitionDuration: "0ms" }}
              >
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="6"
                  role="group"
                  aria-label="7 / 12"
                  style={{width: "175px", marginRight: "30px"}}
                >
                  <img
                    src="https://www.expertappdevs.com/sitebucket/client/infosys.png"
                    alt="Infosys"
                    title="Infosys"
                    width="200"
                    height="100"
                  />
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index="7"
                  role="group"
                  aria-label="8 / 12"
                  style={{width: "175px", marginRight: "30px"}}
                />
                <img
                  src="https://www.expertappdevs.com/sitebucket/client/jio.png"
                  alt="Jio"
                  title="Jio"
                  width="200"
                  height="100"
                />
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="8"
                role="group"
                aria-label="9 / 12"
                style={{width: "175px", marginRight: "30px"}}
              />
              <img
                src="https://www.expertappdevs.com/sitebucket/client/godrejagrovet.webp"
                alt="godrejagrovet"
                title="godrejagrovet"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index="9"
              role="group"
              aria-label="10 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/ny-stock-exchange.png"
                alt="New York Stock Exchange"
                title="New York Stock Exchange"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="10"
              role="group"
              aria-label="11 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/stingsports.png"
                alt="Sting Sports"
                title="Sting Sports"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="11"
              role="group"
              aria-label="12 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/sadhana.png"
                alt="Sadhana"
                title="Sadhana"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="0"
              role="group"
              aria-label="1 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/abb.png"
                alt="ABB Group"
                title="ABB Group"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="1"
              role="group"
              aria-label="2 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/nestle.webp"
                alt="Nestlé"
                title="Nestlé"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="2"
              role="group"
              aria-label="3 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/gea.png"
                alt="GEA Group"
                title="GEA Group"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="3"
              role="group"
              aria-label="4 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/paypal-logo.png"
                alt="PayPal"
                title="PayPal"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="4"
              role="group"
              aria-label="5 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/indusind_bank.webp"
                alt="Indusind Bank"
                title="Indusind Bank"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="5"
              role="group"
              aria-label="6 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/nationa-geographic.png"
                alt="National Geographic"
                title="National Geographic"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="6"
              role="group"
              aria-label="7 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/infosys.png"
                alt="Infosys"
                title="Infosys"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-prev"
              data-swiper-slide-index="7"
              role="group"
              aria-label="8 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/jio.png"
                alt="Jio"
                title="Jio"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-active"
              data-swiper-slide-index="8"
              role="group"
              aria-label="9 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/godrejagrovet.webp"
                alt="godrejagrovet"
                title="godrejagrovet"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-next"
              data-swiper-slide-index="9"
              role="group"
              aria-label="10 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/ny-stock-exchange.png"
                alt="New York Stock Exchange"
                title="New York Stock Exchange"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="10"
              role="group"
              aria-label="11 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/stingsports.png"
                alt="Sting Sports"
                title="Sting Sports"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide"
              data-swiper-slide-index="11"
              role="group"
              aria-label="12 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/sadhana.png"
                alt="Sadhana"
                title="Sadhana"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="0"
              role="group"
              aria-label="1 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/abb.png"
                alt="ABB Group"
                title="ABB Group"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="1"
              role="group"
              aria-label="2 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/nestle.webp"
                alt="Nestlé"
                title="Nestlé"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="2"
              role="group"
              aria-label="3 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/gea.png"
                alt="GEA Group"
                title="GEA Group"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="3"
              role="group"
              aria-label="4 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/paypal-logo.png"
                alt="PayPal"
                title="PayPal"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="4"
              role="group"
              aria-label="5 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/indusind_bank.webp"
                alt="Indusind Bank"
                title="Indusind Bank"
                width="200"
                height="100"
              />
            </div>
            <div
              class="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index="5"
              role="group"
              aria-label="6 / 12"
              style={{width: "175px", marginRight: "30px"}}
            >
              <img
                src="https://www.expertappdevs.com/sitebucket/client/nationa-geographic.png"
                alt="National Geographic"
                title="National Geographic"
                width="200"
                height="100"
              />
            </div>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default ClientBrandSlider;
