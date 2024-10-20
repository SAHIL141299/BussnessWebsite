// SolutionCard.js
import React from 'react';

const SolutionCard = ({ image, alt, title, description, link }) => (
  <div className="col-lg-4 pb-5 pb-lg-0">
    <div className="solution-card">
      <div className="img-box">
        <img
          src={image}
          alt={alt}
          title={alt}
          width="380"
          height="285"
        />
      </div>
      <div className="content-box">
        <h3 className="heading">{title}</h3>
        <p className="short-desc">{description}</p>
        <a
          title="Read More"
          className="btn"
          href={link}
        >
          Read more
        </a>
      </div>
    </div>
  </div>
);

export default SolutionCard;
