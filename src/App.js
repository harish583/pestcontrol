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
  constructor(props){
    super(props);
    this.state={
      factslist:[],
      searchkey:new Date().getTime()
    }
  }
  render(){
    return (
      <div className="App full_app white-back-black-text">
        <Router>
        <div className="header_top_area">
                <div className="container">
                    <div className="pull-left app-content">
                        <a href="tel:9949700744" className="external" target="_blank"><FontAwesomeIcon icon="fas  fa-phone" /> 9949700744 </a>
                        <a href=""><FontAwesomeIcon icon="fas fa-map- marker" /> 3-3-25/26/502,Anand Nagar,Ramanthapur,Hyderabad-13</a>
                        <a href=""><FontAwesomeIcon icon="mdi mdi-clock" />24-hours</a>
                    </div>
                    {/* <div className="pull-right">
                        <ul className="header_social">
                            <li><a href="https://www.facebook.com/mymarkpestcontrol/" target="_blank"><FontAwesomeIcon icon="fas fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/Mymark20588134" target="_blank"><FontAwesomeIcon icon="fas fa-twitter" /></a></li>
                            <li><a href="https://plus.google.com/u/0/110372272849400959298" target="_blank"><FontAwesomeIcon icon="fas fa-google- plus"/></a></li>
                            <li><a href="https://www.linkedin.com/company/my-mark-pest-control-services/" target="_blank"><FontAwesomeIcon icon="fas fa-linkedin" /></a></li>
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
