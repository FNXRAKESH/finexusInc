import React, { useEffect, useState } from "react";
import "./Blog.scss";
import bg from "../../images/blog/header.png";
import dhiman from "../../images/blog/dhiman.png";
import blogone from "../../images/blog/blogone.png";
import blogtwo from "../../images/blog/blogtwo.png";
import blogthree from "../../images/blog/blogthree.png";
import blogfour from "../../images/blog/blogfour.png";
import fb from "../../images/blog/fb.png";
import twitter from "../../images/blog/twitter.png";
import whatsapp from "../../images/blog/whatsapp.png";
import moment from "moment";
const Article = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="blogs">
      <div className="headerImg">
        <div className="bgOverLay"></div>
        <img src={bg} alt="bg" className="img-fluid" />
      </div>
      <div className="headerText py-5">
        <p className="pt-5">
          <small>Business</small>
        </p>
        <h1 className="text-center">
          How to differentiate in the personal finance market
          <br /> with a mobile app for customers
        </h1>
        <div className="d-flex align-items-center justify-content-center p-4">
          <img src={dhiman} alt="Dhiman" />
          <div className="ps-2">
            <h5>Dhiman Bhattacharjee</h5>
            <h5>
              <small>CEO &amp; Co-founder</small>
            </h5>
          </div>
          <p className="px-4">|</p>
          <div>
            <h5>5 Min Read</h5>
            <h5>
              <small>May 15, 2022</small>
            </h5>
          </div>
        </div>
      </div>
      <div className="container">
        <img src={bg} alt="bg" className="img-fluid" />
        <div className="container content py-5">
          <div className="row justify-content-center">
            <div className="col-11">
              <h3 style={{ lineHeight: 40 + "px" }}>
                Mobile apps are now the touchpoint of choice for consumers
                worldwide for managing their personal financial needs, including
                bill payment, fund transfer, or taking a new loan to cover
                temporary cash shortfall. The superior mobile experience is the
                new viable means to differentiate. Banks and Fintech companies
                constantly iterate their consumer mobile apps to ensure that
                they successfully meet or exceed ever-changing customer needs.
              </h3>
              <p>
                The key functionalities of a contemporary consumer finance app
                includemaintaining a savings account, making payments, taking
                loans, buying insurance, managing investments, trading stocks,
                tracking credit accounts, making mortgage payments, and
                buying/selling cryptocurrencies. Today’s finance app centers
                around financial activities for which consumers traditionally
                turned to banks. Traditional players, banks, and FinTechs
                provide these personal services through apps with improved user
                experience and reduced costs. Apart from conventional banking
                customers, it also appeals to the millennials' atypical banking
                customers.{" "}
                <span className="fw-bold">
                  They are attached to their smartphone and its apps, including
                  listening to music on iTunes, socializing on Facebook, buying
                  on Amazon, and traveling using Uber. For this generation,
                  banking is more appealing when accessed through a mobile app.
                </span>
              </p>
              <img src={blogone} alt="" className="img-fluid" />
              <h3>Payment App</h3>
              <p>
                2021 has seen a different world; circumstances have played a
                massive role in quickly promoting digital activities across the
                board, including in the financial services world. For instance,
                online payments in general, and mobile payments, have seen
                significant expansion last year. Mobile payment apps
                facilitating intuitive, UX-driven payments between individuals
                and companies have grown exponentially. Easy-to-use UI with
                guided navigation and the simplified transaction has made the
                mobile payments apps a potent competitor in the traditional
                payments market. We have seen several banks and Fintechs across
                geographies enhancing or embracing mobile payments solutions
                organically or through partnership or acquisition.
              </p>
              <img src={blogtwo} alt="" className="img-fluid" />
              <p>
                Apart from providing payment solutions, these payment apps also
                function as mobile wallets, proximity payments, and post-pay.
                Mobile wallets integrate with bank accounts to enable direct
                costs to other individuals and businessesthroughthe app.
                Proximity payments allow consumers to make in-person contactless
                payments usingone'ssmartphones. Post-pay will enable consumers
                to buy online now and receive the purchase invoice later once
                the goods are delivered. These capabilities have helped
                consumers continue with their daily lives while the world was
                shutdown due to the spread of the pandemic.
              </p>
              <h3>Loan App</h3>
              <p>
                The mobile lending app allows consumers to avail round-the-clock
                borrowing facility. App-based lending is mostly for small-ticket
                consumer loans replacing the need to request short-term capital
                from family and friends. Consumers tap their mobile app for
                instant loans, omitting the need for a loan-drawn physical loan
                application process. The loan origination and approval process
                are instantaneousonce the applicant enters their relevant
                details in the loan application available through the app.If
                approved, the loan amount is automatically disbursed to the
                applicant's bank account.
              </p>
              <img src={blogthree} alt="" className="img-fluid" />
              <p>
                The mobile lending app also allows users to keep track of their
                online borrowing status, including checking outstanding debt,
                making periodic payments, and requesting occasional payment
                deferral. There are also options to sign up for automated
                payment notifications.
              </p>
              <h3>Insurance App</h3>
              <p className="m-0">
                Insurance apps put options at consumers' fingertips. Carriers
                offer homeowners, renters, vehicle, health, and term life
                insurance powered through mobile apps. There is usually no
                paperwork, no human involvement, hence minimal hassle. There are
                no brokers; instead, there are bots. With instant everything,
                consumers get an insurance quote in minutes.
              </p>
              <p>
                Consumers can file claims, get instant approval, and experience
                a smoother, faster claim resolution and payment through the
                insurance app.
              </p>
              <h3>Investment app</h3>
              <p className="m-0">
                These apps allow consumers to investin stocks, ETFs, and options
                directly from their mobile devices. In some cases, consumers can
                also buy and sell cryptocurrencies and other forms of
                investments. Typically, the providers are online brokerages
                offering a low or no-commission investing and trading
                platform.Some of these apps also provide recurring investment
                features and cash management services.
              </p>
              <p>
                With its inherent capabilities, each of these apps integrates
                with our daily lives in ways financial service providers have
                not been able to do before. Apart from these services, these
                mobile apps often provide additional, value-added capabilities
                in the same platform, such as budget management tools, spending
                trackers, and automated alerts and reminders.
              </p>
              <h3>The current trend – the super-app</h3>
              <p>
                Instead of providing a particular service, a super-app offers
                multiple benefits,including payment, loan, and financial
                transaction processing, all within one single app. This
                effectively becomes an all-encompassing self-contained mobile
                commerce and communication platform easing multiple aspects of
                personal finance. Banks and financial technology companies are
                heading more and more towards offering super-apps for their
                retail customers.
              </p>
              <img src={blogfour} alt="" className="img-fluid" />
              <p>
                This trend will amplify more in 2022 and beyond as financial
                institutions are getting broader acceptance and proliferation of
                their existing mobile apps. Already popular in Asia and Latin
                America, other markets are increasingly embracing a super-app
                approach. Ease of use, the universality of different financial
                services, and the power of data-driven insights could soon make
                super-apps a dominant force in the financial services market.
              </p>
              <div className="blogHighlight p-5">
                <h3>Finexus Mobile Financial App</h3>
                <p>
                  Finexus is a product and services company for FinTechs and
                  Banks. Based out of San Francisco Bay area and Pune, India,
                  Finexus builds and implements end-to-end lending management
                  solutions for financial service providers. Our team is highly
                  experienced in lending and related financial services. We are
                  building a white-label mobile financial app product with
                  customizable services, workflows, integrations, and branding
                  shortly. Please get in touch with us at{" "}
                  <a className="text-primary" href="mailto:info@finexusinc.com">
                    info@finexusinc.com
                  </a>{" "}
                  for more information.
                </p>
              </div>
              <hr />

              <div
                id="blogFooter"
                className="d-flex align-items-center flex-wrap"
              >
                <img src={dhiman} alt="dhiman" />
                <div className="ps-4 flex-grow-1">
                  <h5>Dhiman Bhattacharjee</h5>
                  <h5>
                    <small>May 15, 2022 . 5 Min Read</small>
                  </h5>
                </div>
                <p>
                  <span className="pe-4">#Financial Wellness</span>{" "}
                  <span>COVID-19</span>
                </p>
              </div>
            </div>
            <div
              id="social"
              className="col-1 d-flex flex-column align-items-end"
            >
              <img src={fb} alt="" className="img-fluid" />
              <img src={twitter} alt="" className="img-fluid" />
              <img src={whatsapp} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="newsletter p-5 mb-5">
          <h4>Subscribe to our Newsletter</h4>
          <small>Lower turnover among employee users.</small>
          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <input
                type="password"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
