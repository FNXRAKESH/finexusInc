import React from 'react';
import './Consultancy.scss';
import consultancy from '../../images/consultancy.png';
import consultancy1 from '../../images/Consultancy1.png';
import consultancy2 from '../../images/Consultancy2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

 

const Consultancy = (props) => {
   
  return (
    <>
      <div className="overLay"></div>
      <div id="consultancy" className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>
              We can help you take your business to the
              <span> next level</span>
            </h1>
            <p className="m-0 pt-2">
              At Finexus, we take pride in providing best-in-class products and
              services including product implementation, product maintenance,
              strategy development and more.
            </p>
            <div className="py-3 d-md-flex align-items-center btns">
              <HashLink
                to="/#services"
                className="btn btn-outline-primary m-2"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Check Our Services
              </HashLink>
              <p className="fw-bold circles">
                Meet our experts{' '}
                <span>
                  <FontAwesomeIcon icon={faLongArrowAltRight} color="#1552F0" />
                </span>
              </p>
            </div>
            <div id='aboutus' className="col-lg-6 d-block d-md-none">
              <img src={consultancy} alt="" className="img-fluid" />
              <div className="gradientBg1 py-3 d-block d-md-none">
                <div className="blueBg m-3">
                  <img src={consultancy1} alt="" height={80} />
                  <h6>Business strategy</h6>
                  <p>
                    <small>
                      Our business strategy is differentiation. It's the process
                      of making a product or service stand out from the
                      competition by offering something that is unique and
                      valuable. We proudly achieve this through innovation,
                      quality, customer service, and other factors.
                    </small>
                  </p>
                </div>
                <div className="greyBg m-3">
                  <img src={consultancy2} alt="" height={80} />
                  <h6>People &amp; change</h6>
                  <p>
                    <small>
                      At Finexus we have created an environment where people
                      feel comfortable and supported. This means creating a
                      culture where people are encouraged to take risks, to be
                      innovative, and to speak up.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div
              id="about"
              className="gradientBg py-3 px-3 d-none d-md-block my-3"
            >
              <div className="row">
                <div className="col blueBg m-3">
                  <img src={consultancy1} alt="" height={80} />
                  <h6>Business strategy</h6>
                  <p>
                    <small>
                      Our business strategy is differentiation. It's the process
                      of making a product or service stand out from the
                      competition by offering something that is unique and
                      valuable. We proudly achieve this through innovation,
                      quality, customer service, and other factors.
                    </small>
                  </p>
                </div>
                <div className="col greyBg m-3">
                  <img src={consultancy2} alt="" height={80} />
                  <h6>People &amp; change</h6>
                  <p>
                    <small>
                      At Finexus we have created an environment where people
                      feel comfortable and supported. This means creating a
                      culture where people are encouraged to take risks, to be
                      innovative, and to speak up.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-md-block">
            <img src={consultancy} alt="" className="img-fluid" />
          </div>
        </div>
        <div style={{ height: 60 }} className="d-none d-md-block"></div>
      </div>
    </>
  );
};

export default Consultancy;
