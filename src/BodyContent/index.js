import React from 'react';
import HomeComponent from '../HomeComponent';
import {
  Switch,
  Route
} from "react-router-dom";
import AboutUs from '../aboutUs';
import Service from '../services';
import ContactUs from '../contactUs';
import services from '../content/services'; 

class BodyContent extends React.Component {
  
  render(){
    var service = services;
    return (
      <div className="BodyContent">
          <Switch>
            <Route path="/" exact><HomeComponent /></Route>
            <Route path="/aboutus"><AboutUs /></Route>
            <Route path="/contactus"><ContactUs /></Route>
            {services.map((service,i)=>
              <Route path={service.url}><Service Service={service}/></Route>
            )}
          </Switch>
      </div>
    );
  }
}

export default BodyContent;
