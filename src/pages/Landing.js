import React, { useEffect } from 'react';
import Consultancy from '../components/consultancy/Consultancy';
import Events from '../components/events/Events';
import Faq from '../components/faq/Faq';
import Intro from '../components/Intro/Intro';
import News from '../components/News/News';
import OurProducts from '../components/products/Products';
import Services from '../components/services/Services';
import Solutions from '../components/solutions/Solutions';
import WhyUs from '../components/whyus/WhyUs';

const Landing = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
     document.title = `Finexus Inc`;
  }, [])
    
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
        <Consultancy props={props} />
        <div
          style={{ backgroundColor: '#fff', height: 100 }}
          className="d-none d-md-block"
        ></div>
        <WhyUs />
        {/* <Events props={props} /> */}
        <News />
        <Faq />
      </>
    );
}
 
export default Landing;

//(510) 585-4200