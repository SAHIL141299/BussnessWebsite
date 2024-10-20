// CallToActionContainer.js
import React from 'react';
// import CTASection from './CTASection';
// import { ctaData } from '../mockdata/PagesArray';
import CTASection from './CTASectionQuete';
import { ctaDataQuete } from '../mockdata/AndroidAppDevelopmment';
// import { ctaData } from './mockData';

const CallToActionContainer = () => (
  <div>
    {ctaDataQuete.map((cta, index) => (
      <CTASection
        key={index}
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonLink={cta.buttonLink}
      />
    ))}
  </div>
);

export default CallToActionContainer;
