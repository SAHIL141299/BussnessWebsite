import React from 'react';
import { testimonials } from '../mockdata/AndroidAppDevelopmment';
// import { testimonials } from './testimonialsData';

const TestimonialSection = () => {
  return (
    <section className="section-space primary-bg hire-testimonial-section">
      <div className="container">
        <div className="row align-items-center why-hire">
          <div className="col-lg-8 pb-5 pb-lg-0">
            <div className="middle-content">
              <h2>
                End-to-end, impressive, and robust android app development
                services
              </h2>
              <div className="title-text">
                <p>
                  Having a robust, feature-rich, and functional Android app
                  can bring many benefits to you. While maintaining seamless
                  experiences across platforms, businesses need simple,
                  competent, and intuitive Android solutions to drive more
                  engagement and sales. You need a custom Android app
                  development services provider to develop a
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
                  </a>, 
                  <a
                    href="https://www.expertappdevs.com/technologies/vr-app-development"
                    target="_blank"
                    title="vr app development services"
                  >
                    <strong>VR</strong>
                  </a>
                  ) with high-end security frameworks. Our
                  Android experts stay updated with the latest Android trends
                  and updates to practice them in real-time development
                  scenarios.
                </p>
                <div>
                  <a
                    className="btn btn-danger"
                    href="https://www.expertappdevs.com/contact-us"
                  >
                    Hire dedicated android developers
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="swiper-container testimonials-slider">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`swiper-slide ${index === 0 ? 'swiper-slide-active' : ''}`}
                    style={{ width: "380px", marginRight: "24px" }}
                  >
                    <div className="testimonials-box">
                      <p>{testimonial.text}</p>
                      <div className="start-review d-flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star mr-1" style={{color: "#ffad0b"}}></i>
                        ))}
                      </div>
                      <div className="user-say">
                        <span className="user-info">
                          <strong>{testimonial.user.name}</strong>
                          {testimonial.user.title && `, ${testimonial.user.title}`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
