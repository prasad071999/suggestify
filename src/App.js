import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Body from './components/body'
import Display from './components/display'
import {Route, Switch } from 'react-router-dom';
import Best from './components/best'
import About from './components/about'



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/body" component={Body} />
        <Route path="/display" component={Display} />
        <Route path="/best" component={Best} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
