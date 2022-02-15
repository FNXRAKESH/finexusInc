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
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
const WhyUs = () => {
  return (
    <div id="whyUs" className="pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 d-none d-md-block pb-5">
            <div className="row">
              <div className="col-4 ">
                <div className="boxes">
                  <img src={boxes1} alt="boxes1" className="img-fluid" />
                  <h6>
                    Can save
                    <br />
                    Time &amp; Money
                  </h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes blueBg">
                  <img src={boxes2} alt="boxes2" className="img-fluid" />
                  <h6>
                    Business
                    <br />
                    strategies
                  </h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes3} alt="boxes3" className="img-fluid" />
                  <h6>
                    Professional
                    <br />
                    services
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes4} alt="boxes4" className="img-fluid" />
                  <h6>
                    Custom
                    <br />
                    products
                  </h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes5} alt="boxes5" className="img-fluid" />
                  <h6>
                    24 / 7 hour
                    <br />
                    support
                  </h6>
                </div>
              </div>
              <div className="col-4">
                <div className="boxes">
                  <img src={boxes6} alt="boxes6" className="img-fluid" />
                  <h6>
                    Dedicated
                    <br />
                    teams
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-5 reviewPanel">
            <h1>
              <span>Why Choose</span>&nbsp;Finexus for your business?
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-block d-md-none">
              <button
                className="btn btn-outline-primary m-2 rounded"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Let's Talk
              </button>
              <div className="reviews py-4">
                <div className="bg">
                  <img src={reviews} alt="" />
                </div>
                <p className="m-0 py-3 fw-bold">623k reviews on Google</p>
                <img src={review} alt="" />
              </div>
            </div>
            <div className="d-block d-md-none pt-5">
              <div className="row">
                <div className="col ">
                  <div className="boxes">
                    <img src={boxes1} alt="boxes1" className="img-fluid" />
                    <h6>
                      Can save
                      <br />
                      Time &amp; Money
                    </h6>
                  </div>
                </div>
                <div className="col">
                  <div className="boxes blueBg">
                    <img src={boxes2} alt="boxes2" className="img-fluid" />
                    <h6>
                      Business
                      <br />
                      strategies
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="boxes">
                    <img src={boxes3} alt="boxes3" className="img-fluid" />
                    <h6>
                      Professional
                      <br />
                      services
                    </h6>
                  </div>
                </div>
                <div className="col">
                  <div className="boxes">
                    <img src={boxes4} alt="boxes4" className="img-fluid" />
                    <h6>
                      Custom
                      <br />
                      products
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="boxes">
                    <img src={boxes5} alt="boxes5" className="img-fluid" />
                    <h6>
                      24 / 7 hour
                      <br />
                      support
                    </h6>
                  </div>
                </div>
                <div className="col">
                  <div className="boxes">
                    <img src={boxes6} alt="boxes6" className="img-fluid" />
                    <h6>
                      Dedicated
                      <br />
                      teams
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-none d-md-flex">
              <div className="col-md-4 arrowContainer">
                <button
                  className="btn btn-outline-primary m-2 rounded"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Let's Talk
                </button>
                <div className="d-flex justify-content-end">
                  <img src={arrow2} alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="reviews">
                  <div className="bg">
                    <img src={reviews} alt="" />
                  </div>
                  <p className="m-0 py-3 fw-bold">623k reviews on Google</p>
                  <img src={review} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 100 }} className="d-none d-md-block"></div>
        <div className="row py-5">
          <div className="col-lg-6">
            <h1>
              Improved over
              <span> 160+</span>&nbsp;businesses worldwide
            </h1>
          </div>
          <div className="col-lg-6 ps-md-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
        <div className="testimonial row">
          <div
            className="col-lg-4 position-relative mb-3"
            style={{ zIndex: 1 }}
          >
            <div className="bgBlue">
              <FontAwesomeIcon icon={faQuoteRight} color="#15BBF0" />
              <p className="py-3">
                They have been a great partner as we grow our business ...
              </p>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <h6>— Carla Smith</h6>
                  <small style={{ fontWeight: 'normal' }}>CTO, ClassKlap</small>
                </div>
                <img src={test} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3" style={{ zIndex: 1 }}>
            <div className="test1">
              <FontAwesomeIcon icon={faQuoteRight} color="#dadcdf" />
              <p className="py-3">
                We finally found a smart and conscientious partner
              </p>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <h6>— Carla Smith</h6>
                  <small style={{ fontWeight: 'normal' }}>CTO, Ascendus</small>
                </div>
                <img src={test} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3" style={{ zIndex: 1 }}>
            <div className="test1">
              <FontAwesomeIcon icon={faQuoteRight} color="#dadcdf" />
              <p className="py-3">
                I just wanted to share a quick note and you let you know that
                ...
              </p>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <h6>— Carla Smith</h6>
                  <small style={{ fontWeight: 'normal' }}>CTO, Credit4Work</small>
                </div>
                <img src={test} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="count py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="row">
                <div className="col">
                  <h3>32 +</h3>
                  <p>Companies</p>
                </div>
                <div className="col">
                  <h3>$ 1.2M</h3>
                  <p>Follows on Internet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="row">
                <div className="col">
                  <h3>123</h3>
                  <p>Businesses</p>
                </div>
                <div className="col">
                  <h3>$ 1.2B</h3>
                  <p>Portfolio Companies</p>
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
