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
          <NavLink to="/" exact activeStyle={{ color: 'red' }} className="text-hover-zoom">Home</NavLink>
          <NavLink to="/aboutus" activeStyle={{ color: 'red' }}  className="text-hover-zoom">About Us</NavLink>
          <span className="location-drop-holder">
            <span onClick={this.locationsDropdownStatus} className="text-hover-zoom">Locations <img className="downarrooow" src={downarrow} alt="down" /></span>
            {locationopen && <ul>
              <NavLink to="/locations/l1" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>location1</NavLink>
              <NavLink to="/locations/l2" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>location2</NavLink>
              <NavLink to="/locations/l3" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>location3</NavLink>
              <NavLink to="/locations/l4" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>location4</NavLink>
              <NavLink to="/locations/l5" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>location5</NavLink>
              <NavLink to="/locations/l6" activeStyle={{ color: 'red' }}  onClick={this.locationsDropdownStatus}>location6</NavLink>
            </ul> }
          </span>
          <span className="services-drop-holder">
            <span onClick={this.servicesDropdownStatus} className="text-hover-zoom">Services <img className="downarrooow" src={downarrow} alt="down"/></span>
            {serviceopen && <ul>
              <NavLink to="/services/termitepestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>termite pest control</NavLink>
              <NavLink to="/services/cockroachpestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>cockroach pest control</NavLink>
              <NavLink to="/services/bedbugpestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>bedbug pest control</NavLink>
              <NavLink to="/services/antpestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>ant pest control</NavLink>
              <NavLink to="/services/beepestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>bee pest control</NavLink>
              <NavLink to="/services/spiderpestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>spider pest control</NavLink>
              <NavLink to="/services/Rodentpestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>Rodent pest control</NavLink>
              <NavLink to="/services/snakepestcontrolservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>snake pest control</NavLink>
              <NavLink to="/services/Mosquitopestcontrol" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>Mosquito pest control</NavLink>
              <NavLink to="/services/Mosquitomeshservices" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>Mosquitomesh control</NavLink>
              <NavLink to="/services/residentialpestcontrol" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>residential pest control</NavLink>
              <NavLink to="/services/Commericalpestcontrol" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>Commerical pest control</NavLink>
              <NavLink to="/services/industrialpestcontrol" activeStyle={{ color: 'red' }} onClick={this.servicesDropdownStatus}>industrial pest control</NavLink>
            </ul> }
          </span>
          <NavLink to="/contactus" activeStyle={{ color: 'red' }} className="text-hover-zoom">Contact Us</NavLink>
      </div>
    );
  }
}
export default HeaderLinks;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ;
