import React from "react";
import ServiceTitleSection from "../components/ServiceTitleSection";
import { breadcrumbLinks, stats } from "../mockdata/AndroidAppDevelopmment";
import TestimonialSection from "../pagescomponents/Testimonial";
import SolutionDeliverSection from "../pagescomponents/SolutionDeliverSection";
import CallToActionContainer from "../pagescomponents/CallToActionContainer";
import WhyUsSection from "../pagescomponents/WhyUsSection";
import SuccessStories from "../pagescomponents/SuccessStories";
import CTASection from "../pagescomponents/CTASectionQuete";
import IndustrySection from "../pagescomponents/IndustrySection";
import FaqSection from "../pagescomponents/FaqSection";
import ClientBrandSlider from "../pagescomponents/ClientBrandSlider";
import CTASectionQuete from "../pagescomponents/CTASectionQuete";
import CtaSectionProject from "../pagescomponents/CtaSectionProjects";
import CTASectionProjectBox from "../pagescomponents/CTASectionProjectBox";

const AndroidAppDevelopment = () => {

  return (
    <>
    <ServiceTitleSection
            breadcrumbLinks={breadcrumbLinks}
            title="Android App Development Services"
            description="Efficient, reliable, high-performance and scalable Android app development that drives engagement and pulls in more sales for your business."
            imageSrc="https://www.expertappdevs.com/sitebucket/service/20230530044936_best-android-app-development-services-company-in-india.webp"
            imageAlt="android app development services"
            imageTitle="android app development services"
            stats={stats}
        />
      {/* <section class="section-space primary-bg hire-testimonial-section">
        <div class="container">
          <div class="row align-items-center why-hire">
            <div class="col-lg-8 pb-5 pb-lg-0">
              <div class="middle-content">
                <h2>
                  End-to-end, impressive, and robust android app development
                  services
                </h2>
                <div class="title-text">
                  <p>
                    Having a robust, feature-rich, and functional Android app
                    can bring many benefits to you. While maintaining seamless
                    experiences across platforms, businesses need simple,
                    competent, and intuitive Android solutions to drive more
                    engagement and sales. You need a custom&nbsp;Android app
                    development services&nbsp;provider to develop a
                    business-oriented Android app for you.
                  </p>

                  <p>
                    Expert App Devs is a leading Android app development company
                    that provides end-to-end and robust solutions catering to
                    your business needs. We deliver results-driven and
                    cost-efficient solutions to maximize your revenue by
                    incorporating the latest technologies (
                    <a
                      href="https://www.expertappdevs.com/ai-ml-development-services"
                      target="_blank"
                      title="ai app development services"
                    >
                      <strong>AI/ML</strong>
                    </a>
                    ,&nbsp;
                    <a
                      href="https://www.expertappdevs.com/technologies/vr-app-development"
                      target="_blank"
                      title="vr app development services"
                    >
                      <strong>VR</strong>
                    </a>
                    ) with high-end security frameworks (AI, ML, VR). Our
                    Android experts stay updated with the latest Android trends
                    and updates to practice them in real-time development
                    scenarios.
                  </p>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire dedicated android developers
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="swiper-container testimonials-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div
                  class="swiper-wrapper"
                  id="swiper-wrapper-58f2bc2cdf739231"
                  aria-live="off"
                  style={{transitionDuration: "1000ms", transform: "translate3d(-808px, 0px, 0px)" }}
                >
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 2"
                    style= {{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        I am very happy with the final product from the solution
                        as well as support and service from Expert App Devs.
                        They also covered the latest OS updates for Android and
                        iOS apps in the final product! Thank you to the team!
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Harlie X.</strong>
                          Healthcare CFO, Phoenix
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 2"
                    style= {{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        The team of android app developers is skilled in android
                        development on the Android platform as well as
                        cross-platform, delivering high-quality apps. Highly
                        recommended android developers because their aim turning
                        in the best possible results.
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Justin Rath</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 2"
                    style= {{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        I am very happy with the final product from the solution
                        as well as support and service from Expert App Devs.
                        They also covered the latest OS updates for Android and
                        iOS apps in the final product! Thank you to the team!
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Harlie X.</strong>
                          Healthcare CFO, Phoenix
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 2"
                    style= {{width: "380px", marginRight: "24px"}}
                  >
                    <div class="testimonials-box">
                      <p>
                        The team of android app developers is skilled in android
                        development on the Android platform as well as
                        cross-platform, delivering high-quality apps. Highly
                        recommended android developers because their aim turning
                        in the best possible results.
                      </p>
                      <div class="start-review d-flex">
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        <i class="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                      </div>
                      <div class="user-say">
                        <span class="user-info">
                          <strong>Justin Rath</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <TestimonialSection />
      <section class="explore-services section-space">
        <div class="container">
          <div class="row">
            <div class="col-12 pb-4 mb-2">
              <h2>Creating Endless Opportunities for your Business</h2>
              <div class="title-text">
                <p>
                  We inspire creativity and translate your vision into
                  mission-critical solutions with best practices, an experienced
                  team of <strong> best mobile app developers</strong> and
                  exceptional support.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="explore-service-block">
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">
                    Custom android app development services
                  </h3>
                  <p>
                    Developing Android apps is not just enough. Sluggish
                    performance, low data-handling capacity, and high
                    maintenance can make these solutions inefficient for your
                    business. Moreover, you will notice they don't sit well with
                    the devices and markets you aim to penetrate. You need to
                    have a robust, tailor-made, and highly efficient Android app
                    that serves the core business purposes and goals.
                  </p>

                  <p>
                    Expert App Devs'&nbsp;
                    <strong>custom Android app development services</strong>
                    &nbsp;bridge the gap between your needs and the
                    off-the-shelf solution. Taking your security, integration,
                    and scalability requirements, we deliver solutions that can
                    manage heavy loads and enhance experiences. Our
                    unmatched&nbsp;
                    <a
                      href="https://www.expertappdevs.com/technologies/android-app-solution"
                      target="_blank"
                      title="android app solution"
                    >
                      Android app solutions
                    </a>
                    &nbsp;increase conversions and improve your returns.
                  </p>

                  <ul>
                    <li>Ideation and planning</li>
                    <li>Design and development</li>
                    <li>Full-cycle Android app development</li>
                    <li>Testing and QA</li>
                    <li>Support and Maintenance</li>
                    <li>App deployment</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire android app developers
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530053015_custom-android-app-development-services.webp"
                    alt="custom android app development services"
                    title="custom android app development services"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">
                    Android application UI/UX design services
                  </h3>
                  <p>
                    A cluttered interface, poor navigation, and multiple device
                    unfriendliness can put off your potential customer. Not
                    defining the movement of the customer on your application
                    can lead to increased confusion and attrition for your
                    business. User experience is a vital parameter that defines
                    the success of your application.
                  </p>

                  <p>
                    Expert App Devs is a leading Android application&nbsp;
                    <strong>UI/UX design services</strong>&nbsp;company in the
                    USA. With structured architecture, proper interface layouts,
                    and a defined hierarchy, we aim to help customers move
                    through the application seamlessly.{" "}
                    <a
                      href="https://www.expertappdevs.com/hire-android-developers-india"
                      title="Hire Android Developers"
                    >
                      Hire android app developers
                    </a>
                    &nbsp;from Expert App Devs who can drive similar experiences
                    irrespective of device or resolution to ensure delighted
                    end-users will turn into loyalists. With consistent
                    interface solutions and usable interfaces, we maximize
                    conversions and revenue.
                  </p>

                  <ul>
                    <li>Architecture</li>
                    <li>Solid UI/UX</li>
                    <li>Frontend and backend development</li>
                    <li>Powerful technology stack</li>
                    <li>Appealing designs</li>
                    <li>Tailor-made solutions</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire android app designers
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530044936_android-mobile-app-development-services.webp"
                    alt="android application ui/ux design services"
                    title="android application ui/ux design services"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">
                    Android app wireframes &amp; prototypes
                  </h3>
                  <p>
                    Diving right into mobile app design and creating a structure
                    can be overwhelming. Information architecture and app layout
                    can take a back seat with all the visual elements to think
                    through. Not paying attention to the movement within the
                    application can reduce your app's experience and engagement.
                    Wireframes are the first step to design as they help
                    visually represent the layout, structure, and skeleton of
                    the app.
                  </p>

                  <p>
                    As a leading Android app wireframe and prototypes service
                    provider, Expert App Devs uses the latest tools and
                    technologies to build the layout and architecture. We have
                    an end-to-end process that starts with a requirements study
                    and ends with approvals. With a clear vision for your app
                    and a fully-defined structure, we aim to improve the design
                    interfaces and improve experiences. Hire our&nbsp;
                    <strong>
                      native Android application development experts
                    </strong>
                    &nbsp;now.
                  </p>

                  <ul>
                    <li>Android prototyping</li>
                    <li>Android mockups and wireframes</li>
                    <li>High-fidelity designs</li>
                    <li>Mobile app wireframe</li>
                    <li>Robust UI/UX</li>
                    <li>App ideation</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire expert development team
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530044936_android-app-development-services-company.webp"
                    alt="android app wireframes &amp; prototypes"
                    title="android app wireframes &amp; prototypes"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">
                    Testing integrations and debugging services
                  </h3>
                  <p>
                    Is your application ready for the market? Can it be accessed
                    across devices without any issues? If these questions are
                    swirling in your mind, it is best to test your application
                    thoroughly before beginning the launch phase. You can check
                    if your app is usable on different devices and fix the
                    issues immediately with quality testing solutions. Testing
                    in-house can be tedious and time-consuming, delaying the
                    launch.
                  </p>

                  <p>
                    That's where Expert App Devs can help you. With an offshore
                    team of QA experts, we offer testing, integration, and
                    debugging services that can check for the usability and
                    functionality of your feature-driven Android app solutions.
                    We also conduct load testing and performance testing to
                    check for slow startup and scalability with our capable
                    team.
                  </p>

                  <ul>
                    <li>Bug fixing and enhancement</li>
                    <li>Performance optimization</li>
                    <li>Quality testing and Security&nbsp;</li>
                    <li>Quality assurance</li>
                    <li>Seamless integrations</li>
                    <li>Preventive maintenance</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire android app testers
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530044936_Testing-integrations-and-debugging-service.webp"
                    alt="testing integrations and debugging services"
                    title="testing integrations and debugging services"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">Delivery launch support</h3>
                  <p>
                    At Expert App Devs, we understand the importance of
                    launching your app for your business. Therefore, we channel
                    all our efforts into performing it in the best possible
                    manner. We remove all the existing bugs in the testing phase
                    of our{" "}
                    <a
                      href="https://www.expertappdevs.com/blog/top-5-mobile-app-development-companies-in-india"
                      target="_blank"
                    >
                      mobile app development company
                    </a>
                    . Thereafter, we take a close look at the functioning of
                    your apps with a critical eye. If everything else looks
                    fine, we submit it to Google Play Store.
                  </p>

                  <p>
                    Worried if your app is ready to be launched or not? Leave it
                    to us! Right from your Android app ideation to its
                    deployment, you can rely on our impeccable support.
                  </p>

                  <ul>
                    <li>Top-notch performance supervision</li>
                    <li>Testing and debugging</li>
                    <li>Quality assurance</li>
                    <li>App deployment in the Play Store</li>
                    <li>Technical support</li>
                    <li>Store management and monitoring</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire custom android app developers
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530044936_best-android-app-development-services.webp"
                    alt="delivery launch support"
                    title="delivery launch support"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">Maintenance and long-term improvement</h3>
                  <p>
                    Deploying the app is just the beginning. The real job starts
                    after that. You will need to make minor upgrades regularly
                    to make the app more user-friendly and optimized. Patch
                    uploads, system updates, and even incorporating feedback to
                    make the app more client-centric become necessary. You
                    cannot rule out the need for new feature development and
                    maintenance of the existing systems.
                  </p>

                  <p>
                    Your IT team may not be fully equipped to handle all your
                    long-term support needs. Hiring resources to manage these
                    tasks can be expensive. Expert App Devs offer a more
                    cost-efficient and resource-driven way for&nbsp;mobile app
                    support and&nbsp;maintenance&nbsp;with long-term improvement
                    services. Hire our best android app development services for
                    support and maintenance of your Android app.
                  </p>

                  <ul>
                    <li>24/7 assistance</li>
                    <li>Maintenance and monitoring</li>
                    <li>Code audit</li>
                    <li>App migration</li>
                    <li>App integration</li>
                    <li>Top-quality performance</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire technical support and maintenance team
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530044936_android-app-development.webp"
                    alt="maintenance and long-term improvement"
                    title="maintenance and long-term improvement"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
            <div class="row align-items-lg-center">
              <div class="col-lg-8 explor-content-col ">
                <div class="content-block">
                  <h3 class="heading">Hire android app developers</h3>
                  <p>
                    Having an Android app for your business can unlock many
                    opportunities for you. A highly innovative and data-driven
                    app that is tailored to your business requirements can help
                    increase customer engagement and revenues. All you need to
                    do is to{" "}
                    <a
                      href="https://www.expertappdevs.com/hire-android-developers-india"
                      title="Hire Android App Developer India"
                    >
                      hire Android app developer
                    </a>{" "}
                    from Expert App Devs to fulfil your resource, expertise, and
                    infrastructure needs.
                  </p>

                  <p>
                    With our flexible engagement models and years of experience,
                    we offer capable and highly engaging&nbsp;
                    <a
                      href="https://www.expertappdevs.com/blog/steps-to-outsource-mobile-app-development-successfully"
                      target="_blank"
                    >
                      outsourcing app development&nbsp;solutions
                    </a>{" "}
                    for your business needs. Our well-defined project management
                    processes and higher commitment levels ensure we deliver
                    quality and timely app development agencies' solutions.
                  </p>

                  <ul>
                    <li>Pocket-friendly rates</li>
                    <li>Highly cost-effective</li>
                    <li>No language barrier</li>
                    <li>Agile and adaptive development</li>
                    <li>Skilled resources</li>
                    <li>Flexibility and scalability</li>
                  </ul>
                  <div>
                    <a
                      class="btn btn-danger"
                      href="https://www.expertappdevs.com/contact-us"
                    >
                      Hire android app developers
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 explor-image-col pb-5 pb-lg-0">
                <div class="image-block">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530044936_hire-android-app-developers.webp"
                    alt="hire android app developers"
                    title="hire android app developers"
                    width="350"
                    height="375"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="section-space light-bg solution-deliver-section">
        <div class="container">
          <div class="row mb-4 mb-lg-0">
            <div class="col-lg-9 col-md-8">
              <h2>Solutions we deliver</h2>
              <div class="title-text">
                <p>
                  We offer a broader spectrum of technology solutions to tick
                  all the right boxes for our clients’ needs.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-3 text-md-right">
              <a
                title="Explore More Stories"
                class="btn"
                href="https://www.expertappdevs.com/portfolio"
              >
                Explore More Stories
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 pb-5 pb-lg-0">
              <div class="solution-card">
                <div class="img-box">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/solution/service-provider-solution.webp"
                    alt="service provider solution"
                    title="service provider solution"
                    width="380"
                    height="285"
                  />
                </div>
                <div class="content-box">
                  <h3 class="heading">Service Provider Solution</h3>
                  <p class="short-desc">
                    Do you have an idea that can transform the world of service
                    providers? Want to help a handyman enjoy...
                  </p>
                  <a
                    title="Read More"
                    class="btn"
                    href="https://www.expertappdevs.com/solutions/service-provider-solution"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
              <div class="solution-card">
                <div class="img-box">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/solution/shoping-banner.webp"
                    alt="ecommerce app solution"
                    title="ecommerce app solution"
                    width="380"
                    height="285"
                  />
                </div>
                <div class="content-box">
                  <h3 class="heading">Ecommerce App Solution</h3>
                  <p class="short-desc">
                    Want to increase the visibility of your store? Are you
                    looking to shift your retail outlet to a mobi...
                  </p>
                  <a
                    title="Read More"
                    class="btn"
                    href="https://www.expertappdevs.com/solutions/ecommerce-app-solution"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
              <div class="solution-card">
                <div class="img-box">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/solution/food-delivery-app.webp"
                    alt="food delivery solution"
                    title="food delivery solution"
                    width="380"
                    height="285"
                  />
                </div>
                <div class="content-box">
                  <h3 class="heading">Food Delivery Solution</h3>
                  <p class="short-desc">
                    Are you into food delivery? Do you want to create an
                    on-demand delivery service for your restaurant ...
                  </p>
                  <a
                    title="Read More"
                    class="btn"
                    href="https://www.expertappdevs.com/solutions/food-delivery-solution"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <SolutionDeliverSection />
      {/* <section class="section-space cta-section get-demo pb-0">
        <div class="container">
            <div class="row rounded lets-talk p-md-5 p-3 m-0 mt-5">
                <div class="col-md-12 p-3">
                    <div class="row inner align-items-center">
                        <div class="col-lg-8 col-md-7 mt-3 mb-3">
                            <h3>Have a mobile app development </h3>
                            <span>challenge to address?</span>
                        </div>
                        <div class="col-lg-4 col-md-5 mt-3 mb-3 text-md-right">
                            <a title="Contact Us" class="btn btn-danger" href="https://www.expertappdevs.com/contact-us">We love to
                                hear from you</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
     <CallToActionContainer />
      {/* <section class="section-space why-us-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>
                Why partner with Expert App Devs for android application
                development services?
              </h2>
            </div>
          </div>
          <div class="row justify-content-center why-mobiletech mt-3">
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Cutting Edge Technology">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20220309031324_Full-Spectrum_icon.png"
                    alt="cutting edge technology"
                    title="cutting edge technology"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Cutting Edge Technology</h3>
                <p>
                  We have invested in the apt tools, technology and
                  infrastructure that can help our team offer quality,
                  high-performing and secure solutions.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Build-to-test Models">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20220309031324_Flexible.png"
                    alt="build-to-test models"
                    title="build-to-test models"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Build-to-test Models</h3>
                <p>
                  Achieving quicker and bug-free deployments by ensuring
                  seamless collaboration between testing and coding teams during
                  the app development.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Security-first Applications">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20220309031324_Complete.png"
                    alt="security-first applications"
                    title="security-first applications"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Security-first Applications</h3>
                <p>
                  With the fragmented layers and open-source nature of the code,
                  we aim to enhance the security layers to develop reliable apps
                  that aren’t vulnerable to hackers.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="UX-led Approach">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230530045835_Timely.webp"
                    alt="ux-led approach"
                    title="ux-led approach"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>UX-led Approach</h3>
                <p>
                  Defining seamless experiences across Android devices and form
                  factors with a user experience-first approach that allows us
                  to create interactive interfaces and personalized Android UI
                  design approaches.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Robust Architecture">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230228095525_robust-architecture.svg"
                    alt="robust architecture"
                    title="robust architecture"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Robust Architecture</h3>
                <p>
                  As a leading Android application development company, our
                  skilled android app developers understand security
                  vulnerabilities and define the best standards and security
                  layering to achieve reliable and robust Android app structure.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Full Transparency">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230228095525_full-transparency.svg"
                    alt="full transparency"
                    title="full transparency"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Full Transparency</h3>
                <p>
                  We maintain 100% transparency with our clients through the
                  Android app development process by sending out weekly reports,
                  data-driven insights and recommendations to improve mobile app
                  development.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Skilled Android Developers">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230228095525_skilled-android-developers.svg"
                    alt="skilled android developers"
                    title="skilled android developers"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Skilled Android Developers</h3>
                <p>
                  Our Android developers are proficient with current
                  technologies, the latest trends and best development practices
                  to offer experiential and engaging mobile solutions.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6 col-12 mt-4">
              <div class="app-box" title="Flexible Hiring Models">
                <div class="icon">
                  <img
                    src="https://www.expertappdevs.com/sitebucket/service/20230228095525_flexible-hiring-models.svg"
                    alt="flexible hiring models"
                    title="flexible hiring models"
                    width="64"
                    height="64"
                  />
                </div>
                <h3>Flexible Hiring Models</h3>
                <p>
                  We offer flexible and unique engagement models that meet your
                  unique business requirements. You can choose between hourly
                  hiring and dedicated development teams for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <WhyUsSection />
      {/* <section class="section-space light-bg expertise-section">
        <div class="container">
          <h2 class="mb-4 mb-md-4">
            Android App Development Services Expertise
          </h2>
          <div class="row flex-wrap align-items-center app-dev-list">
            <div class="icon">
              <a
                title="iOS App Development Company in USA"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/ios-app-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20220202110619_imageiso.png"
                  alt="ios app development company in usa"
                  title="ios app development company in usa"
                  width="58"
                  height="58"
                />
                <span>iOS </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="React Native App Development Services"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/react-native"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201206120325_imagereact-native.png"
                  alt="react native app development services"
                  title="react native app development services"
                  width="58"
                  height="58"
                />
                <span>React Native </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Android App Solution"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/android-app-solution"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20220202110821_imageandroid.png"
                  alt="android app solution"
                  title="android app solution"
                  width="58"
                  height="58"
                />
                <span>Android </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Flutter App Development Company for Web, Mobile, and Desktop"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/flutter-app-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201207073739_imageflutter.png"
                  alt="flutter app development company for web, mobile, and desktop"
                  title="flutter app development company for web, mobile, and desktop"
                  width="58"
                  height="58"
                />
                <span>Flutter </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Unity 3D Game Development Services"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/unity-3d-game-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20230530054133_imageimagehire-unity-game-developers-in-india.webp"
                  alt="unity 3d game development services"
                  title="unity 3d game development services"
                  width="58"
                  height="58"
                />
                <span>Unity 3D </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="ASP.NET Development Services company India"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/asp-dot-net-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20230530054106_imageimageasp-dot-net-logo.webp"
                  alt="asp.net development services company india"
                  title="asp.net development services company india"
                  width="58"
                  height="58"
                />
                <span>ASP.NET </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Python Development Company"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/python-development-company"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20220202111016_imagepaython.png"
                  alt="python development company"
                  title="python development company"
                  width="58"
                  height="58"
                />
                <span>Python </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Xamarin App Development Company India"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/xamarin-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201207083105_imagexamarin.png"
                  alt="xamarin app development company india"
                  title="xamarin app development company india"
                  width="58"
                  height="58"
                />
                <span>Xamarin </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Wearable Device Apps Development"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/wearable-apps-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201207085032_imagewearable-app.png"
                  alt="wearable device apps development"
                  title="wearable device apps development"
                  width="58"
                  height="58"
                />
                <span>Wearable Devices App </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Chromecast Application Development"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/chromecast-app-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201207095441_imagechromecast.png"
                  alt="chromecast application development"
                  title="chromecast application development"
                  width="58"
                  height="58"
                />
                <span>Chromecast </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="iBeacon App Development Company"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/ibeacon-app-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201207101159_imageibeacon.png"
                  alt="ibeacon app development company"
                  title="ibeacon app development company"
                  width="58"
                  height="58"
                />
                <span>iBeacon </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="AR Development Company in India"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/augmented-reality"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201208092327_imageaugmented-reality.png"
                  alt="ar development company in india"
                  title="ar development company in india"
                  width="58"
                  height="58"
                />
                <span>AR App </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="VR Application Development"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/vr-app-development"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201208094547_imagevirtual-reality.png"
                  alt="vr application development"
                  title="vr application development"
                  width="58"
                  height="58"
                />
                <span>VR App </span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Ionic App Development"
                class="platforms-logo"
                href="https://www.expertappdevs.com/technologies/ionic-app-development-company"
              >
                <img
                  src="https://www.expertappdevs.com/sitebucket/technology/20201207075653_imageionic.png"
                  alt="ionic app development"
                  title="ionic app development"
                  width="58"
                  height="58"
                />
                <span>IONIC </span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section class="section-space success-stories-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-8">
              <h2>Success stories</h2>
              <div class="title-text">
                <p>
                  Our success is marked by the hard work and expertise of our
                  expert professionals. Read on to learn about our success
                  story.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-3 text-md-right">
              <a
                title="Explore More Stories"
                class="btn"
                href="https://www.expertappdevs.com/portfolio"
              >
                Explore More Stories
              </a>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-4 col-md-6 portfolio_div"
              data-url="https://www.expertappdevs.com/portfolio/ai-powered-pdf-creation-web-app"
            >
              <div class="card stories-box">
                <a
                  class="card-img"
                  href="https://www.expertappdevs.com/portfolio/ai-powered-pdf-creation-web-app"
                >
                  <img
                    class="card-img-top"
                    src="https://www.expertappdevs.com/sitebucket/portfolio/20240604140652-image-ai-powered-pdf-development-app.png"
                    alt="ai pdf creator: simplifying document creation"
                    title="ai pdf creator: simplifying document creation"
                    width="401"
                    height="812"
                  />
                </a>
                <div class="card-body">
                  <span class="h6">
                    <span class="icon icon-calendar"></span>Business
                  </span>
                  <h3>
                    <a href="https://www.expertappdevs.com/portfolio/ai-powered-pdf-creation-web-app">
                      AI PDF Creator: Simplifying Document Creation
                    </a>
                  </h3>
                  <div class="tags">
                    <ul>
                      <li>Flutter</li>
                      <li>JavaScript (Node.js), Dart</li>
                    </ul>
                  </div>
                </div>
                <div class="overlay">
                  <div class="card-body">
                    <h6>
                      <span class="icon icon-calendar"></span>Business
                    </h6>
                    <h4>
                      <a href="https://www.expertappdevs.com/portfolio/ai-powered-pdf-creation-web-app">
                        AI PDF Creator: Simplifying Document Creation
                      </a>
                    </h4>
                    <div class="tags-list">
                      <ul>
                        <li>
                          <span>Platform</span>
                          <span>Flutter</span>
                        </li>
                        <li>
                          <span>Programming Language</span>
                          <span>JavaScript (Node.js), Dart</span>
                        </li>
                        <li>
                          <span>Database</span>
                          <span>MongoDB</span>
                        </li>
                        <li>
                          <span>Tools</span>
                          <span>
                            React.js, TensorFlow.js, OpenCV, VS Code, Android
                            Studio, XCode
                          </span>
                        </li>
                      </ul>
                    </div>
                   
                    <a
                      class="btn"
                      href="https://www.expertappdevs.com/portfolio/ai-powered-pdf-creation-web-app"
                      style={{ minWidth: "100px" }}
                    >
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio_div"
              data-url="https://www.expertappdevs.com/portfolio/diet-nutrition-app-development"
            >
              <div class="card stories-box">
                <a
                  class="card-img"
                  href="https://www.expertappdevs.com/portfolio/diet-nutrition-app-development"
                >
                  <img
                    class="card-img-top"
                    src="https://www.expertappdevs.com/sitebucket/portfolio/20240528125646-image-diet-and-nutrition-app-development-company.png"
                    alt="fuel your body right with diet &amp; nutrition app"
                    title="fuel your body right with diet &amp; nutrition app"
                    width="401"
                    height="812"
                  />
                </a>
                <div class="card-body">
                  <span class="h6">
                    <span class="icon icon-calendar"></span>Education &amp;
                    Training
                  </span>
                  <h3>
                    <a href="https://www.expertappdevs.com/portfolio/diet-nutrition-app-development">
                      Fuel Your Body Right with Diet &amp; Nutrition App
                    </a>
                  </h3>
                  <div class="tags">
                    <ul>
                      <li>Android</li>
                      <li>Kotlin</li>
                    </ul>
                  </div>
                </div>
                <div class="overlay">
                  <div class="card-body">
                    <h6>
                      <span class="icon icon-calendar"></span>Education &amp;
                      Training
                    </h6>
                    <h4>
                      <a href="https://www.expertappdevs.com/portfolio/diet-nutrition-app-development">
                        Fuel Your Body Right with Diet &amp; Nutrition App
                      </a>
                    </h4>
                    <div class="tags-list">
                      <ul>
                        <li>
                          <span>Platform</span>
                          <span>Android</span>
                        </li>
                        <li>
                          <span>Programming Language</span>
                          <span>Kotlin</span>
                        </li>
                        <li>
                          <span>Database</span>
                          <span>PostgreSQL</span>
                        </li>
                        <li>
                          <span>Tools</span>
                          <span>Android Studio, Firebase</span>
                        </li>
                      </ul>
                    </div>
                   
                    <a
                      class="btn"
                      href="https://www.expertappdevs.com/portfolio/diet-nutrition-app-development"
                      style={{ minWidth: "100px" }}
                    >
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio_div"
              data-url="https://www.expertappdevs.com/portfolio/fitness-app-development"
            >
              <div class="card stories-box">
                <a
                  class="card-img"
                  href="https://www.expertappdevs.com/portfolio/fitness-app-development"
                >
                  <img
                    class="card-img-top"
                    src="https://www.expertappdevs.com/sitebucket/portfolio/20240524112428-image-fitness-app-development-company.png"
                    alt="track, train, transform with health &amp; fitness app"
                    title="track, train, transform with health &amp; fitness app"
                    width="401"
                    height="812"
                  />
                </a>
                <div class="card-body">
                  <span class="h6">
                    <span class="icon icon-calendar"></span>Education &amp;
                    Training
                  </span>
                  <h3>
                    <a href="https://www.expertappdevs.com/portfolio/fitness-app-development">
                      Track, Train, Transform with Health &amp; Fitness App
                    </a>
                  </h3>
                  <div class="tags">
                    <ul>
                      <li>iOS</li>
                      <li>Swift</li>
                    </ul>
                  </div>
                </div>
                <div class="overlay">
                  <div class="card-body">
                    <h6>
                      <span class="icon icon-calendar"></span>Education &amp;
                      Training
                    </h6>
                    <h4>
                      <a href="https://www.expertappdevs.com/portfolio/fitness-app-development">
                        Track, Train, Transform with Health &amp; Fitness App
                      </a>
                    </h4>
                    <div class="tags-list">
                      <ul>
                        <li>
                          <span>Platform</span>
                          <span>iOS</span>
                        </li>
                        <li>
                          <span>Programming Language</span>
                          <span>Swift</span>
                        </li>
                        <li>
                          <span>Database</span>
                          <span>MongoDB</span>
                        </li>
                        <li>
                          <span>Tools</span>
                          <span>Xcode, Firebase</span>
                        </li>
                      </ul>
                    </div>
                    <a
                      class="btn"
                      href="https://www.expertappdevs.com/portfolio/fitness-app-development"
                      style={{ minWidth: "100px" }}
                    >
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        <SuccessStories />
      {/* <section class="section-space cta-section free-quote">
        <div class="container">
          <div class="row rounded lets-talk p-md-5 p-3 m-0 mt-5">
            <div class="col-md-12 p-3">
              <div class="row inner align-items-center">
                <div class="col-lg-9 col-md-7 mt-3 mb-3">
                  <h3>Want to give your app idea the wings of reality?</h3>
                  <span>
                    Partner with us for end-to-end mobile app development
                    services.
                  </span>
                </div>
                <div class="col-lg-3 col-md-5 mt-3 mb-3 text-md-right">
                  <a
                    title="Contact Us"
                    class="btn btn-danger"
                    href="https://www.expertappdevs.com/contact-us"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <CTASection /> */}
      <CTASectionQuete />
      {/* <section class="section-space light-bg serve-various-industries-section">
        <div class="container">
      
          <h2 class="mb-3 mb-md-4">
            We cater our android software services for various industries
          </h2>
          <div class="row flex-wrap align-items-center app-dev-list five-icon">
            <div class="icon">
              <a title="Automotive" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_automotive.png"
                  alt="automotive"
                  title="automotive"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_automotive.png"
                  alt="automotive"
                  title="automotive"
                  width="80"
                  height="80"
                />
                <span>Automotive</span>
              </a>
            </div>
            <div class="icon">
              <a title="Job" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_job.png"
                  alt="job"
                  title="job"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_job.png"
                  alt="job"
                  title="job"
                  width="80"
                  height="80"
                />
                <span>Job</span>
              </a>
            </div>
            <div class="icon">
              <a title="Real Estate" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_real.png"
                  alt="real estate"
                  title="real estate"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_real.png"
                  alt="real estate"
                  title="real estate"
                  width="80"
                  height="80"
                />
                <span>Real Estate</span>
              </a>
            </div>
            <div class="icon">
              <a title="Hospitality" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_hosp.png"
                  alt="hospitality"
                  title="hospitality"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_hosp.png"
                  alt="hospitality"
                  title="hospitality"
                  width="80"
                  height="80"
                />
                <span>Hospitality</span>
              </a>
            </div>
            <div class="icon">
              <a title="Travel &amp; Tourism" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_travel.png"
                  alt="travel &amp; tourism"
                  title="travel &amp; tourism"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_travel.png"
                  alt="travel &amp; tourism"
                  title="travel &amp; tourism"
                  width="80"
                  height="80"
                />
                <span>Travel &amp; Tourism</span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Learning &amp; Education"
                class="platforms-logo a-platform"
              >
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_leaning.png"
                  alt="learning &amp; education"
                  title="learning &amp; education"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_leaning.png"
                  alt="learning &amp; education"
                  title="learning &amp; education"
                  width="80"
                  height="80"
                />
                <span>Learning &amp; Education</span>
              </a>
            </div>
            <div class="icon">
              <a
                title="Oil &amp; Natural Gas"
                class="platforms-logo a-platform"
              >
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_Oill.png"
                  alt="oil &amp; natural gas"
                  title="oil &amp; natural gas"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_Oill.png"
                  alt="oil &amp; natural gas"
                  title="oil &amp; natural gas"
                  width="80"
                  height="80"
                />
                <span>Oil &amp; Natural Gas</span>
              </a>
            </div>
            <div class="icon">
              <a title="Banking / Finance" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_banking.png"
                  alt="banking / finance"
                  title="banking / finance"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_banking.png"
                  alt="banking / finance"
                  title="banking / finance"
                  width="80"
                  height="80"
                />
                <span>Banking / Finance</span>
              </a>
            </div>
            <div class="icon">
              <a title="Dating" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_datingl.png"
                  alt="dating"
                  title="dating"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_datingl.png"
                  alt="dating"
                  title="dating"
                  width="80"
                  height="80"
                />
                <span>Dating</span>
              </a>
            </div>
            <div class="icon">
              <a title="Transport" class="platforms-logo a-platform">
                <img
                  class="black-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/indus_icon_transport.png"
                  alt="transport"
                  title="transport"
                  width="80"
                  height="80"
                />
                <img
                  class="white-icon"
                  src="https://www.expertappdevs.com/sitebucket/industry/white_indus_icon_transport.png"
                  alt="transport"
                  title="transport"
                  width="80"
                  height="80"
                />
                <span>Transport</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <IndustrySection />
      {/* <section class="section-space">
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-9">
              <h2>Mobile app development FAQs</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="accordion faq pb-4" id="accordionExample">
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading1">
                <a
                  class="btn-link d-block p-4 "
                  aria-expanded="true"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-controls="collapse1"
                >
                  Which technologies do you use for Android app development
                  services?
                </a>
              </div>
              <div
                id="collapse1"
                class="collapse  show "
                aria-labelledby="heading1"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p>
                    Our team uses Kotlin and Java for custom Android app
                    development. We also use Flutter and React Native for
                    cross-platform app Android mobile app development.
                  </p>
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading2">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-controls="collapse2"
                >
                  Why should you develop Android apps for your business?
                </a>
              </div>
              <div
                id="collapse2"
                class="collapse "
                aria-labelledby="heading2"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  The rising market share of Android OS combined with the
                  increasing number of Android devices are reasons to develop
                  apps for Android mobile devices.
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading3">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-controls="collapse3"
                >
                  Why choose Expert App Devs as your Android app development
                  partner?
                </a>
              </div>
              <div
                id="collapse3"
                class="collapse "
                aria-labelledby="heading3"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  As a leading Android application development company, we help
                  generate additional revenue streams for funded startups. We
                  also have a dependable team of project managers, business
                  analysts and expert android app developers to help create a
                  custom ecosystem for a functional and accessible mobile
                  application.
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading4">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse4"
                  aria-controls="collapse4"
                >
                  What is the cost of developing an Android application?
                </a>
              </div>
              <div
                id="collapse4"
                class="collapse "
                aria-labelledby="heading4"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  The cost of developing a reliable product depends on the
                  features, functionality, project app idea and industry
                  verticals. It also depends on whether you are opting for a
                  custom android app development, the platform and the expertise
                  of the developers.
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading5">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse5"
                  aria-controls="collapse5"
                >
                  How long does it take to build an Android application?
                </a>
              </div>
              <div
                id="collapse5"
                class="collapse "
                aria-labelledby="heading5"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Developing apps can take anywhere between a month and a year
                  for expert Android application development services.
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading6">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse6"
                  aria-controls="collapse6"
                >
                  What are the different engagement models you offer?
                </a>
              </div>
              <div
                id="collapse6"
                class="collapse "
                aria-labelledby="heading6"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Depending on the project type and technologies that will be
                  used to develop mobile apps, our team will offer flexible
                  engagement models. You can opt for hourly hiring or go with a
                  dedicated team for the entire project. It also depends on what
                  you plan to create and the features you aim to add.
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading7">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse7"
                  aria-controls="collapse7"
                >
                  Do you sign an NDA before starting?
                </a>
              </div>
              <div
                id="collapse7"
                class="collapse "
                aria-labelledby="heading7"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, as a leading Android app development company, we sign an
                  NDA with our customers to ensure full confidentiality of the
                  features, platform, technologies and customers.
                </div>
              </div>
            </div>
            <div class="card border-left-0 border-right-0 border-bottom-0 border-top">
              <div class="card-header border-0 rounded-0 p-0" id="heading8">
                <a
                  class="btn-link d-block p-4 collapsed "
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target="#collapse8"
                  aria-controls="collapse8"
                >
                  In Which Countries Do You Provide Android App Development?
                </a>
              </div>
              <div
                id="collapse8"
                class="collapse "
                aria-labelledby="heading8"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  We have successfully delivered Android Apps to clients in the
                  United States (US), United Kingdom (GB), Canada (CA),
                  Australia (AU), Germany (DE), Kuwait (KW), New Zealand (NZ),
                  Qatar(QA), South Africa (SA), Singapore (SG), United Arab
                  Emirates (AE), and other countries. We are confident that our
                  certified Android developers can help you create stunning and
                  functional applications that will boost your agency's growth
                  and client satisfaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <FaqSection />
      {/* <section class="section-space client-brand service-client">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 style= {{textAlign: "left" }}>Our Clients</h2>
              <div class="swiper-container client-brand-slder swiper-initialized swiper-horizontal swiper-pointer-events">
                <div
                  class="swiper-wrapper align-items-center"
                  id="swiper-wrapper-108ffcf401c3f627d"
                  aria-live="off"
                  style={{transform: "translate3d(-1435px, 0px, 0px)", transitionDuration: "0ms" }}
                >
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="6"
                    role="group"
                    aria-label="7 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/infosys.png"
                      alt="infosys"
                      title="infosys"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="7"
                    role="group"
                    aria-label="8 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/jio.png"
                      alt="jio"
                      title="jio"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="8"
                    role="group"
                    aria-label="9 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/godrejagrovet.webp"
                      alt="godrejagrovet"
                      title="godrejagrovet"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="9"
                    role="group"
                    aria-label="10 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/ny-stock-exchange.png"
                      alt="new york stock exchange"
                      title="new york stock exchange"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="10"
                    role="group"
                    aria-label="11 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/stingsports.png"
                      alt="sting sports"
                      title="sting sports"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="11"
                    role="group"
                    aria-label="12 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/sadhana.png"
                      alt="sadhana"
                      title="sadhana"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/abb.png"
                      alt="abb group"
                      title="abb group"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/nestle.webp"
                      alt="nestlé"
                      title="nestlé"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-next"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/gea.png"
                      alt="gea group"
                      title="gea group"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="3"
                    role="group"
                    aria-label="4 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/paypal-logo.png"
                      alt="paypal"
                      title="paypal"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="4"
                    role="group"
                    aria-label="5 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/indusind_bank.webp"
                      alt="indusind bank"
                      title="indusind bank"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="5"
                    role="group"
                    aria-label="6 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/nationa-geographic.png"
                      alt="national geographic"
                      title="national geographic"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="6"
                    role="group"
                    aria-label="7 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/infosys.png"
                      alt="infosys"
                      title="infosys"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="7"
                    role="group"
                    aria-label="8 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/jio.png"
                      alt="jio"
                      title="jio"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="8"
                    role="group"
                    aria-label="9 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/godrejagrovet.webp"
                      alt="godrejagrovet"
                      title="godrejagrovet"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="9"
                    role="group"
                    aria-label="10 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/ny-stock-exchange.png"
                      alt="new york stock exchange"
                      title="new york stock exchange"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="10"
                    role="group"
                    aria-label="11 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/stingsports.png"
                      alt="sting sports"
                      title="sting sports"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="11"
                    role="group"
                    aria-label="12 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/sadhana.png"
                      alt="sadhana"
                      title="sadhana"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/abb.png"
                      alt="abb group"
                      title="abb group"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/nestle.webp"
                      alt="nestlé"
                      title="nestlé"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/gea.png"
                      alt="gea group"
                      title="gea group"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="3"
                    role="group"
                    aria-label="4 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/paypal-logo.png"
                      alt="paypal"
                      title="paypal"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="4"
                    role="group"
                    aria-label="5 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/indusind_bank.webp"
                      alt="indusind bank"
                      title="indusind bank"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="5"
                    role="group"
                    aria-label="6 / 12"
                    style={{width: "175px", marginRight: "30px" }}
                  >
                    <img
                      src="https://www.expertappdevs.com/sitebucket/client/nationa-geographic.png"
                      alt="national geographic"
                      title="national geographic"
                      width="200"
                      height="100"
                    />
                  </div>
                </div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <ClientBrandSlider />
      {/* <section class="section-space cta-section start-project">
      <div class="container">
          <div class="row rounded lets-talk p-md-5 p-3 m-0 mt-5">
              <div class="col-md-12 p-3">
                  <div class="row inner align-items-center">
                      <div class="col-lg-9 col-md-7 mt-3 mb-3">
                          <h3>Do you have an interesting project?</h3>
                          <span>Let's talk about that!</span>
                      </div>
                      <div class="col-lg-3 col-md-5 mt-3 mb-3 text-md-right">
                          <a title="Contact Us" class="btn btn-danger" href="https://www.expertappdevs.com/contact-us">Start
                              Project</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> */}
  <CTASectionProjectBox />
    </>
  );
};

export default AndroidAppDevelopment;
