import React from 'react';
import LeftSideBar from './components/LeftSideBar';
import TitleBar from './components/TitleBar';
import HomePage from './components/HomePage';
import TasksPage from './components/TasksPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <TitleBar />
      <Router>
        <LeftSideBar />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/tasks" component={TasksPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
