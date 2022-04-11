import React, { Component } from 'react';
import './Header.scss';
// import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 import Finexus from '../../images/Finexus.png'
export default class Header extends Component {
  state = { bgColor:'#F5FBFE' };
  componentDidMount = () => {
    window.onscroll = function () {
      // myFunction();
    };

    var navbar = document.getElementById('header');
    var sticky = navbar.offsetTop + 100;
    var logoScroll = document.getElementById('logo');
    var mybutton = document.getElementById('myBtn');
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
        logoScroll.setAttribute('src', logo1);
        mybutton.style.display = 'block';
      } else {
        logoScroll.setAttribute('src', logo);
        navbar.classList.remove('sticky');
        mybutton.style.display = 'none';
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
  };
  render() {
    console.log(this.props);
    return (
      <nav
        id="header"
        className="navbar navbar-expand-lg pt-3"
        style={{
          backgroundColor: this.state.bgColor,
          color: this.state.bgColor == 'white' ? 'black' : 'white'
        }}
      >
        <div className="container">
          <Link
            to="/"
            className="nav-link"
            onClick={() => this.setState({ bgColor: '#F5FBFE' })}
          >
            <img
              className="navbar-brand fw-bold"
              src={Finexus}
              alt="FinexusInc"
            />
          </Link>
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
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => this.setState({ bgColor: 'white' })}
                >
                  About
                </Link>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => this.setState({ bgColor: 'white' })}
                >
                  Solutions
                </Link>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => this.setState({ bgColor: 'white' })}
                >
                  Services
                </Link>
              </li>
              <li
                className="nav-item "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => this.setState({ bgColor: 'white' })}
                >
                  Products
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 me-5">
              <Link to="/contact" id="talk">
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={() => this.setState({ bgColor: '#1552F0' })}
                >
                  Let's Talk
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
