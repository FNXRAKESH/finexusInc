import React from 'react';
import './WhyUs.scss';
import boxes1 from '../../images/boxes1.png';
import boxes2 from '../../images/boxes2.png';
import boxes3 from '../../images/boxes3.png';
import boxes4 from '../../images/boxes4.png';
import boxes5 from '../../images/boxes5.png';
import boxes6 from '../../images/boxes6.png';
import arrow2 from '../../images/arrow2.png';
import review from '../../images/review.png';
import reviews from '../../images/reviews.png';
import test from '../../images/test.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import TestimonialCarousel from '../testimonySlider/TestimonialCarousel';
const WhyUs = () => {
  return (
     
    <div id="whyUs">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 d-none d-md-block pb-5">
            <div className="row">
              <div className="col-4 ">
                <div className="boxes">
                  <img src={boxes1} alt="boxes1" className="img-fluid" />
                  <h6>Lending Industry Experience</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes blueBg">
                  <img src={boxes2} alt="boxes2" className="img-fluid" />
                  <h6>Market Leading Products</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes3} alt="boxes3" className="img-fluid" />
                  <h6>Solid Technical Expertise</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes4} alt="boxes4" className="img-fluid" />
                  <h6>Time Bound Implementations</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes5} alt="boxes5" className="img-fluid" />
                  <h6>Transparency with Customers</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes6} alt="boxes6" className="img-fluid" />
                  <h6>Custom Solutions as needed</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-5 reviewPanel">
            <h1>
              <span>Why Choose</span>&nbsp;Finexus for your business?
            </h1>
            <p>
              We understand that every business is different, and we tailor our
              solutions to meet each client’s specific needs. Our team of
              experts is dedicated to providing you with the best possible
              service, and we are always up for a challenge.
            </p>

            <div className="d-block d-md-none pt-5">
              <div className="row">
                <div className="col ">
                  <div className="boxes">
                    <img src={boxes1} alt="boxes1" className="img-fluid" />
                    <h6>Lending Industry Experience</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="boxes blueBg">
                    <img src={boxes2} alt="boxes2" className="img-fluid" />
                    <h6>Market Leading Products</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="boxes">
                    <img src={boxes3} alt="boxes3" className="img-fluid" />
                    <h6>Solid Technical Expertise</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="boxes">
                    <img src={boxes4} alt="boxes4" className="img-fluid" />
                    <h6>Time Bound Implementations</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="boxes">
                    <img src={boxes5} alt="boxes5" className="img-fluid" />
                    <h6>Transparency with Customers</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="boxes">
                    <img src={boxes6} alt="boxes6" className="img-fluid" />
                    <h6>Custom Solutions as needed</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap">
              <div className="arrowContainer">
                <Link
                  to="/contact"
                  className="btn btn-outline-primary m-2"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Let's Talk
                </Link>
              </div>

              <a
                href="mailto:info@finexusinc.com"
                className="d-flex justify-content-end align-items-center ps-3"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#1552F0" />
                <p
                  className="m-0 ps-2"
                  style={{
                    color: '#1552F0',
                    fontWeight: 700,
                    fontSize: 16 + 'px'
                  }}
                >
                  Know more about us
                </p>
              </a>

              {/* <div className="col-md-8">
                <div className="reviews">
                  <div className="bg">
                    <img src={reviews} alt="" />
                  </div>
                  <p className="m-0 py-3 fw-bold">623k reviews on Google</p>
                  <img src={review} alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div style={{ height: 200 }} className="d-none d-md-block"></div>
      </div>
      <div className="count">
        <div className="container">
          <div className="pt-5">
            <h1 className="text-center">
              Helped over
              <span> 32+ businesses worldwide </span>
              <br />
              in growing their lending portfolio.
            </h1>

            <p className="text-center">
              We work with companies across North America, Asia &amp; Europe
              offering our fintech products and services.
            </p>
          </div>
          <div className="py-5">
            <TestimonialCarousel />
          </div>

          <div>
            <div id="values" className="container">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="row">
                    <div className="col text-center">
                      <h3>32+</h3>
                      <p>Client Served</p>
                    </div>
                    <div className="col text-center">
                      <h3>$250M</h3>
                      <p>Revenue Generated</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="row">
                    <div className="col text-center">
                      <h3>12</h3>
                      <p>Lending Assets</p>
                    </div>
                    <div className="col text-center">
                      <h3>$3.5B</h3>
                      <p>Portfolio Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
