// FaqSection.tsx
import React from 'react';
import { faqData } from '../mockdata/AndroidAppDevelopmment';
// import { faqData } from './faqData'; // Adjust the import path based on your structure

const FaqSection = () => {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-9">
            <h2>Mobile app development FAQs</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="accordion faq pb-4" id="accordionExample">
          {faqData.map((faq) => (
            <div className="card border-left-0 border-right-0 border-bottom-0 border-top" key={faq.id}>
              <div className="card-header border-0 rounded-0 p-0" id={`heading${faq.id}`}>
                <a
                  className="btn-link d-block p-4 collapsed"
                  aria-expanded="false"
                  href="javascript:"
                  data-toggle="collapse"
                  data-target={`#collapse${faq.id}`}
                  aria-controls={`collapse${faq.id}`}
                >
                  {faq.question}
                </a>
              </div>
              <div
                id={`collapse${faq.id}`}
                className="collapse"
                aria-labelledby={`heading${faq.id}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
