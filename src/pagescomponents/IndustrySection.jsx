// IndustrySection.js
import React from 'react';
import { industryData } from '../mockdata/AndroidAppDevelopmment';
// import { industryData } from './industryData';

const IndustrySection = () => {
  return (
    <section className="section-space light-bg serve-various-industries-section">
      <div className="container">
        <h2 className="mb-3 mb-md-4">
          We cater our android software services for various industries
        </h2>
        <div className="row flex-wrap align-items-center app-dev-list five-icon">
          {industryData.map((industry, index) => (
            <div className="icon" key={index}>
              <a title={industry.title} className="platforms-logo a-platform">
                <img
                  className="black-icon"
                  src={industry.blackIcon}
                  alt={industry.title}
                  title={industry.title}
                  width="80"
                  height="80"
                />
                <img
                  className="white-icon"
                  src={industry.whiteIcon}
                  alt={industry.title}
                  title={industry.title}
                  width="80"
                  height="80"
                />
                <span>{industry.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
