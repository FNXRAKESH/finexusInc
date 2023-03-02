import React from 'react';
import windownew from '../../images/window.png';
import clients from '../../images/clients.png';
import au from '../../images/clients/au.png';
import ck from '../../images/clients/ck.png';
import cw from '../../images/clients/cw.png';
import em from '../../images/clients/em.png';
import gp from '../../images/clients/gp.png';
import spring from '../../images/clients/spring.png';
import cd from '../../images/clients/canadadrives.png';
 import { HashLink } from 'react-router-hash-link';

import './Intro.scss';
const Intro = () => {
  return (
    <div className="mainContainer">
      <div id="intro" className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-auto py-5">
            <div className="tag d-none d-md-flex align-items-center">
              <img src={clients} alt="" className="img-fluid" />
              <p className="m-0">
                Over <span className="fw-bold">32+ clients</span> trust Finexus!
              </p>
            </div>
            <h1 className="py-4">
              Lending Solutions
              <br /> with Reimagined&nbsp;
              <br />
              <span style={{ fontFamily: 'PT Serif Pro Extended' }}>
                Experience
              </span>
            </h1>
            <div className="btns pt-3">
              <button
                id="getStarted"
                className="btn btn-primary my-2 my-sm-0"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                style={{ backgroundColor: '#1552F0' }}
              >
                Get Started
              </button>
              <button
                className="btn m-2 d-none d-md-inline"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                style={{ borderColor: '#1552F0', color: '#1552F0' }}
              >
                What we do?
              </button>
            </div>
          </div>
          <div className="col-lg-7 col-md-auto">
            {/* <div className="blurBg"> </div> */}
            <img src={windownew} alt="intro" className="img-fluid" />
            {/* <img
              src={windownewmob}
              alt="intro"
              className="img-fluid d-block d-md-none"
            /> */}
          </div>
        </div>
      </div>
      <div id="trustOne" className="container pb-md-5">
        <p className="text-center mt-3" style={{ fontSize: 16 }}>
          Over <span className="fw-bold">32+ business</span> trust our service
          &amp; values
        </p>
        <div id="companies" className="d-flex justify-content-evenly flex-wrap">
          <a href="https://www.ascendus.org/" target="_blank">
            <img src={au} alt="" className="img-fluid" />
          </a>
          {/* <img src={ck} alt="" className="img-fluid" /> */}
          <a href="https://creditworksonline.com/" target="_blank">
            <img src={cw} alt="" className="img-fluid" />
          </a>
          <a href="https://emoneyusa.com/" target="_blank">
            <img src={em} alt="" className="img-fluid" />
          </a>
          <a href="https://graciepoint.com/" target="_blank">
            <img src={gp} alt="" className="img-fluid" />
          </a>
          <a href="https://www.springfinancial.ca/" target="_blank">
            <img src={spring} alt="" className="img-fluid" />
          </a>
          <a href="https://www.canadadrives.ca/" target="_blank">
            <img src={cd} alt="" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
