import React from 'react';
import './News.scss';
import blog1 from '../../images/blog1.png';
import blog2 from '../../images/blog2.png';
import blog3 from '../../images/blog3.png';
const News = () => {
  return (
    <div id="news" className="container py-5">
      <div style={{ height: 100 }}></div>
      <p style={{ color: '#1552F0' }}>Our blog</p>
      <h1>
        <span>News &amp; Insights</span>&nbsp; from our blog
      </h1>
      <div id='blog' className="row">
        <div className="col-md-4">
          <img src={blog1} className="img-fluid pb-3" alt="" />

          <h6 className="pe-5 pt-3 fw-bold">
            Los Angeles’ VS Stars are on the rise amid mega exists
          </h6>
          <p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut ...
            </small>
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog2} className="img-fluid pb-3" alt="" />
          <h6 className="pe-5 pt-3 fw-bold">
            Los Angeles’ VS Stars are on the rise amid mega exists
          </h6>
          <p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut ...
            </small>
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog3} alt="" className="img-fluid pb-3" />
          <h6 className="pe-5 pt-3 fw-bold">
            Los Angeles’ VS Stars are on the rise amid mega exists
          </h6>
          <p>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut ...
            </small>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default News;
