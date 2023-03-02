import React, { useState } from 'react';
import './WebinarForm.scss';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const WebinarForm = (props) => {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('Select...');
  const [webinarId, setWebinarId] = useState(84889368257);
  const [currentDate, setCurrentDate] = useState(moment(new Date()));
  const [endDate, setEndDate] = useState(moment([2022, 7, 12]));

  const bearer =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6Im12RFNqSTRxUW1lMEhHUkt1blNUTWciLCJleHAiOjE2OTY5NjI2MDAsImlhdCI6MTY1MzM4MTQ3Nn0.4DKiX3D2EkhTa9ldR_GdxtW5Dm9jSHNfv2ZH4XsNrD0';
  const handleSubmit = async (e) => {
    fetch('http://13.235.132.34:9091/registrants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        country,
        phone,
        jobTitle,
        companyName,
        webinarId,
        bearer
      })
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Success:', res);
        if (res.data == 'record added') {
          swal({
            text: 'You have been Successfully registered'
          });
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setCompanyName('');
          setJobTitle('');
          setCountry('Select...');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div id="webinarForm" className="container">
      <div className="d-flex justify-content-between flex-wrap">
        <div className="flex-grow-1">
          <h4>Registration Open!</h4>
        </div>

        <div>
          <p className="timeLeft m-0 p-0">
            <small>Time Remaining</small>
          </p>
          <p className="m-0 p-0 d-flex align-items-center">
            <FontAwesomeIcon
              icon={faCalendarMinus}
              color="#FF4848"
              style={{ fontSize: 13 }}
            />
            <small
              className="ps-2 fw-bold"
              style={{ color: '#FF4848', fontSize: 13 }}
            >
              {endDate.diff(currentDate, 'days')} Days
            </small>
          </p>
        </div>
      </div>
      <hr />
      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        method="POST"
      >
        <input type="hidden" name="oid" value="00D2x000005O1U3" />
        <input
          type="hidden"
          id="lead_source"
          name="lead_source"
          value="Website"
        />
        <input
          type="hidden"
          name="retURL"
          value="https://finexusinc.com/#/webinar"
        />
        {/* <div className="my-3">
            <label htmlFor="firstName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div> */}
        <div className="my-3">
          <label htmlFor="lastName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="row my-3">
          <div className="col-6">
            <label htmlFor="companyName" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="col-6">
            <label htmlFor="jobTitle" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
        </div>
        {/* <div className="my-3">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="jobTitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="Country" className="form-label">
              Country
            </label>
            <select
              id="country"
              name="country"
              aria-labelledby="LblCountry InstructCountry"
              className="form-select"
              aria-required="true"
              aria-invalid="true"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>Select your country</option>
              <option value="CA">Canada</option>
              <option value="US">United States</option>
            </select>
          </div> */}
        <div>
          <button
            type="submit"
            name="submit"
            className="btn btn-primary mt-3 w-100"
          >
            Register &amp; Set Reminder
          </button>
        </div>
      </form>
    </div>
  );
};

export default WebinarForm;
