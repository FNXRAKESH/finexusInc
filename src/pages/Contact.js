import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
         document.title = `Finexus In | Contact Us`;
    },[])
    return (<>
    <ContactForm />
    </>);
}
 
export default Contact;