import React, { useEffect } from 'react';
// import WebinarForm from './WebinarForm';
import dhiman from '../../images/webinar/dhimanB.png';
import web from '../../images/webinar/web.png';
import zoom from '../../images/webinar/zoom.png';
import tick from '../../images/webinar/tick.png';
import arrow from '../../images/webinar/btnarrow.png';
import { useTimer } from 'react-timer-hook';
import moment from 'moment';
import WebinarForm from './WebinarForm';

var time = new Date();
const end = moment([2022, 8, 12]);
console.log('duration ', end, time);
const duration = end.diff(time, 'seconds');
// const duration = moment().add(14, 'days').calendar();
console.log('gap ', duration);

time.setSeconds(time.getSeconds() + duration); // 10 minutes timer

const MyTimer = ( expiryTimestamp ) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called')
  });

  return (
    <div id="timer" className="py-3">
      <div>
        <h6 className="m-0">{days}</h6>
        <p>days</p>
      </div>
      <span>&nbsp;:&nbsp;</span>
      <div>
        <h6 className="m-0">{hours}</h6>
        <p>hours</p>
      </div>
      <span>&nbsp;:&nbsp;</span>
      <div>
        <h6 className="m-0">{minutes}</h6>
        <p>mins</p>
      </div>
      <span>&nbsp;:&nbsp;</span>
      <div>
        <h6 className="m-0">{seconds}</h6>
        <p>secs</p>
      </div>
    </div>
  );
}

const Webinar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Finexus Inc | Webinar`;
    
  }, []);
  return (
    <>
      <div className="blueBackground">
        <div className="bg"></div>
        <div id="webinar" className="container py-5">
          <div className="row justify-content-center align-items-center mt-5 pt-3">
            <div className="col-md-7">
              <img src={web} alt="" />
              <h1 className="pt-4 fw-bold">
                Effective Collection Solution in Consumer Lending
              </h1>
              <div className="time my-4">
                <h6 className="m-0">Friday, August 12 | 11 AM PST</h6>
              </div>
              <p className="text-light">
                <small className="fw-bold">
                  Introducing our featured speaker
                </small>
              </p>
              <hr className='text-light w-50'/>
              <div id="presenter" className="d-flex align-items-center pb-4">
                <img src={dhiman} alt="" height={90} />
                <div className="ps-3">
                  <h3 className="mb-1 fw-bold text-light"> Dhiman Bhattacharjee</h3>
                  <h6 className="m-0">CEO, Lending Expert, Finexus</h6>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                id="reg"
                className="bg-light d-flex flex-column align-items-center justify-content-center py-5 px-2"
              >
                <WebinarForm />
              </div>
              {/* <div
                id="reg"
                className="bg-light d-flex flex-column align-items-center justify-content-center p-5"
              >
                <img src={zoom} alt="" className="img-fluid" />
                <h4 className="pt-5 fw-bold text-center">Registration Open!</h4>
                <MyTimer expiryTimestamp={time} />
                <a
                  href="https://us02web.zoom.us/webinar/register/WN_w_rkUio8Sy2ZOcc2xowEGw"
                  target="_blank"
                  className="btn btn-primary mt-3 w-100 p-3"
                >
                  Join Now <img src={arrow} alt="" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" container py-5 mt-5">
        <p>
          Loan collection has been around as long as there has been lending and
          probably is older than the history of lending itself. Presently, loan
          collection and loan collectors are subject to state and federal
          regulations. Maintaining all the compliance and regulation
          requirements, lenders look to increase debt recovery rates with a
          better, more advanced collection system.
        </p>
        <p className="fw-bold">
          In this webinar, you’ll learn how fintech lenders use the collections
          management systems to lift recovery rates and improve client
          relationships by:
        </p>
        <ul>
          <li>
            <img src={tick} alt="" />
            <p>
              Computing a robust set of collection-specific scores and
              attributes that can be used to segment and prioritize your
              portfolio. This helps you to focus on accounts with a higher
              probability of repayment.
            </p>
          </li>
          <li>
            {' '}
            <img src={tick} alt="" />
            <p>
              Smart assignment to collector agents based on a combination of
              parameters including workload, region, seniority, and customer
              type.
            </p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>
              Automated monitoring of accounts, notifications when any relevant
              event happens
            </p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>
              Direct integration to the loan management system for real-time
              updates and sync between loan servicing and loan collections
            </p>
          </li>
          <li>
            {' '}
            <img src={tick} alt="" />
            <p>Easy execution of loan cure actions</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>
              Staying compliant with consumer protection laws, including
              bankruptcy and legal requirements
            </p>
          </li>
          <li>
            {' '}
            <img src={tick} alt="" />
            <p>
              Using automated workflows to reduce complexity and execution time.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Webinar;
