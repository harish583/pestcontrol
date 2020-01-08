import React from 'react';
import icon from '../images/2nd.png';
 import HeaderLinks from '../HeaderLinks';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
    };
  }
  render(){
    return (
      <div className="Header-holder">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <Link to="/" className="ico-holder inline-block">
            <img src={icon} alt="logo"/>
          </Link>
          <HeaderLinks />
      </nav>
      </div>
    );
  }
}

export default Header;
