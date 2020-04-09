import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Appointment from './Components/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route path="/home">
          <Homepage></Homepage>    
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
