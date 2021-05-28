import React from 'react';
import './App.css';
import LeftSideBar from './components/LeftSideBar';
import TitleBar from './components/TitleBar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <TitleBar />
      <Router>
        <LeftSideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
