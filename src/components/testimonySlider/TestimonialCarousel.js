import React from 'react';
import ChuckSmith from '../../images/clients/ChuckSmith.png';
import JenniferSpaziano from '../../images/clients/JenniferSpaziano.png';
import MarionMathes from '../../images/clients/MarionMathes.png';
import './TestimonialCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialCarousel = () => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active px-4">
          <div className="d-flex justify-content-around align-items-center w-100">
            <img
              src={MarionMathes}
              alt="Marion Mathes"
              className="imf-fluid clientImg"
            />
            <div className="ps-5">
              <p className="text-light">
                &ldquo;The Finexus team has demonstrated their expertise and
                creative solutioning which has added real value to our business.
                They have been a great partner as we grow our business and we
                highly recommend the team.&rdquo;
              </p>
              <div id="testimonialImage" className="d-flex align-items-center">
                <div className="ps-3">
                  <h6 className="m-0">-— Marion Mathes</h6>
                  <p className="m-0">
                    <small>CEO, CreditWorks LLC</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item px-4">
          <div className="d-flex justify-content-around align-items-center w-100">
            <img
              src={JenniferSpaziano}
              alt="Marion Mathes"
              className="imf-fluid clientImg"
            />
            <div className="ps-5">
              <p className="text-light">
                &ldquo;Finexus is more than a salesforce admin to us – they are
                our partner in product design and development. They understand
                both our customer and our internal users’ needs and pain points.
                With Finexus, we design and implement workflows the right way on
                the first try without sacrificing deadlines. I would highly
                recommend Finexus to anyone serious about product development
                and user experience, especially those in the financial
                industry.&rdquo;
              </p>
              <div id="testimonialImage" className="d-flex align-items-center">
                <div className="ps-3">
                  <h6 className="m-0">-— Jennifer Spaziano</h6>
                  <p className="m-0">
                    <small>VP Technology and Innovation, Ascendus</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item px-4">
          <div className="d-flex justify-content-around align-items-center w-100">
            <img
              src={ChuckSmith}
              alt="Marion Mathes"
              className="imf-fluid clientImg"
            />
            <div className="ps-5">
              <p className="text-light">
                &ldquo;CreditWorks has always looked for external resources that
                match our core values and with Finexus Inc. and the leadership
                of Dhiman Bhattacharjee, Krishnakumar, and the Finexus Team, we
                finally found a smart and conscientious partner.&rdquo;
              </p>
              <div id="testimonialImage" className="d-flex align-items-center">
                <div className="ps-3">
                  <h6 className="m-0">-— Chuck Smith</h6>
                  <p className="m-0">
                    <small>Consultant, CreditWorks LLC</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        id="leftBtn"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <FontAwesomeIcon icon={faAngleLeft} color="#1552F0" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        id="rightBtn"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <FontAwesomeIcon icon={faAngleRight} color="#1552F0" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
