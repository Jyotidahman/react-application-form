import React from 'react';
import Login from './Component/Login';
import {NoMatch} from './Component/NoMatch';
import ApplicationForm from './Component/ApplicationForm';
import { Route, Switch} from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/applicationForm" exact component={ApplicationForm} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default App;
