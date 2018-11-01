import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';


class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={AboutMe} />
      </div>
    );
  }
}

export default App;
