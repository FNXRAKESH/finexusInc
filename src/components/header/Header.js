import React, { Component, useEffect, useState } from 'react';
import './Header.scss';
import { createBrowserHistory } from 'history';
// import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Finexus from '../../images/Finexus.png';
import finexusWhite from '../../images/finexusWhite.png';
import { useNavigate } from 'react-router-dom';
 
 

const Header = () => {
  const [logo, setLogo] = useState(Finexus);
  const [fontColor, setFontColor] = useState('#000');
  const [bgColor, setBgColor] = useState('transparent');
    const history = useNavigate();
  useEffect(() => {
    console.log('this ', location);
    if (location.hash == '#/webinar' || location.hash == '#/contact') {
      setLogo(finexusWhite);
      setFontColor('#fff');
      setBgColor('#1552F0');
    } else if (location.hash == '#/') {
      setLogo(Finexus);
      setBgColor(null);
      setFontColor('#000');
    }
      window.onscroll = function () {
        myFunction();
      };

    var navbar = document.getElementById('header');
    var sticky = navbar.offsetTop + 250;
    
    // var mybutton = document.getElementById('myBtn');
    function myFunction(e) {
      
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
        setLogo(Finexus);
        setFontColor('#000')
        setBgColor(null);
        //  this.setState({ logo: Finexus });
        // logoScroll.setAttribute('src', logo1);
        // mybutton.style.display = 'block';
      } else {
        // logoScroll.setAttribute('src', logo);
        navbar.classList.remove('sticky');
        if (location.hash == '#/webinar' || location.hash == '#/contact') {
          setLogo(finexusWhite);
          setFontColor('#fff');
          setBgColor('#1552F0');
        }
        // mybutton.style.display = 'none';
      }
    }
    // $('.nav-item .nav-link').on('click', function () {
    //   $('.nav-item').find('.active').removeClass('active');
    //   $(this).addClass('active');
    // });
    // $('.dropdown > .dropdown-menu > .dropdown-item').click(function () {
    //   $('.nav-item').find('.active').removeClass('active');
    //   $(this).parent().parent().find('.nav-link').addClass('active');
    // });
   
  })
 
    
    
    return (
      <nav
        id="header"
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: bgColor
        }}
      >
        <div id="header1"></div>
        <div className="container-fluid">
          <div className="px-4">
            <img
              className="navbar-brand fw-bold"
              src={logo}
              alt="FinexusInc"
              onClick={() => {
                history('/');
                setLogo(Finexus);
                setFontColor('#000');
                setBgColor('transparent');
              }}
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} color="#15A1F0" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto me-5 flex-grow-1">
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                {window.innerWidth <= 760 ? <HashLink
                  to="/#aboutus"
                  className="nav-link"
                  style={{ color: fontColor }}
                >
                  About
                </HashLink> :
                  <HashLink
                    to="/#about"
                    className="nav-link"
                    style={{ color: fontColor }}
                  >
                    About
                  </HashLink>}
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <HashLink
                  to="/#solutions"
                  className="nav-link"
                  style={{ color: fontColor }}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  Solutions
                </HashLink>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <HashLink
                  to="/#consultancy"
                  className="nav-link"
                  style={{ color: fontColor }}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  Services
                </HashLink>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <HashLink
                  to="/#ourProducts"
                  className="nav-link"
                  style={{ color: fontColor }}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  Products
                </HashLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 me-5">
              <Link to="/contact" id="talk">
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  style={{ color: fontColor }}
                  // onClick={() => this.setState({ bgColor: '#1552F0' })}
                >
                  <FontAwesomeIcon icon={faCommentDots} color={fontColor} />
                  &nbsp;Let's Talk
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }

export default  Header