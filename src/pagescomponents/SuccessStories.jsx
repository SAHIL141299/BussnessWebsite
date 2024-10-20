// SuccessStories.js
import React from 'react';
import { successStories } from '../mockdata/AndroidAppDevelopmment';
// import { successStories } from './mockData';

const SuccessStories = () => {
  return (
    <section className="section-space success-stories-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <h2>Success stories</h2>
            <div className="title-text">
              <p>
                Our success is marked by the hard work and expertise of our
                expert professionals. Read on to learn about our success
                story.
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
          {successStories.map((story) => (
            <div className="col-lg-4 col-md-6 portfolio_div" key={story.id} data-url={story.url}>
              <div className="card stories-box">
                <a className="card-img" href={story.url}>
                  <img
                    className="card-img-top"
                    src={story.imgSrc}
                    alt={story.altText}
                    title={story.altText}
                    width="401"
                    height="812"
                  />
                </a>
                <div className="card-body">
                  <span className="h6">
                    <span className="icon icon-calendar"></span>
                    {story.description}
                  </span>
                  <h3>
                    <a href={story.url}>{story.title}</a>
                  </h3>
                  <div className="tags">
                    <ul>
                      {story.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="overlay">
                  <div className="card-body">
                    <h6>
                      <span className="icon icon-calendar"></span>
                      {story.description}
                    </h6>
                    <h4>
                      <a href={story.url}>{story.title}</a>
                    </h4>
                    <div className="tags-list">
                      <ul>
                        {Object.entries(story.details).map(([key, value], index) => (
                          <li key={index}>
                            <span>{key}</span>
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a className="btn" href={story.url} style={{ minWidth: "100px" }}>
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
