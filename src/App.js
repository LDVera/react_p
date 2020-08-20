import React from 'react';
import NavBar from './Component/NavBar/'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
	  <Switch>
		  <Route path='/' exact />
	  </Switch>
    </Router>
    </>
  );
}

export default App;
