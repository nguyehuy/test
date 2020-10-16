import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/CustomNavbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
