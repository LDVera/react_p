import React from 'react';
import NavBar from './Component/NavBar/'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home';
import SecondSection from './Component/SecondSection/SecondSection';
import LetterAnimation from './Component/LettlerAnimation/'
import Title from './Component/Title/'
import PresentationSection from './Component/PresentationSection/';

function App() {
  return (
    <>
    <Router>
      <NavBar/> 
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
