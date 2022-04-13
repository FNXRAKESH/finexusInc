import React from 'react';
import './Footer.scss';
import arr from '../../images/arr.png';
import arrmob from '../../images/arrmob.png';
import finexus from '../../images/Finexus1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
      <div style={{ height: 50 }}></div>
      <div className="container ">
        <h1 className="py-5">
          Ready to grow your
          <br />
          business with Finexus?
        </h1>
        <div className="service row justify-content-between py-3">
          <div className="col-lg-6">
            <div className="row pb-3">
              <div className="col-md-6 pb-3">
                <div
                  id="serv"
                  className="bg-white p-3 d-flex align-items-center justify-content-center"
                >
                  <h5 className="text-dark pe-4 fw-bold">
                    Business consulting
                  </h5>
                  <img src={arr} alt="" className="d-none d-md-block" />
                  <img src={arrmob} alt="" className="d-block d-md-none" />
                </div>
              </div>
              <div className="col-md-6">
                <div
                  id="serv"
                  className="bg-white p-3 d-flex align-items-center justify-content-center"
                >
                  <h5 className="text-dark pe-4 fw-bold ">Maintenance</h5>
                  <img src={arr} alt="" className="d-none d-md-block" />
                  <img src={arrmob} alt="" className="d-block d-md-none" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 pb-3">
                <div
                  id="serv"
                  className="bg-white p-3 d-flex align-items-center justify-content-center"
                >
                  <h5 className="text-dark pe-4 fw-bold ">
                    Mobile Origination
                  </h5>
                  <img src={arr} alt="" className="d-none d-md-block" />
                  <img src={arrmob} alt="" className="d-block d-md-none" />
                </div>
              </div>
              <div className="col-md-6">
                <div
                  id="serv"
                  className="bg-white p-3 d-flex align-items-center justify-content-center"
                >
                  <h5 className="text-dark pe-4 fw-bold ">Collection</h5>
                  <img src={arr} alt="" className="d-none d-md-block" />
                  <img src={arrmob} alt="" className="d-block d-md-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 d-none d-md-block">
                <div className="pb-3">
                  <img src={finexus} alt="Finexus" />
                </div>
                <div className="icons d-flex">
                  <div className="social">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>
                  <div className="social">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="social">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="social">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-block d-md-none">
                <div className="row">
                  <div className="col">
                    <h6 className="fw-bold">Get Sarted</h6>
                    <p className="m-0">
                      <small>Start a project</small>
                    </p>
                    <p>
                      <small>info@finexusinc.com</small>
                    </p>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold">Speak to Us</h6>
                    <p className="m-0">
                      <small>+1 (406) 555-0120</small>
                    </p>
                    <p>
                      <small>talk@finexusinc.com</small>
                    </p>
                  </div>
                </div>
                <hr className=" d-block d-md-none" />
              </div>
              <div className="col-md-6 d-none d-md-block">
                <h6 className="fw-bold">Get Sarted</h6>
                <p className="m-0">
                  <small>Start a project</small>
                </p>
                <p>
                  <small>
                    <a
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: 'none'
                      }}
                      href="mailto:info@finexusinc.com"
                    >
                      info@finexusinc.com
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="row">
              <div className="col-md-6  d-none d-md-block">
                <h6 className="fw-bold">Speak to Us</h6>
                <p className="m-0">
                  <small>+1 (781) 752-5204</small>
                </p>
                <p className="m-0 py-2">
                  <small>+91 9841 206 769</small>
                </p>
                {/* <p>
                  <small>info@finexusinc.com</small>
                </p> */}
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold">Address</h6>
                <p className="m-0">
                  <small>
                    4597, Donalbain Circle,
                    <br /> Fremont, CA - 94555
                  </small>
                </p>
                <p>
                  <Link to="/contact">
                    <small>View All 3 Locations</small>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-block d-md-none">
          <hr />
          <div className="icons d-flex align-items-center">
            {/* <h5 className="flex-grow-1">Finexus</h5> */}
            <div className="pb-3">
              <img src={finexus} alt="Finexus" />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center pb-4">
          <small>© 2022 Finexus Inc </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
