import React from 'react';
import './index.scss';
import contactusbanner from '../images/banner-bg.jpg';

class ContactUs extends React.Component {
  render(){
    return (
      <div className="contactus-container-service">
        <div className="swiper-container">
          <img src={contactusbanner} className="swiper-image" alt=""/>
          <span  className="p-a top text-shadow">
    <div>Contact us </div>
    <div>Home / ContactUs</div>
          </span>
        </div>
        <div className="contact-page-area">
        <div className="container app-content">
            <div className="row">
                <div className="col-lg-6 container">
                    <div className="contact-form">
                        <h3><span>Get in </span> touch with us! </h3>
                        <p>Don't hesitate to contact us to get a free Enquiry on Pest Control Services</p>
                        
                        <form className="form-horizontal" action="insert.php" method="POST" encType="multipart/form-data">
                          <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email-n">Name:</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" id="email-n" name="first_name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email-e">Email:</label>
                            <div className="col-sm-10">
                              <input type="email" className="form-control" id="email-e" name="e_mail" placeholder="Email" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email-s">Subject:</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" id="email-s" name="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email-m">Message:</label>
                            <div className="col-sm-10">
                              <textarea className="form-control" id="email-m" name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10 bbb">
                              <button type="submit" className="btn btn-default get_btn_black">Submit</button>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-page-info">
                        <h3>Head Office</h3>
                        <ul className="border-bottom">
                            <li><i className="fa fa-home"></i> 3-3-25/26/502,Anand Nagar,Ramanthapur,Hyderabad-13.</li>
                            <li className=" text-hover-zoom"><i className="fa fa-envelope"></i> mymarkpest@gmail.com </li>
                            <li className=" text-hover-zoom"><i className="fa fa-phone"></i> +91-9949700744 : +91-8008055750</li>
                        </ul>
                        <h3>Branch Office</h3>
                        <ul className="mb-0">
                            <li><i className="fa fa-home"></i> D134,Madhura Nagar,Ameerpet,Hyderabad-38</li>
                            <li><i className="fa fa-envelope"></i> mymarkpest@gmail.com </li>
                            <li className=" text-hover-zoom"><i className="fa fa-phone"></i> +91-9949700744 : +91-8008055750</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
  }
}

export default ContactUs;
