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
    <div class="main">
      <div class="first">
        <div class="container">
          <div class="firstElement row">
            <div class="col-lg-8 my-auto">
              <h1 class="ptseriffPro f700 largeFont text-white">
                Let's create make your business grow!
              </h1>
            </div>
            <div class="col-lg-4">
              <img class="w-100 my-4" src={Headphone} alt="headphone" />
            </div>
          </div>
        </div>
      </div>
      <div class="extra"></div>
      <div class="second">
        <div class="container">
          <div class="secondElement row">
            <div class="col-lg-7 my-3">
              <form class="boxFirst bg-white py-4" onSubmit={sendEmail}>
                <div class="d-flex flex-wrap mx-4 justify-content-around mt-4">
                  <input
                    class="inputElement mb-4"
                    type="text"
                    placeholder="First Name"
                    name="FirstName"
                  />
                  <input
                    class="inputElement mb-4"
                    type="text"
                    placeholder="Last Name"
                    name="LastName"
                  />
                </div>
                <div class="d-flex flex-wrap mx-4 justify-content-around">
                  <input
                    class="inputElement mb-4"
                    type="text"
                    placeholder="Email Address"
                    name="EmailAddress"
                  />
                  <select class="selectElement mb-4" name="Product">
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
                <div class="d-flex mx-4 justify-content-around">
                  <textarea
                    class="txtArea"
                    rows={5}
                    placeholder="Your Message ..."
                    name="Message"
                  />
                </div>
                <div class="btnClass my-4">
                  <button type="submit" class="btnSendMsg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-5 px-4 my-3">
              <div class="boxSecond quickContact py-4">
                <div class="d-flex flex-wrap justify-content-between px-5 pb-4">
                  <h4 class="ptseriffPro f700 smallFont mt-2">Quick Contact</h4>

                  {/* <select class="selectElementH border-0">
                    <option value="saab">Pune, India</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select> */}
                </div>
                <div class="d-flex px-5 py-4">
                  <div class="">
                    <img src={Call} alt="Call" />
                  </div>
                  <div class="mx-4">
                    <h4
                      class="f400 verySmallFont"
                      style={{ color: '#0B132B99' }}
                    >
                      Phone Number
                    </h4>
                    <h4
                      class="smallFontMid text-break break-all"
                      style={{ color: '#1552F0' }}
                    >
                      +1 (510) 585-4200
                    </h4>
                  </div>
                </div>
                <div class="d-flex px-5 py-4">
                  <div class="">
                    <img src={Mail} alt="Mail" />
                  </div>
                  <div class="mx-4">
                    <h4
                      class="f400 verySmallFont"
                      style={{ color: '#0B132B99' }}
                    >
                      Email Address
                    </h4>
                    <h4
                      class="smallFontMid text-break break-all"
                      style={{ color: '#1552F0' }}
                    >
                      <a href="mailto:info@finexusinc.com" style={{textDecoration:'none'}}>
                        info@finexusinc.com
                      </a>
                    </h4>
                  </div>
                </div>
                <div class="d-flex px-5 py-4">
                  <div class="">
                    <img src={Map} alt="Map" />
                  </div>
                  <div class="mx-4">
                    <h4
                      class="f400 verySmallFont"
                      style={{ color: '#0B132B99' }}
                    >
                      Address
                    </h4>
                    <h4
                      class="smallFontMid text-break break-all"
                      style={{ color: '#1552F0' }}
                    >
                      1901 Thornridge Cir. Shiloh, Hawaii 81063
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="third">
        <div class="container">
          <h4 class="ptseriffPro f700 smallFont my-4">Our Locations</h4>
          <div class="row my-5 pb-4">
            <div class="col my-3">
              <div class="locationBox px-4 py-4 mx-auto">
                <div class="d-flex justify-content-between py-3">
                  <h4 class="smallFontMid2" style={{ color: '#1552F0' }}>
                    USA
                  </h4>
                  <div
                    class="d-flex justify-content-center p-1"
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
                <div class="mb-3">
                  <h4 class="verySmallFont">Address</h4>
                  <h4
                    class="w-75"
                    style={{
                      fontSize: '20px',
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    4597, Donalbain Circle, Fremont, CA - 94555
                  </h4>
                </div>
                <div class="">
                  <h4 class="verySmallFont">Phone</h4>
                  <h4
                    class="smallFontMid2"
                    style={{
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    +1 (781) 752-5204
                  </h4>
                </div>
              </div>
            </div>
            {/* <div class="col my-3">
                            <div class="locationBox px-4 py-4">
                                <div class="d-flex justify-content-between py-3">
                                    <h4
                                        class="smallFontMid2"
                                        style={{ color: "#1552F0" }}
                                    >
                                        Bangalore, India
                                    </h4>
                                    <div
                                        class="d-flex justify-content-center p-1"
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
                                <div class="mb-3">
                                    <h4 class="verySmallFont">Address</h4>
                                    <h4
                                        class="w-75"
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
                                <div class="">
                                    <h4 class="verySmallFont">Phone</h4>
                                    <h4
                                        class="smallFontMid2"
                                        style={{
                                            color: "rgba(11, 19, 43, 0.6)",
                                        }}
                                    >
                                        +1 (781) 752-5204
                                    </h4>
                                </div>
                            </div>
                        </div> */}
            <div class="col my-3">
              <div class="locationBox px-4 py-4 mx-auto">
                <div class="d-flex justify-content-between py-3">
                  <h4 class="smallFontMid2" style={{ color: '#1552F0' }}>
                    Pune, India
                  </h4>
                  <div
                    class="d-flex justify-content-center p-1"
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
                <div class="mb-3">
                  <h4 class="verySmallFont">Address</h4>
                  <h4
                    class="w-75"
                    style={{
                      fontSize: '20px',
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    Sr No. 137, Hissa No. 8 &amp; 1 C, Office No. A3030, Opp.
                    Seasons Mall. Magarpatta Road, Hadapsar, Pune, Maharashtra -
                    411028
                  </h4>
                </div>
                <div class="">
                  <h4 class="verySmallFont">Phone</h4>
                  <h4
                    class="smallFontMid2"
                    style={{
                      color: 'rgba(11, 19, 43, 0.6)'
                    }}
                  >
                    +91 98412 06769
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-5" style={{ color: 'rgba(11, 19, 43, 0.5)' }} />
        </div>
      </div>
      {/* <div class="fourth">
                <div class="blackBg d-flex align-items-center">
                    <div class="container fourthElements">
                        <h1
                            class="ptseriffPro f700 mediumLargeFont text-white my-5 pt-5"
                            style={{ maxWidth: "600px" }}
                        >
                            Ready to grow your business with Finexus?
                        </h1>
                        <div class="row my-5 py-4">
                            <div class="col-lg-3 my-2">
                                <div class="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 class="smallFontMid2">
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
                            <div class="col-lg-3 my-2">
                                <div class="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 class="smallFontMid2">Maintenance</h4>
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
                            <div class="col-lg-3 my-2">
                                <div class="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 class="smallFontMid2">
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
                            <div class="col-lg-3 my-2">
                                <div class="bottomBox d-flex justify-content-between px-4 py-4">
                                    <h4 class="smallFontMid2">Collection</h4>
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
                        <div class="row my-5 py-4">
                            <div class="col-lg-3 my-2">
                                <h4 class="text-white mediumFont">Finexus</h4>
                                <div class="d-flex mt-3">
                                    <img
                                        class="mx-3"
                                        src={Fb2}
                                        alt="Facebook"
                                    />
                                    <img
                                        class="mx-3"
                                        src={Youtube}
                                        alt="Youtube"
                                    />
                                    <img
                                        height="20"
                                        width="20"
                                        class="mx-3"
                                        src={InstaNew}
                                        alt="Instagram"
                                    />
                                    <img
                                        height="20"
                                        width="20"
                                        class="mx-3"
                                        src={LinkedInNew}
                                        alt="LinkedIn"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-3 my-2 text-break break-all">
                                <h4 class="ptseriffPro f700 text-white smallFontMid2 mt-2">
                                    Get Started
                                </h4>
                                <h4
                                    class="verySmallFont mt-3"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    <u>Start a project</u>
                                </h4>
                                <h4
                                    class="verySmallFont"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    contact@finexusinc.com
                                </h4>
                            </div>
                            <div class="col-lg-3 my-2 text-break break-all">
                                <h4 class="ptseriffPro f700 text-white smallFontMid2 mt-2">
                                    Speak to Us
                                </h4>
                                <h4
                                    class="verySmallFont mt-3"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    +1 (406) 555-0120
                                </h4>
                                <h4
                                    class="verySmallFont"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    talk@finexusinc.com
                                </h4>
                            </div>
                            <div class="col-lg-3 my-2 text-break break-all">
                                <h4 class="ptseriffPro f700 text-white smallFontMid2 mt-2">
                                    Address
                                </h4>
                                <h4
                                    class="verySmallFont mt-3"
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
