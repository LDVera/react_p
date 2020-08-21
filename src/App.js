import React from 'react';
import NavBar from './Component/NavBar/'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home';
import SecondSection from './Component/SecondSection/SecondSection';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
	  <Switch>
		  <Route path='/' exact component={Home} />
	  </Switch>
      <SecondSection/>
    </Router>
    </>
  );
}

export default App;
