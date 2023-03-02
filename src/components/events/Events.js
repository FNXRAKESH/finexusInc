import React from 'react';
import './Events.scss'
import { useNavigate } from 'react-router-dom';

import banner from '../../images/webinar/banner1.png'
const Events = (props) => {
    const history = useNavigate();
     
    return (
      <div id="events" className="container py-5 mt-5">
        <div className="row">
          <div className="col-md-5">
            <h1>
              Upcoming&nbsp;
              <span>Events</span>
            </h1>
            <p>
              We work with companies across North America, Asia &amp; Europe
              offering our fintech products and services.
            </p>
          </div>
          <div
            className="col-md-7"
            style={{ cursor: 'pointer' }}
          >
            <img src={banner} alt="" className="img-fluid" />
          </div>
          {/* <div
            className="col-md-7"
            onClick={() => history('webinar')}
            style={{ cursor: 'pointer' }}
          >
            <img src={banner} alt="" className="img-fluid" />
          </div> */}
        </div>
      </div>
    );
}
 
export default Events;