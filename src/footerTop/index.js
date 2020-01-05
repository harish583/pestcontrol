import React from 'react';
import contactIcon1 from '../images/icon/place-icon.png';
import contactIcon2 from '../images/icon/phone-icon.png';
import contactIcon3 from '../images/icon/inbox-icon.png';
class FooterBottom extends React.Component {
  render(){
    return (
      <div className="footerbottom app-content">
        <section className="address_area">
            <div className="container">
                <div className="row address_inner">
                    <div className="col-md-4">
                        <div className="media">
                            <div className="media-left">
                                <img src={contactIcon1} alt="Pest Control Services In Hyderabad" />
                            </div>
                            <div className="media-body">
                                <h4>Office Address :</h4>
                                <h5> 3-3-25/26/502,Anand Nagar,Ramanthapur,Hyderabad-13</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="media">
                            <div className="media-left">
                                <img src={contactIcon2} alt="Pest Control Services In Hyderabad" />
                            </div>
                            <div className="media-body">
                                <a href="tel:9949700744" className="external" target="_blank"><h5>9949700744</h5></a>
                                <a href="tel:8008055750" className="external" target="_blank"><h5>8008055750</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="media">
                            <div className="media-left">
                                <img src={contactIcon3} alt="Pest Control Services In Hyderabad" />
                            </div>
                            <div className="media-body">
                                <a href="mailto:mymarkpest@gmail.com"><h5>mymarkpest@gmail.com</h5></a>
                                <a href="mailto:mymarkpest@gmail.com"><h5>info@mymarkpestcontrol.com</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default FooterBottom;
