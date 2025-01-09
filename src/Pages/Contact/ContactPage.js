import React from 'react';
import './ContactPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import ScrollToTop from '../../Components/ScrollTop/ScroolTop';
import Footer from '../../Components/Footer/Footer';



const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (


    <>  
        <div className='NavBarCover'>
    <NavBar/>
    <ScrollToTop/>
</div>
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-intro">
          <p>
            Thanks for your interest in contacting us. We try to respond to all queries within 2 business days.
          </p>
          <p>
            If your question is urgent, we encourage you to check our FAQ section, which has answers to our most commonly asked questions!
          </p>
          <a href="#faqs" className="faq-link">
            Click here to visit the FAQs
          </a>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                E-mail <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="form-input"
              />
            </div>

            <div className="submit-container">
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <div className="address-section">
          <h2 className="address-title">Address</h2>
          <div className="address-content">
            <p>Lusaka,Zambia,</p>
            <p>Lusaka</p>
            <p>Freedom way</p>
            <p className="email-info">
              Email: <a href="nudefeetfootwear@gmail.com">nudefeetfootwear@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='footerCover'>
          <Footer/>
      </div>
    </>
    
  );
};

export default ContactPage;