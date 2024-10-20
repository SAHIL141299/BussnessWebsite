// SolutionDeliverSection.js
import React from 'react';
import { solutionsData } from '../mockdata/AndroidAppDevelopmment';
import SolutionCard from './SolutionCard';
// import SolutionCard from './SolutionCard';
// import { solutionsData } from './mockData';

const SolutionDeliverSection = () => (
  <section className="section-space light-bg solution-deliver-section">
    <div className="container">
      <div className="row mb-4 mb-lg-0">
        <div className="col-lg-9 col-md-8">
          <h2>Solutions we deliver</h2>
          <div className="title-text">
            <p>
              We offer a broader spectrum of technology solutions to tick
              all the right boxes for our clients’ needs.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-3 text-md-right">
          <a
            title="Explore More Stories"
            className="btn"
            href="https://www.expertappdevs.com/portfolio"
          >
            Explore More Stories
          </a>
        </div>
      </div>
      <div className="row">
        {solutionsData.map((solution, index) => (
          <SolutionCard
            key={index}
            image={solution.image}
            alt={solution.alt}
            title={solution.title}
            description={solution.description}
            link={solution.link}
          />
        ))}
      </div>
    </div>
  </section>
);

export default SolutionDeliverSection;
