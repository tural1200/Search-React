import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Blog from './Blog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg"></div>
        <Navbar />
        


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
        </Switch>
      </div>
    )
  }
}

export default App
