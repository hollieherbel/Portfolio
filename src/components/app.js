import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    

}




  render() {
    return (
      <div className='app'>
        <Router>
          
            <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          
        </Router>
        
      </div>
    );
  }
}
