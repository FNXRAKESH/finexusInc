import React from 'react';
import Consultancy from '../components/consultancy/Consultancy';
import Faq from '../components/faq/Faq';
import Intro from '../components/Intro/Intro';
import News from '../components/News/News';
import OurProducts from '../components/products/Products';
import Services from '../components/services/Services';
import Solutions from '../components/solutions/Solutions';
import WhyUs from '../components/whyus/WhyUs';

const Landing = () => {
    return (
      <>
        <Intro />
        <Services />
        <OurProducts />
        <div
          style={{ backgroundColor: '#fff', height: 200 }}
          className="d-none d-md-block"
        ></div>
        <Solutions />
        <Consultancy />
        <div
          style={{ backgroundColor: '#fff', height: 100 }}
          className="d-none d-md-block"
        ></div>
        <WhyUs />
        <News />
        <Faq />
      </>
    );
}
 
export default Landing;