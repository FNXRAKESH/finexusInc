import React from 'react';
import windownew from '../../images/window.png';
import windownewmob from '../../images/windownewmob.png';
import au from '../../images/clients/au.png';
import ck from '../../images/clients/ck.png';
import cw from '../../images/clients/cw.png';
import em from '../../images/clients/em.png';
import gp from '../../images/clients/gp.png';
import spring from '../../images/clients/spring.png';
import cd from '../../images/clients/canadadrives.png';

import './Intro.scss';
const Intro = () => {
  return (
    <div className="mainContainer">
      <div id="intro" className="container pb-5">
        <div className="row justify-content-center pt-md-5">
          <div className="col-lg-4 col-md-auto pt-5">
            <p className="tag mb-3 d-none d-md-block">
              Over <span className="fw-bold">100+ business</span> trust our
              service &amp; values
            </p>
            <h1>
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
          <div className="col-lg-8 col-md-auto">
            {/* <div className="blurBg"> </div> */}
            <img
              src={windownew}
              alt="intro"
              className="img-fluid"
            />
            {/* <img
              src={windownewmob}
              alt="intro"
              className="img-fluid d-block d-md-none"
            /> */}
          </div>
        </div>
      </div>
      <div id="trustOne" className=" pb-md-5">
        
        <p className="text-center mt-3" style={{ fontSize: 16 }}>
          Over <span className="fw-bold">100+ business</span> trust our service
          &amp; values
        </p>
        <div id="companies" className="d-flex justify-content-evenly flex-wrap">
          <img src={au} alt="" className="img-fluid" />
          <img src={ck} alt="" className="img-fluid" />
          <img src={cw} alt="" className="img-fluid" />
          <img src={em} alt="" className="img-fluid" />
          <img src={gp} alt="" className="img-fluid" />
          <img src={spring} alt="" className="img-fluid" />
          <img src={cd} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
