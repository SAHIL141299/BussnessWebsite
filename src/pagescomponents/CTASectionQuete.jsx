// CTASection.js
import React from 'react';

const CTASectionQuete = ({ title, subtitle, buttonText, buttonLink }) => (
  <section className="section-space cta-section get-demo pb-0">
    <div className="container">
      <div className="row rounded lets-talk p-md-5 p-3 m-0 mt-5">
        <div className="col-md-12 p-3">
          <div className="row inner align-items-center">
            <div className="col-lg-8 col-md-7 mt-3 mb-3">
              <h3>{title}</h3>
              <span>{subtitle}</span>
            </div>
            <div className="col-lg-4 col-md-5 mt-3 mb-3 text-md-right">
              <a title="Contact Us" className="btn btn-danger" href={buttonLink}>
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASectionQuete;
