import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Jokes from './component/Jokes/Jokes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/jokes">Jokes</NavLink>
          </div>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
