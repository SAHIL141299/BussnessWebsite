import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";

function Solutions() {
  return (
    <div>
      <Header />
      <section class="sub-heading light-bg">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a title="Home" href="https://www.expertappdevs.com">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Solutions
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-7">
              <h1>Solutions</h1>
              <div class="title-text">
                <p>
                  We offer much more than just IT. Yes, we provide varied
                  solutions to meet your growing and ever-changing business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-space pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6 mt-sm-3 mb-sm-3  mt-2 mb-2">
              <div class="card solutions-list-box">
                <div class="card-body">
                  <h6>Service Provider</h6>
                  <h4>Service Provider Solution</h4>
                  <div class="tags">
                    <ul>
                      <li>Android</li>
                      <li>iOS</li>
                      <li>React Native</li>
                    </ul>
                  </div>
                  <p>
                    Do you have an idea that can transform the world of service
                    providers? Want to help a handyman enjoy...
                  </p>
                  <div>
                    <a
                      class="more-btn"
                      href="https://www.expertappdevs.com/solutions/service-provider-solution"
                    >
                      {" "}
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-sm-3 mb-sm-3  mt-2 mb-2">
              <div class="card solutions-list-box">
                <div class="card-body">
                  <h6>Ecommerce</h6>
                  <h4>Ecommerce App Solution</h4>
                  <div class="tags">
                    <ul>
                      <li>Android</li>
                      <li>iOS</li>
                    </ul>
                  </div>
                  <p>
                    Want to increase the visibility of your store? Are you
                    looking to shift your retail outlet to a mobi...
                  </p>
                  <div>
                    <a
                      class="more-btn"
                      href="https://www.expertappdevs.com/solutions/ecommerce-app-solution"
                    >
                      {" "}
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-sm-3 mb-sm-3  mt-2 mb-2">
              <div class="card solutions-list-box">
                <div class="card-body">
                  <h6>Food Delivery</h6>
                  <h4>Food Delivery Solution</h4>
                  <div class="tags">
                    <ul>
                      <li>iOS</li>
                      <li>Android</li>
                    </ul>
                  </div>
                  <p>
                    Are you into food delivery? Do you want to create an
                    on-demand delivery service for your restaurant ...
                  </p>
                  <div>
                    <a
                      class="more-btn"
                      href="https://www.expertappdevs.com/solutions/food-delivery-solution"
                    >
                      {" "}
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-sm-3 mb-sm-3  mt-2 mb-2">
              <div class="card solutions-list-box">
                <div class="card-body">
                  <h6>Cab Service</h6>
                  <h4>Taxi Booking Solution</h4>
                  <div class="tags">
                    <ul>
                      <li>iOS</li>
                      <li>Android</li>
                    </ul>
                  </div>
                  <p>
                    Looking for dedicated developers that can help with taxi
                    booking app development? Need a team that c...
                  </p>
                  <div>
                    <a
                      class="more-btn"
                      href="https://www.expertappdevs.com/solutions/taxi-booking-solution"
                    >
                      {" "}
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-space">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <h2>Need a consultation?</h2>
              <div class="title-text">
                <p class="margin-none">
                  We are here to serve you. Just drop in your queries, and we
                  will get back to you.
                </p>
              </div>
            </div>
            <div class="col-md-3 mt-3 text-md-right">
              <a
                title="Contact Us"
                class="btn btn-danger"
                href="https://www.expertappdevs.com/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Solutions;
