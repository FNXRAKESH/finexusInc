import React from 'react';
import './Footer.scss';
import arr from '../../images/arr.png';
import arrmob from '../../images/arrmob.png';
import finexus from '../../images/Finexus.png';
import linkedin from '../../images/linkedin.png';
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
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div id="footer">
      <div style={{ height: 50 }}></div>
      <div className="container ">
        <h1 className="pt-5 text-center">
          Ready to grow your
          <br />
          business with Finexus?
        </h1>
        <div className="d-flex justify-content-center py-4">
          <Link to="/contact">
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"

              // onClick={() => this.setState({ bgColor: '#1552F0' })}
            >
              <FontAwesomeIcon icon={faCommentDots} color="#fff" />
              &nbsp;Let's Talk
            </button>
          </Link>
        </div>
        {/* <div className="service row justify-content-between py-3">
          <div className="col-lg-6">
            <div className="row pb-3">
              <div className="col-md-6 pb-3">
                <div
                   
                  className="bg-white px-3 d-flex align-items-center justify-content-center"
                >
                  <h4 className="text-dark p-4 fw-bold m-0">
                    Business consulting
                  </h4>
                  <img src={arr} alt=""  />
 
                </div>
              </div>
              <div className="col-md-6">
                <div
                   
                  className="bg-white px-3 d-flex align-items-center justify-content-center"
                >
                  <h4 className="text-dark p-4 fw-bold m-0">Maintenance</h4>
                  <img src={arr} alt="" />
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 pb-3">
                <div
                   
                  className="bg-white px-3 py-4 d-flex align-items-center justify-content-center"
                >
                  <h4 className="text-dark pe-4 fw-bold m-0">
                    Mobile Origination
                  </h4>
                  <img src={arr} alt=""  />
                   
                </div>
              </div>
              <div className="col-md-6">
                <div
                   
                  className="bg-white px-3 py-4 d-flex align-items-center justify-content-center"
                >
                  <h4 className="text-dark pe-4 fw-bold m-0">Collection</h4>
                  <img src={arr} alt=""  />
                  
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <hr />
        <div className="row py-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 d-none d-md-block">
                <div className="pb-3">
                  <img src={finexus} alt="Finexus" className="d-block pb-3" />
                  <a
                    href="https://www.linkedin.com/company/finexus-inc/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                </div>
                {/* <div className="icons d-flex">
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
                </div> */}
              </div>
              <div className="col-md-6 d-block d-md-none">
                <div className="row">
                  <div className="col">
                    <h6 className="fw-bold">Get Started</h6>
                    <p className="m-0">
                      <small>Start a project</small>
                    </p>
                    <p>
                      <a href="mailto:info@finexusinc.com">
                        info@finexusinc.com
                      </a>
                    </p>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold">Speak to Us</h6>
                    <p className="m-0">
                      <a href="tel:+17817525204">
                        <small>+1 (781) 752-5204</small>
                      </a>
                    </p>
                    {/* <p>
                      <a href="tel:+919841206769">
                        <small>+91 9841 206 769</small>
                      </a>
                    </p> */}
                  </div>
                </div>
                <hr className=" d-block d-md-none" />
              </div>
              <div className="col-md-6 d-none d-md-block">
                <h6 className="fw-bold">Get Started</h6>
                <p className="m-0">
                  <small>Start a project</small>
                </p>
                <p>
                  <small>
                    <a href="mailto:info@finexusinc.com">info@finexusinc.com</a>
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
                  <a href="tel:+17817525204">
                    <small>+1 (781) 752-5204</small>
                  </a>
                </p>
                {/* <p className="m-0 py-2">
                  <a href="tel:+919841206769">
                    <small>+91 9841 206 769</small>
                  </a>
                </p> */}
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
                    <small>View All Locations</small>
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
              <img src={finexus} alt="Finexus" className="d-block pb-3" />
              <a
                href="https://www.linkedin.com/company/finexus-inc/"
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            {/* <div className="social">
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
            </div> */}
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
