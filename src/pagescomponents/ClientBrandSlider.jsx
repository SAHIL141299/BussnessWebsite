// ClientBrandSlider.tsx

import React from "react";
import { clientData } from "../mockdata/AndroidAppDevelopmment";
// import { clientData } from "./clientData"; // Adjust the path as necessary

const ClientBrandSlider = () => {
  return (
    <section className="section-space client-brand service-client">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ textAlign: "left" }}>Our Clients</h2>
            <div className="swiper-container client-brand-slider swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="swiper-wrapper align-items-center"
                style={{ transform: "translate3d(-1435px, 0px, 0px)", transitionDuration: "0ms" }}
              >
                {clientData.map((client, index) => (
                  <div
                    className="swiper-slide"
                    key={index}
                    style={{ width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src={client.src}
                      alt={client.alt}
                      title={client.title}
                      width="200"
                      height="100"
                    />
                  </div>
                ))}
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBrandSlider;
