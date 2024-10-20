import React from 'react';
import { mobileGameDevelopmentData } from '../../mockdata/MobileGameDevelopment';
// import { mobileGameDevelopmentData } from './mockData'; // Adjust the path as necessary

const MobileGameDevelopmentHeading = ({ data }) => {
  return (
    <section className="sub-heading light-bg service-title-section">
      <div className="container">
        <div className="row align-items-lg-center mb-4">
          <div className="col-lg-6 pb-4 pb-lg-0">
            <div className="content-block">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      {mobileGameDevelopmentData.breadcrumb.map((item, index) => (
                        <li
                          key={index}
                          className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                          aria-current={item.active ? 'page' : undefined}
                        >
                          {item.active ? item.title : <a href={item.link}>{item.title}</a>}
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
                <div className="col-lg-12">
                  <h1>{mobileGameDevelopmentData.title}</h1>
                </div>
                <div className="col-lg-12">
                  <div className="title-text">
                    <p>{mobileGameDevelopmentData.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-block">
              <img
                src={mobileGameDevelopmentData.image.src}
                alt={mobileGameDevelopmentData.image.alt}
                title={mobileGameDevelopmentData.image.title}
                width={mobileGameDevelopmentData.image.width}
                height={mobileGameDevelopmentData.image.height}
              />
            </div>
          </div>
        </div>
        <div className="service-experience-info" id="counter">
          <div className="row">
            {mobileGameDevelopmentData.stats.map((stat, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="info-box">
                  <strong className="count">
                    <span className="counter-value" data-count={stat.value}>{stat.value}</span>+
                  </strong>
                  <span className="info-text">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Set default props if necessary
// MobileGameDevelopment.defaultProps = {
//   data: mobileGameDevelopmentData,
// };

export default MobileGameDevelopmentHeading;
