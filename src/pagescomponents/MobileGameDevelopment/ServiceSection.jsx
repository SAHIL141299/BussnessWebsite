import React from 'react';

const ServiceSection = ({ data }) => {
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
                      <li className="breadcrumb-item">
                        <a title="Home" href="https://www.expertappdevs.com">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        {data.title}
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-lg-12">
                  <h1>{data.title}</h1>
                </div>
                <div className="col-lg-12">
                  <div className="title-text">
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-block">
              <img
                src={data.imageUrl}
                alt={data.title}
                title={data.title}
                width="610"
                height="517"
              />
            </div>
          </div>
        </div>
        <div className="service-experience-info" id="counter">
          <div className="row">
            {data.experience.map((item, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div className="info-box">
                  <strong className="count">
                    <span className="counter-value" data-count={item.count}>{item.count}</span>+
                  </strong>
                  <span className="info-text">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
