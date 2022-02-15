import React from 'react';
import './Services.scss';
import building from '../../images/building.png';
import chat from '../../images/chat.png';
import setting from '../../images/setting.png';
import arrow from '../../images/arrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
  return (
    <div id="services" className="container py-5">
      <div className="row justify-content-sm-center pb-md-5">
        <div className="col-md-6">
          <img src={building} alt="" className="img-fluid" />
          <div className="pt-3">
            <p
              style={{
                color: '#1552F0',
                fontSize: 20,
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 0,
                fontWeight: 700
              }}
            >
              Services we provide
            </p>
            <div className="d-flex">
              <h1>
                We provide best <br className="d-none d-md-block" />
                services to companies{' '}
                <span className="pe-3 d-inline d-md-none">that scale!</span>
                <br />
                <span className="d-flex justify-content-center justify-content-md-start d-none d-md-block">
                  <span className="pe-3">that scale!</span>
                  <img src={arrow} alt="" className="arrow img-fluid " />
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-md-3" id="serviceType">
          <img src={chat} alt="" className="d-none d-md-block" />
          <div className="d-flex  align-items-center">
            <img src={chat} alt="" className="d-block d-md-none" />
            <div>
              <h5 className="fw-bold">Business consulting</h5>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <p className="fw-bold circles">Popular in startups</p>
        </div>
        <div className="col-md-3" id="serviceType">
          <img src={setting} alt="" className="d-none d-md-block" />
          <div className="d-flex align-items-center">
            <img src={setting} alt="" className="d-block d-md-none" />
            <div>
              <h5 className="fw-bold">Maintenance support</h5>
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center star">
            <FontAwesomeIcon icon={faStar} color="#15A1F0" />
            <p className="fw-bold m-0 px-2 ">Managing 32 Businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
