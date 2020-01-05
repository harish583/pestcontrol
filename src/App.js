import React from 'react';
import BodyContent from './BodyContent';
import Header from './Header';
import './App.scss';
import {
  BrowserRouter as Router
} from "react-router-dom";

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
          <Header />
          <div className="">
            <BodyContent />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
