import React from 'react';
import ico from '../images/3rd.png';
class FooterTop extends React.Component {

  render(){
    return (
      <div className="footer-top">
        <footer className="footer_area">
            <div className="footer_widgets_area">
                <div className="">
                    <div className="row footer_widgets_inner app-content">
                        <div className="col-md-3 col-sm-6">
                            <aside className="f_widget about_widget">
                                <img src={ico} alt="Pest Control Services In Hyderabad" />
                                <p>My Mark Pest Control Services is the Leading Pest Control Services Provider in Hyderabad. We provide all types of Pest Control Solution. If you have any pest we have a solution.</p>
                                {/* <ul>
                                    <li><a href="https://www.facebook.com/mymarkpestcontrol/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/Mymark20588134" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://plus.google.com/u/0/110372272849400959298" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/my-mark-pest-control-services/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                </ul> */}
                            </aside>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <aside className="f_widget recent_widget">
                                <div className="f_w_title">
                                    <h3>Services</h3>
                                </div>
                                <div className="recent_w_inner">
                                    <div className="media">
                                        <div className="media-body">
                                            <a href="#"><p>Anti-Termite</p></a>
                                        </div>
                                    </div>
                                    <div className="media">                                        
                                        <div className="media-body">
                                            <a href="#"><p>Cockroach</p></a>
                                        </div>
                                    </div>
									<div className="media">
                                        <div className="media-body">
                                            <a href="#"><p>Bedbug</p></a>
                                        </div>
                                    </div><div className="media">
                                        <div className="media-body">
                                            <a href="#"><p>Residential</p></a>
                                        </div>
                                    </div><div className="media">
                                        <div className="media-body">
                                            <a href="#"><p>Industrial</p></a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <aside className="f_widget address_widget">
                                <div className="f_w_title">
                                    <h3>Office Address</h3>
                                </div>
                                <div className="address_w_inner">
                                    <div className="media">
                                        <div className="media-left">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="media-body">
                                            <p> 3-3-25/26/502,Anand Nagar,Ramanthapur,Hyderabad-13.</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="media-body">
                                            
                                <a href="tel:9949700744" className="external" target="_blank"><p>9949700744</p></a>
                                <a href="tel:8008055750" className="external" target="_blank"><p>8008055750</p></a>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="media-body">
                                            
                                <a href="mailto:mymarkpest@gmail.com"><p>mymarkpest@gmail.com</p></a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <aside className="f_widget give_us_widget">
                                <h5>Give Us A Call</h5>
                                <a href="tel:9949700744" className="external" target="_blank"><h4>9949700744</h4></a>
                                <h5>or</h5>
                                <a className="get_bg_btn" href="contactus.html">GET A QUOTE</a>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copy_right">
                <div className="container">
                    <h4>
                    Copyright ©{new Date().getFullYear()}2020 All rights reserved By <a href="/" target="_blank"> My Mark Pest Control</a></h4>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default FooterTop;
