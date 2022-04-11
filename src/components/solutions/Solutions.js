import React, { Component } from 'react';
import './Solutions.scss';
import rightImg from '../../images/rightImg.png';
import leftImg from '../../images/leftImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Group4 from '../../images/clients/au1.png';
import Group5 from '../../images/clients/ck1.png';
import Group6 from '../../images/clients/cw1.png';
import Group7 from '../../images/clients/em1.png';
import Group8 from '../../images/clients/gp1.png';
import client from '../../images/client.png';
import VerticalCarousel from '../testimonySlider/VerticalCarousel';
import { config } from 'react-spring';

let slides = [
  {
    key: 1,
    name: 'Carla Smith',
    company: 'Ascendus',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies justo ut commodo fringilla. Suspendisse elit dui, efficitur sit amet risus at, pharetra finibus purus',
    img: client
  },
  {
    key: 2,
    name: 'Liam James',
    company: 'classklap',
    desc: 'Aenean non suscipit nibh. Quisque vel consequat quam. Quisque purus tortor, rutrum eget massa sed, pharetra tempor nisl. Sed luctus, arcu sed sollicitudin accumsan, ipsum mi varius dui,',
    img: client
  },
  {
    key: 3,
    name: 'Alexander Benjamin',
    company: 'Credit4Work',
    desc: 'Duis enim est, molestie a quam sit amet, interdum condimentum justo. Proin semper neque ac magna suscipit, eu rutrum nunc venenatis. Nunc placerat congue turpis ut placerat. ',
    img: client
  },
  {
    key: 4,
    name: 'William James',
    company: 'GraciePoint',
    desc: 'Nulla tempor velit orci, in pellentesque nibh iaculis a. Nunc mollis turpis sed magna dictum, ut consequat mauris cursus. Proin volutpat, quam vitae vehicula consequat,',
    img: client
  }
];


export default class Solutions extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };
  render() {
    return (
      <>
        <div id="solutions" className="pb-5">
          <div className="container pt-5">
            <h6
              style={{
                textAlign: 'center',
                color: '#15BBF0',
                fontWeight: 'bold',
                fontSize: 20
              }}
            >
              Our business solutions
            </h6>
            <h1 className="solutionTitle pb-5">
              Industry leading Solutions for{' '}
              <br className="d-md-block d-none" />
              the leading businesses
            </h1>
            <div id="solutionType" className="py-md-5 row align-items-center ">
              <div className="col-lg-6 col-md-auto">
                <img
                  src={rightImg}
                  alt=""
                  className="img-fluid pb-5 d-block d-md-none"
                />
                <h3 className="title">Fintech Heading</h3>
                <p className="desc py-3 m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                  <br /> tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex align-items-center">
                  <p className="link m-0 pe-3">
                    Learn more about mobile origination
                  </p>
                  <FontAwesomeIcon icon={faLongArrowAltRight} color="#fff" />
                </div>

                <div className="row py-5 boxes">
                  <div className="col colorBg p-5 me-5">
                    <h2 className="fw-bold">32% +</h2>
                    <p>Increase page views and grow business</p>
                  </div>
                  <div className="col blueBg p-5">
                    <h2 className="fw-bold">32% +</h2>
                    <p>Increase page views and grow business</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-auto py-2 d-none d-md-block  mx-auto">
                <img src={rightImg} alt="" className="img-fluid" />
              </div>
            </div>
            {/* <div className="py-5 row align-items-center">
              <div className="col-md-5 py-2">
                <img src={leftImg} alt="" className="img-fluid" />
              </div>
              <div className="col-md-7 ps-5">
                <h3 className="title">Collection</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex align-items-center">
                  <p className="link m-0 pe-3">Learn more about collection</p>
                  <FontAwesomeIcon icon={faLongArrowAltRight} color="#fff" />
                </div>
                <div className="row py-3 boxes">
                  <div className="col colorBg p-5 me-5">
                    <h5>32% +</h5>
                    <p>Increase page views and grow business</p>
                  </div>
                  <div className="col blueBg p-5">
                    <h5>32% +</h5>
                    <p>Increase page views and grow business</p>
                  </div>
                </div>
              </div>
            </div> */}
            <div style={{ height: 100 }} className="d-none d-md-block "></div>
            <div
              id="companies"
              className="d-flex justify-content-evenly py-md-4 flex-wrap"
            >
              <img src={Group4} alt="" className="img-fluid" />

              <img src={Group5} alt="" className="img-fluid" />

              <img src={Group6} alt="" className="img-fluid" />

              <img src={Group7} alt="" className="img-fluid" />

              <img src={Group8} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div id="clients" className="mb-5">
          <div className="container">
            <div className="happyClients row align-items-center justify-content-around">
              <div className="col-lg-6  d-flex justify-content-around ps-5">
                <div>
                  <h1>
                    What our Happy <br />
                    Clients say.
                  </h1>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 'light',
                      color: 'rgba(255,255,255,0.6)'
                    }}
                    className="pe-5 py-3"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <VerticalCarousel
                  slides={slides}
                  offsetRadius={this.state.offsetRadius}
                  showNavigation={this.state.showNavigation}
                  animationConfig={this.state.config}
                />
                {/* <div className="slider d-flex align-items-center">
                <div>
                  <h6>
                    Carla Smith | <small>Monexo</small>
                  </h6>
                  <p>
                    I just wanted to share a quick note and you let you know
                    that ...
                  </p>
                </div>
                <img src={client} alt="" />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
 
