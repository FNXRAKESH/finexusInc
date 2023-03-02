import React from 'react';
import './News.scss';
import blog1 from '../../images/blog/blog1.png';
import blog2 from '../../images/blog/blog2.png';
import blog3 from "../../images/blog/blog3.png";
import blog4 from "../../images/blog/blog4.png";
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div id="news" className="container py-5">
      {/* <div style={{ height: 100 }}></div> */}
      <p style={{ color: "#1552F0" }}>Recent Articles</p>
      <h1>
        <span>News &amp; Insights</span>&nbsp; from our blog
      </h1>
      <div id="blog" className="row">
        <div className="col-md-4">
          <img src={blog1} className="img-fluid pb-3" alt="" />

          <h6 className="pe-5 pt-3 fw-bold">
            How to differentiate in the personal finance market with a mobile
            app for customers
          </h6>
          <p>
            <small>
              Mobile apps are now the touchpoint of choice for consumers
              worldwide for managing their personal financial needs...
            </small>
          </p>
          <Link to="/blog" className="text-primary">
            Read Full Article
          </Link>
        </div>
        <div className="col-md-4">
          <img src={blog2} className="img-fluid pb-3" alt="" />
          <h6 className="pe-5 pt-3 fw-bold">
            How fintech is changing the way we bank, invest &amp; borrow
          </h6>
          <p>
            <small>
              The world of banking is evolving. Thanks to the advent of fintech,
              we can now bank in ways that are faster, easier and more ...
            </small>
          </p>
          <Link to="/blog" className="text-primary">
            Read Full Article
          </Link>
        </div>
        <div className="col-md-4">
          <img src={blog4} alt="" className="img-fluid pb-3" />
          <h6 className="pe-5 pt-3 fw-bold">
            Salesforce-based Loan Collection System
          </h6>
          <p>
            <small>
              The effectiveness of a collection system is determined by how well
              it can meet the needs of its users. In order to be effective ...
            </small>
          </p>
          <Link to="/blog" className="text-primary">
            Read Full Article
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default News;
