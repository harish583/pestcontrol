import React from 'react';
import {
  NavLink
} from "react-router-dom";
import downarrow from '../images/Down-Arrow-PNG-Image.png';

class HeaderLinks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      locationopen:false,
      servicesopen:false
    }
  }
  locationsDropdownStatus =()=>{
    console.log("open");
    this.setState({
      locationsopen:!this.state.locationsopen,
      servicesopen:false
    })
  }
  servicesDropdownStatus =()=>{
    console.log("open");
    this.setState({
      servicesopen:!this.state.servicesopen,
      locationsopen:false
    })
  }
  render(){
    var locationopen = this.state.locationsopen;
    var serviceopen = this.state.servicesopen;
    return (
      <div className="Header-links-holder">
          <NavLink to="/" exact activeStyle={{ color: 'red' }}>Home</NavLink>
          <NavLink to="/aboutus" activeStyle={{ color: 'red' }}>About Us</NavLink>
          <span className="location-drop-holder">
            <span onClick={this.locationsDropdownStatus}>Locations <img className="downarrooow" src={downarrow} alt="down" /></span>
            {locationopen && <ul>
              <NavLink to="/locations/l1" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>About Us</NavLink>
              <NavLink to="/locations/l2" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>About Us</NavLink>
              <NavLink to="/locations/l3" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>About Us</NavLink>
              <NavLink to="/locations/l4" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>About Us</NavLink>
              <NavLink to="/locations/l5" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>About Us</NavLink>
              <NavLink to="/locations/l6" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>About Us</NavLink>
            </ul> }
          </span>
          <span className="services-drop-holder">
            <span onClick={this.servicesDropdownStatus}>Services <img className="downarrooow" src={downarrow} alt="down"/></span>
            {serviceopen && <ul>
              <NavLink to="/services/l1" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>About Us</NavLink>
              <NavLink to="/services/l2" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>About Us</NavLink>
              <NavLink to="/services/l3" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>About Us</NavLink>
              <NavLink to="/services/l4" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>About Us</NavLink>
              <NavLink to="/services/l5" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>About Us</NavLink>
              <NavLink to="/services/l6" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>About Us</NavLink>
            </ul> }
          </span>
          <NavLink to="/contactus" activeStyle={{ color: 'red' }}>Contact Us</NavLink>
      </div>
    );
  }
}
export default HeaderLinks;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ;
