import React from 'react';
import './ContactForm.scss';
import Call from './Assets/call.png';
import Mail from './Assets/mail.png';
import Map from './Assets/map.png';
import Location from './Assets/location.png';
import Headphone from './Assets/headphone.png';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_tqtwreg',
      'template_ll79m7p',
      e.target,
      'user_BtWxFHQ08SO8yfM9KeiJw'
    )
    .then(
      (result) => {
        console.log(result.text);
        swal({
          title: 'Thank You!',
          text: 'We will get back to you shortly',
          icon: 'success'
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
}

const ContactForm = () => {
  return (
    <div className="main">
      <div className="first">
        <div className="container">
          <div className="firstElement row">
            <div className="col-lg-8 my-auto">
              <h1 className="largeFont text-light">
                Let's create make your business grow!
              </h1>
            </div>
            <div className="col-lg-4">
              <img className="w-100 my-4" src={Headphone} alt="headphone" />
            </div>
          </div>
        </div>
      </div>
      <div className="extra"></div>
      <div className="second">
        <div className="container">
          <div className="secondElement row">
            <div className="col-lg-7 my-3">
              <form
                className="boxFirst bg-white py-4"
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                method="POST"
              >
                <input type="hidden" name="oid" value="00D2x000005O1U3" />
                <input
                  type="hidden"
                  name="retURL"
                  value="http://finexusinc.com/"
                />
                <input type="hidden" name="lead_source" value="Web" />
                <div className="d-flex flex-wrap mx-4 justify-content-around mt-4">
                  <input
                    id="first_name"
                    className="inputElement mb-4"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                  <input
                    id="last_name"
                    className="inputElement mb-4"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                  />
                </div>
                <div className="d-flex flex-wrap mx-4 justify-content-around">
                  <input
                    id="email"
                    className="inputElement mb-4"
                    type="text"
                    placeholder="Email Address"
                    name="email"
                  />
                  <select
                    className="form-select selectElement mb-4"
                    id="00N2x000005EXMz"
                    name="00N2x000005EXMz"
                  >
                    <option disabled selected>
                      Select Product
                    </option>

                    <option value="MobileOrigination">
                      Mobile Origination
                    </option>
                    <option value="Collection">Collection</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="d-flex mx-4 justify-content-around">
                  <textarea
                    className="txtArea"
                    rows={5}
                    placeholder="Your Message ..."
                    name="description"
                  />
                </div>
                <div className="btnClass my-4">
                  <button type="submit" name="submit" className="btnSendMsg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-5 px-4 my-3">
              <div className="boxSecond quickContact py-4">
                <div className="d-flex flex-wrap justify-content-between px-5 pb-4">
                  <h4 className="ptseriffPro f700 smallFont mt-2">
                    Quick Contact
                  </h4>

                  {/* <select className="selectElementH border-0">
                    <option value="saab">Pune, India</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select> */}
                </div>
                <div className="d-flex px-5 py-4">
                  <div className="">
                    <img src={Call} alt="Call" />
                  </div>
                  <div className="mx-4">
                    <h4
                      className="f400 verySmallFont"
                      style={{ color: '#0B132B99' }}
                    >
                      Phone Number
                    </h4>
                    <h4
                      className="smallFontMid text-break break-all"
                      style={{ color: '#1552F0' }}
                    >
                      +1 (781) 752-5204
                    </h4>
                  </div>
                </div>
                <div className="d-flex px-5 py-4">
                  <div className="">
                    <img src={Mail} alt="Mail" />
                  </div>
                  <div className="mx-4">
                    <h4
                      className="f400 verySmallFont"
                      style={{ color: '#0B132B99' }}
                    >
                      Email Address
                    </h4>
                    <h4
                      className="smallFontMid text-break break-all"
                      style={{ color: '#1552F0' }}
                    >
                      <a
                        href="mailto:info@finexusinc.com"
                        style={{ textDecoration: 'none' }}
                      >
                        info@finexusinc.com
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="d-flex px-5 py-4">
                  <div className="">
                    <img src={Map} alt="Map" />
                  </div>
                  <div className="mx-4">
                    <h4
                      className="f400 verySmallFont"
                      style={{ color: '#0B132B99' }}
                    >
                      Address
                    </h4>
                    <h4
                      className="smallFontMid text-break break-all"
                      style={{ color: '#1552F0' }}
                    >
                      4597, Donalbain Circle, Fremont, CA - 94555
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="container">
          <h4 className="ptseriffPro f700 smallFont my-4">Our Locations</h4>
          <div className="row my-5 pb-4">
            <div className="col my-3">
              <div className="locationBox px-4 py-4 mx-auto">
                <div className="d-flex justify-content-between py-3">
                  <h4 className="smallFontMid2" style={{ color: '#1552F0' }}>
                    U.S
                  </h4>
                  <div
                    className="d-flex justify-content-center p-1"
                    style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '80%',
                      border: '1px solid rgba(21, 82, 240, 0.15)',
                      background: 'rgba(21, 82, 240, 0.05)'
                    }}
                  >
                    <img src={Location} alt="Location" />
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="verySmallFont">Address</h4>
                  <h4
                    className="w-75"
                    style={{
                      fontSize: '20px',
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    4597, Donalbain Circle, Fremont, CA - 94555
                  </h4>
                </div>
                <div className="">
                  <h4 className="verySmallFont">Phone</h4>
                  <h4
                    className="smallFontMid2"
                    style={{
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    +1 (781) 752-5204
                  </h4>
                </div>
              </div>
            </div>
            {/* <div className="col my-3">
                            <div className="locationBox px-4 py-4">
                                <div className="d-flex justify-content-between py-3">
                                    <h4
                                        className="smallFontMid2"
                                        style={{ color: "#1552F0" }}
                                    >
                                        Bangalore, India
                                    </h4>
                                    <div
                                        className="d-flex justify-content-center p-1"
                                        style={{
                                            height: "30px",
                                            width: "30px",
                                            borderRadius: "80%",
                                            border: "1px solid rgba(21, 82, 240, 0.15)",
                                            background:
                                                "rgba(21, 82, 240, 0.05)",
                                        }}
                                    >
                                        <img src={Location} alt="Location" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h4 className="verySmallFont">Address</h4>
                                    <h4
                                        className="w-75"
                                        style={{
                                            fontSize: "20px",
                                            color: "rgba(11, 19, 43, 0.6)",
                                        }}
                                    >
                                        244, 4th Main Road, Canara Bank Colony,
                                        Nagarbhavi Main Road, Bangalore,
                                        Karnataka, India 560072
                                    </h4>
                                </div>
                                <div className="">
                                    <h4 className="verySmallFont">Phone</h4>
                                    <h4
                                        className="smallFontMid2"
                                        style={{
                                            color: "rgba(11, 19, 43, 0.6)",
                                        }}
                                    >
                                        +1 (781) 752-5204
                                    </h4>
                                </div>
                            </div>
                        </div> */}
            <div className="col my-3">
              <div className="locationBox px-4 py-4 mx-auto">
                <div className="d-flex justify-content-between py-3">
                  <h4 className="smallFontMid2" style={{ color: '#1552F0' }}>
                    Pune, India
                  </h4>
                  <div
                    className="d-flex justify-content-center p-1"
                    style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '80%',
                      border: '1px solid rgba(21, 82, 240, 0.15)',
                      background: 'rgba(21, 82, 240, 0.05)'
                    }}
                  >
                    <img src={Location} alt="Location" />
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="verySmallFont">Address</h4>
                  <h4
                    className="w-75"
                    style={{
                      fontSize: '20px',
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    Office No. A3030, Marvel Fuego, Opposite Seasons Mall,
                    Amanora Park Town, Hadapsar, Pune, Maharashtra - 411028
                  </h4>
                </div>
                {/* <div className="">
                  <h4 className="verySmallFont">Phone</h4>
                  <h4
                    className="smallFontMid2"
                    style={{
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    +91 98412 06769
                  </h4>
                </div> */}
              </div>
            </div>
          </div>
          <hr className="my-5" style={{ color: 'rgba(11, 19, 43, 0.5)' }} />
        </div>
      </div>
      {/* <div className="fourth">
                <div className="blackBg d-flex align-items-center">
                    <div className="container fourthElements">
                        <h1
                            className="ptseriffPro f700 mediumLargeFont text-white my-5 pt-5"
                            style={{ maxWidth: "600px" }}
                        >
                            Ready to grow your business with Finexus?
                        </h1>
                        <div className="row my-5 py-4">
                            <div className="col-lg-3 my-2">
                                <div className="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 className="smallFontMid2">
                                        Business consulting
                                    </h4>
                                    <img
                                        height="20px"
                                        width="20px"
                                        src={Line}
                                        alt="Line"
                                        style={{
                                            borderBottom: "2px solid #1552F0",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 my-2">
                                <div className="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 className="smallFontMid2">Maintenance</h4>
                                    <img
                                        height="20px"
                                        width="20px"
                                        src={Line}
                                        alt="Line"
                                        style={{
                                            borderBottom: "2px solid #1552F0",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 my-2">
                                <div className="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 className="smallFontMid2">
                                        Mobile Origination
                                    </h4>
                                    <img
                                        height="20px"
                                        width="20px"
                                        src={Line}
                                        alt="Line"
                                        style={{
                                            borderBottom: "2px solid #1552F0",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 my-2">
                                <div className="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 className="smallFontMid2">Collection</h4>
                                    <img
                                        height="20px"
                                        width="20px"
                                        src={Line}
                                        alt="Line"
                                        style={{
                                            borderBottom: "2px solid #1552F0",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr style={{ color: "rgba(255, 255, 255, 0.5)" }} />
                        <div className="row my-5 py-4">
                            <div className="col-lg-3 my-2">
                                <h4 className="text-white mediumFont">Finexus</h4>
                                <div className="d-flex mt-3">
                                    <img
                                        className="mx-3"
                                        src={Fb2}
                                        alt="Facebook"
                                    />
                                    <img
                                        className="mx-3"
                                        src={Youtube}
                                        alt="Youtube"
                                    />
                                    <img
                                        height="20"
                                        width="20"
                                        className="mx-3"
                                        src={InstaNew}
                                        alt="Instagram"
                                    />
                                    <img
                                        height="20"
                                        width="20"
                                        className="mx-3"
                                        src={LinkedInNew}
                                        alt="LinkedIn"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 my-2 text-break break-all">
                                <h4 className="ptseriffPro f700 text-white smallFontMid2 mt-2">
                                    Get Started
                                </h4>
                                <h4
                                    className="verySmallFont mt-3"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    <u>Start a project</u>
                                </h4>
                                <h4
                                    className="verySmallFont"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    contact@finexusinc.com
                                </h4>
                            </div>
                            <div className="col-lg-3 my-2 text-break break-all">
                                <h4 className="ptseriffPro f700 text-white smallFontMid2 mt-2">
                                    Speak to Us
                                </h4>
                                <h4
                                    className="verySmallFont mt-3"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    +1 (406) 555-0120
                                </h4>
                                <h4
                                    className="verySmallFont"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    talk@finexusinc.com
                                </h4>
                            </div>
                            <div className="col-lg-3 my-2 text-break break-all">
                                <h4 className="ptseriffPro f700 text-white smallFontMid2 mt-2">
                                    Address
                                </h4>
                                <h4
                                    className="verySmallFont mt-3"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    3891 Ranchview Dr. Richardson, California
                                    62639
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default ContactForm;
