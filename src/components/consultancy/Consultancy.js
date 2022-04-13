import React from 'react';
import './Consultancy.scss';
import consultancy from '../../images/consultancy.png';
import consultancy1 from '../../images/Consultancy1.png';
import consultancy2 from '../../images/Consultancy2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Consultancy = (props) => {
  console.log(props.props.history);
  return (
    <div id="consultancy" className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1>
            A good catchy headline for <span>consultancy</span>
          </h1>
          <p className="m-0 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="py-3 d-md-flex align-items-center btns">
            <Link
              to='/contact'
              className="btn btn-outline-primary m-2"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
               
            >
              Let's Talk
            </Link>
            <p className="fw-bold circles">
              Meet our experts{' '}
              <span>
                <FontAwesomeIcon icon={faLongArrowAltRight} color="#1552F0" />
              </span>
            </p>
          </div>
          <div className="col-lg-6 d-block d-md-none">
            <img src={consultancy} alt="" className="img-fluid" />
            <div className="gradientBg1 py-3 d-block d-md-none">
              <div className="blueBg m-3">
                <img src={consultancy1} alt="" height={80} />
                <h6>Business strategy</h6>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
                  </small>
                </p>
              </div>
              <div className="greyBg m-3">
                <img src={consultancy2} alt="" height={80} />
                <h6>People &amp; change</h6>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="gradientBg py-3 px-3 d-none d-md-block my-3">
            <div className="row">
              <div className="col blueBg m-3">
                <img src={consultancy1} alt="" height={80} />
                <h6>Business strategy</h6>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
                  </small>
                </p>
              </div>
              <div className="col greyBg m-3">
                <img src={consultancy2} alt="" height={80} />
                <h6>People &amp; change</h6>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
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
  );
};

export default Consultancy;
