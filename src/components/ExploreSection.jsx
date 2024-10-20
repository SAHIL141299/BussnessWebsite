import React from "react";
// import './ExploreSection.css'; // Import the CSS file

const ExploreSection = () => {
  return (
    <section className="explore-section position-relative">
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <h2>Hire The Top App Developer from India</h2>
            <div className="title-text">
              <p>
                Our squad possesses experience in fulfilling the intended goals and shape ideas in accordance with market demand.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {exploreData.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="inner-explore-box position-relative">
                <div
                  className="img-wrap mb-3 wow fadeInDown"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <img
                    src={item.blackIcon}
                    alt={item.altBlack}
                    title={item.titleBlack}
                    className="black-icon"
                    width="100"
                    height="100"
                  />
                  <img
                    src={item.whiteIcon}
                    alt={item.altWhite}
                    title={item.titleWhite}
                    className="white-icon"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="pattern-wrap">
                  <img
                    src="https://www.expertappdevs.com/front/images/e-dots.png"
                    alt="hire dedicated mobile app developers from india"
                    title="hire dedicated mobile app developers from india"
                    width="116"
                    height="116"
                  />
                </div>
                <a href={item.link}>
                  <h4 className="mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </a>
                <div className="arrow-blue">
                  <a href={item.link} title={item.title}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15">
                      <path
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container our_achivement">
            <div className="row">
                <div className="col-12">
                    <h2>Our Achievement</h2>
                    <div className="title-text">
                        {/* Uncomment the paragraph if needed */}
                        {/* <p>We don't simply create apps; we create tools to help you grow your business. We provide high-quality apps all over the world.</p> */}
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/clutch.png" alt="Top B2B Companies Global 2018 by Clutch" title="Top B2B Companies Global 2018 by Clutch" width="177" height="136" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/App-Development-Companies-USA.webp" title="Top Rated App Development Companies USA by Softwareworld" alt="Top Rated App Development Companies USA by Softwareworld" width="140" height="140" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} width="177" height="136" src="https://www.expertappdevs.com/front/images/app-development.svg" alt="Top Mobile App Development Company by goodfirms" title="Top Mobile App Development Company by goodfirms" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/mobile-app-development-companies-round-badge.webp" alt="Top Mobile App Development Company by Top Firms" title="Top Mobile App Development Company by Top Firms" width="140" height="140" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/w_s_top_mobile_dev_black_text.svg" alt="Top Mobile App Developers" title="Top Mobile App Developers" width="140" height="140" />
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/accredited-agency.png" alt="Top Mobile App Design Development Company in Arizona Phoenix by  Designrush" title="Top Mobile App Design Development Company in Arizona Phoenix by  Designrush" height="126" width="127" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} width="177" height="136" src="https://www.expertappdevs.com/front/images/badge-top-app-company.webp" alt="Top App Development Company by appfutura" title="Top App Development Company by appfutura" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} width="177" height="136" src="https://www.expertappdevs.com/front/images/provenexpert-logo-with-claim.webp" alt="Proven Expert" title="Proven Expert" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/top-mobileapp-development-companies_Badge6.svg" title="Top Mobile App Development Company by Techimply" alt="Top Mobile App Development Company by Techimply" width="140" height="140" />
                </div>
                <div className="col-md-2 text-center my-4 col-6 wow fadeInDown" data-wow-delay="0.2s" data-wow-duration="1s">
                    <img style={{ maxHeight: '140px' }} src="https://www.expertappdevs.com/front/images/verified-256-b.svg" width="177" height="136" alt="10seos" title="10seos" />
                </div>
            </div>
        </div>
    </section>
  );
};

const exploreData = [
  {
    blackIcon: "https://www.expertappdevs.com/front/images/mobile.png",
    whiteIcon: "https://www.expertappdevs.com/front/images/white-mobile.png",
    altBlack: "impactful mobile app development services",
    titleBlack: "impactful mobile app development services",
    altWhite: "high-quality mobile app development services",
    titleWhite: "high-quality mobile app development services",
    link: "https://www.expertappdevs.com/mobile-app-development",
    title: "Mobile App Development",
    description: "Our mobile app development company services assist to drive a digital process and model, which in turn reduces retail costs and increases profitability."
  },
  {
    blackIcon: "https://www.expertappdevs.com/front/images/android_new.png",
    whiteIcon: "https://www.expertappdevs.com/front/images/white-android_new.png",
    altBlack: "custom android app development services",
    titleBlack: "custom android app development services",
    altWhite: "futuristic android app development services",
    titleWhite: "futuristic android app development services",
    link: "https://www.expertappdevs.com/android-app-development-services",
    title: "Android App Development",
    description: "Our tech-obsessed Android mobile app developers are always here to help you create dependable, perfect, and effective Android apps. Our sleek and smooth apps are performance and speed optimized across many platforms with our android app experts."
  },
  {
    blackIcon: "https://www.expertappdevs.com/front/images/apple-alt.png",
    whiteIcon: "https://www.expertappdevs.com/front/images/white-apple-alt.png",
    altBlack: "user centric iphone app development services",
    titleBlack: "user centric iphone app development services",
    altWhite: "native iphone app development services",
    titleWhite: "native iphone app development services",
    link: "https://www.expertappdevs.com/iphone-app-development-services",
    title: "iPhone App Development",
    description: "You'd want to collaborate with a mobile app development company in USA, UK, Canada, Australia, Middle East, and Europe from India that has extensive expertise in developing iPhone and iPad apps."
  },
  {
    blackIcon: "https://www.expertappdevs.com/front/images/gamepad.png",
    whiteIcon: "https://www.expertappdevs.com/front/images/white-gamepad.png",
    altBlack: "user centric iphone app development services",
    titleBlack: "user centric iphone app development services",
    altWhite: "native iphone app development services",
    titleWhite: "native iphone app development services",
    link: "https://www.expertappdevs.com/iphone-app-development-services",
    title: "Mobile Game Development",
    description: "We design technologies and platforms that improve performance, allow access to more features, and produce demonstrable outcomes. Our worldwide team will lead, create, and execute people-inspired technical and architectural decisions."
  },
  {
    blackIcon: "https://www.expertappdevs.com/front/images/cloud.png",
    whiteIcon: "https://www.expertappdevs.com/front/images/white-cloud.png",
    altBlack: "user centric iphone app development services",
    titleBlack: "user centric iphone app development services",
    altWhite: "native iphone app development services",
    titleWhite: "native iphone app development services",
    link: "https://www.expertappdevs.com/iphone-app-development-services",
    title: "IoT Application Development",
    description: "We provide top IoT services to assist businesses and organizations throughout the world in realizing the many benefits of IoT. We have expertise in combining edge devices, gateways, and cloud platforms to provide a precisely built IoT ecosystem that allows enterprises to maximize revenues."
  },
  {
    blackIcon: "https://www.expertappdevs.com/front/images/mobile-alt.png",
    whiteIcon: "https://www.expertappdevs.com/front/images/white-mobile-alt.png",
    altBlack: "user centric iphone app development services",
    titleBlack: "user centric iphone app development services",
    altWhite: "native iphone app development services",
    titleWhite: "native iphone app development services",
    link: "https://www.expertappdevs.com/iphone-app-development-services",
    title: "Cross Platform Mobile App Development",
    description: "Our expertise in developing cross-platform mobile apps and online experiences utilizing industry standard technologies such as HTML5, CSS3, and JavaScript for mobile applications and flexible and adaptable approaches for websites is unrivaled in the market."
  }
  // Add more data items as needed...
];

export default ExploreSection;
