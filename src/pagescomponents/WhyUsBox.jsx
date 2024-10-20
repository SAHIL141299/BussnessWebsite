// WhyUsBox.js
import React from 'react';

const WhyUsBox = ({ title, description, imgSrc, imgAlt }) => (
  <div className="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
    <div className="app-box" title={title}>
      <div className="icon">
        <img
          src={imgSrc}
          alt={imgAlt}
          title={imgAlt}
          width="64"
          height="64"
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default WhyUsBox;
