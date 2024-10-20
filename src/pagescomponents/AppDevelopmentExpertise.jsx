// AppDevelopmentExpertise.js

import platformsData from "../mockdata/AndroidAppDevelopmment";

// import platformsData from './platformsData';

const AppDevelopmentExpertise = () => {
  return (
    <section className="section-space light-bg expertise-section">
      <div className="container">
        <h2 className="mb-4 mb-md-4">Android App Development Services Expertise</h2>
        <div className="row flex-wrap align-items-center app-dev-list">
          {platformsData.map((platform, index) => (
            <div className="icon" key={index}>
              <a
                title={platform.title}
                className="platforms-logo"
                href={platform.href}
              >
                <img
                  src={platform.imgSrc}
                  alt={platform.imgAlt}
                  title={platform.imgTitle}
                  width="58"
                  height="58"
                />
                <span>{platform.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentExpertise;
