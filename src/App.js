import React from 'react';
import BodyContent from './BodyContent';
import Header from './Header';
import './App.scss';
import {
  BrowserRouter as Router
} from "react-router-dom";
import FooterBottom from './footerBottom';
import FooterTop from './footerTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends React.Component {
  render(){
    return (
      <div className="App full_app white-back-black-text">
        <Router>
        <div className="header_top_area">
                <div className="container">
                    <div className="pull-left app-content">
                        <a href="tel:9949700744" className="text-hover-zoom"><FontAwesomeIcon icon="fas  fa-phone" /> 9949700744 </a>
                        <a href="https://www.google.com/maps/place/My+Mark+Pest+Control+Services+in+Hyderabad/@17.393285,78.5344503,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb9be47f22546d:0xb1f1a670b32edf30!8m2!3d17.393285!4d78.536639" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fas fa-map- marker" /> 3-3-25/26/502,Anand Nagar,Ramanthapur,Hyderabad-13</a>
                        <a href=""><FontAwesomeIcon icon="mdi mdi-clock" />24-hours</a>
                    </div>
                    {/* <div className="pull-right">
                        <ul className="header_social">
                            <li><a href="https://www.facebook.com/mymarkpestcontrol/" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon="fas fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/Mymark20588134" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon="fas fa-twitter" /></a></li>
                            <li><a href="https://plus.google.com/u/0/110372272849400959298" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon="fas fa-google- plus"/></a></li>
                            <li><a href="https://www.linkedin.com/company/my-mark-pest-control-services/" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon="fas fa-linkedin" /></a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
          <Header />
          <div className="">
            <BodyContent />
          </div>
          
          <FooterTop />
          <FooterBottom />
        </Router>
      </div>
    );
  }
}

export default App;
