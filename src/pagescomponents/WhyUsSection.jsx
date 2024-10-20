// WhyUsSection.js
import React from 'react';
import { whyUsData } from '../mockdata/AndroidAppDevelopmment';
import WhyUsBox from './WhyUsBox';
// import { whyUsData } from './mockData';
// import WhyUsBox from './WhyUsBox';

const WhyUsSection = () => (
  <section className="section-space why-us-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>
            Why partner with Expert App Devs for Android application development services?
          </h2>
        </div>
      </div>
      <div className="row justify-content-center why-mobiletech mt-3">
        {whyUsData.map((item, index) => (
          <WhyUsBox
            key={index}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
