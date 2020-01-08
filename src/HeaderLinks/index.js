import React from 'react';
import {
  NavLink
} from "react-router-dom";
import downarrow from '../images/Down-Arrow-PNG-Image.png';

class HeaderLinks extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Header-links-holder">
          <NavLink to="/" exact activeStyle={{ color: 'red' }} className="text-hover-zoom">Home</NavLink>
          <NavLink to="/aboutus" activeStyle={{ color: 'red' }}  className="text-hover-zoom">About Us</NavLink>
          <span className="location-drop-holder">
            <span className="text-hover-zoom">Locations <img className="downarrooow" src={downarrow} alt="down" /></span>
            <ul>
              <NavLink to="/locations/l1" activeStyle={{ color: 'red' }} >location1</NavLink>
              <NavLink to="/locations/l2" activeStyle={{ color: 'red' }} >location2</NavLink>
              <NavLink to="/locations/l3" activeStyle={{ color: 'red' }} >location3</NavLink>
              <NavLink to="/locations/l4" activeStyle={{ color: 'red' }} >location4</NavLink>
              <NavLink to="/locations/l5" activeStyle={{ color: 'red' }} >location5</NavLink>
              <NavLink to="/locations/l6" activeStyle={{ color: 'red' }} >location6</NavLink>
            </ul>
          </span>
          <span className="services-drop-holder">
            <span className="text-hover-zoom">Services <img className="downarrooow" src={downarrow} alt="down"/></span>
            <ul>
              <NavLink to="/services/termitepestcontrolservices" activeStyle={{ color: 'red' }}>termite pest control</NavLink>
              <NavLink to="/services/cockroachpestcontrolservices" activeStyle={{ color: 'red' }}>cockroach pest control</NavLink>
              <NavLink to="/services/bedbugpestcontrolservices" activeStyle={{ color: 'red' }}>bedbug pest control</NavLink>
              <NavLink to="/services/antpestcontrolservices" activeStyle={{ color: 'red' }}>ant pest control</NavLink>
              <NavLink to="/services/beepestcontrolservices" activeStyle={{ color: 'red' }}>bee pest control</NavLink>
              <NavLink to="/services/spiderpestcontrolservices" activeStyle={{ color: 'red' }}>spider pest control</NavLink>
              <NavLink to="/services/Rodentpestcontrolservices" activeStyle={{ color: 'red' }}>Rodent pest control</NavLink>
              <NavLink to="/services/snakepestcontrolservices" activeStyle={{ color: 'red' }}>snake pest control</NavLink>
              <NavLink to="/services/Mosquitopestcontrol" activeStyle={{ color: 'red' }}>Mosquito pest control</NavLink>
              <NavLink to="/services/Mosquitomeshservices" activeStyle={{ color: 'red' }}>Mosquitomesh control</NavLink>
              <NavLink to="/services/residentialpestcontrol" activeStyle={{ color: 'red' }}>residential pest control</NavLink>
              <NavLink to="/services/Commericalpestcontrol" activeStyle={{ color: 'red' }}>Commerical pest control</NavLink>
              <NavLink to="/services/industrialpestcontrol" activeStyle={{ color: 'red' }}>industrial pest control</NavLink>
            </ul>
          </span>
          <NavLink to="/contactus" activeStyle={{ color: 'red' }} className="text-hover-zoom">Contact Us</NavLink>
      </div>
    );
  }
}
export default HeaderLinks;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ;
