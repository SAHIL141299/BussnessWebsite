// src/components/CtaSection.js
import React from 'react';

const CtaSectionProject = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="section-space cta-section start-project">
      <div className="container">
        <div className="row rounded lets-talk p-md-5 p-3 m-0 mt-5">
          <div className="col-md-12 p-3">
            <div className="row inner align-items-center">
              <div className="col-lg-9 col-md-7 mt-3 mb-3">
                <h3>{title}</h3>
                <span>{subtitle}</span>
              </div>
              <div className="col-lg-3 col-md-5 mt-3 mb-3 text-md-right">
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
};

export default CtaSectionProject;
