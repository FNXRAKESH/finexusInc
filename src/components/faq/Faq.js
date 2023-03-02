 
import React from 'react';
import { Link } from 'react-router-dom';
import './Faq.scss'

const Faq = () => {
    return (
      <div id="faq" className="container py-5">
        <div className="row pb-5">
          <div className="col-lg-5">
            <h1>
              Frequently Asked&nbsp;<span>Questions</span>
            </h1>
           
            <Link
              to="/contact"
              className="btn btn-dark mb-5"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Ask us Anything
            </Link>
          </div>
          <div className="col-lg-7">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What all geographies do you serve in?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We currently serve in the USA, Canada and India.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do you customize per client or is it one single solution for
                    all clients?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We take the base product and then configure it to fit in
                    client specific business processes. In addition we also
                    build client specific custom solutions as needed.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How long is a typical project timeline?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    A typical project takes anywhere from 4-6 months. For larger
                    projects the timeline varies based on customer use cases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Faq;