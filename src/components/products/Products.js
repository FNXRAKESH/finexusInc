import React from 'react';
import ourproducts from '../../images/ourproducts.png';
import mo from '../../images/mo.png';
import coll from '../../images/coll.png';
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
            <p
              style={{
                color: '#1552F0',
                fontWeight: 600,
                fontSize: 20,
                fontFamily: 'PT Serif Pro Normal',
                marginBottom: 0
              }}
            >
              Finexus&lsquo;s Enterprise Products
            </p>
            <h1>
              Growth focused high
              <br className="d-none d-md-block" /> impact Enterprise{' '}
              <span>Products</span>
            </h1>
            <p>
              We pride ourselves on our quality, and always working to make sure
              that we are providing you with the best possible products and
              services.
            </p>
            <div className="blueBox">
              <img src={mo} alt="Mobile Origination" />
              <div className="px-4 w-100">
                <h5 className="pb-2">Mobile Origination</h5>
                <p>
                  App that allows lenders to easily offer custom loan
                  application workflow.
                </p>
                <h6 style={{ color: '#1552F0' }}>Learn More</h6>
              </div>
            </div>
            <div className="whiteBox mt-4">
              <img src={coll} alt="collection" />
              <div className="px-4 w-100">
                <h5 className="pb-2">FX Collection</h5>
                <p>
                  Configurable automated collection strategies, cure actions and
                  much more.
                </p>
                <h6 style={{ color: '#1552F0' }}>Learn More</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
