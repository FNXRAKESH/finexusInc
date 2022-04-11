import React from 'react';
import ourproducts from '../../images/ourproducts.png';
import './Products.scss';

const OurProducts = () => {
  return (
    <div id="ourProducts" className="pb-md-5">
      <div className="container py-5 pb-sm-0">
        <div className="row justify-content-md-center">
          <div className="col-lg-6 pb-md-0 pb-5 gradientBg2 col-md-auto">
            <img src={ourproducts} alt="" className="img-fluid " />
          </div>
          <div className="col-lg-6 col-md-auto">
            <p style={{ color: '#1552F0', fontWeight: 600, fontSize: 20 }}>
              Our business products
            </p>
            <h1>
              Growth focused High
              <br className="d-none d-md-block" /> Quality business{' '}
              <span>Products</span>
            </h1>
            <p>
              We pride ourselves on our quality, and we are always working to
              make sure that we are providing you with the best possible
              products and services.
            </p>
            <div className="blueBox">
              <div className="box1"></div>
              <div className="px-4">
                <h5 className="pb-2">Mobile Origination</h5>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
            <div className="whiteBox mt-4">
              <div className="box2"></div>
              <div className="px-4">
                <h5 className="pb-2">Collection</h5>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
