import React from 'react';
import HomeComponent from '../HomeComponent';
import {
  Switch,
  Route
} from "react-router-dom";
import AboutUs from '../aboutUs';
class BodyContent extends React.Component {
  render(){
    return (
      <div className="BodyContent">
          <Switch>
            <Route path="/" exact><HomeComponent /></Route>
            <Route path="/aboutus"><AboutUs /></Route>
             {/* <Route path="/contactus"><HomeComponent></HomeComponent></Route>
            <Route path="/locations/l1"><HomeComponent ></HomeComponent></Route>
            <Route path="/services/l1"><HomeComponent></HomeComponent></Route> */}
          </Switch>
      </div>
    );
  }
}

export default BodyContent;
