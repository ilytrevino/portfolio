import React from 'react';
import "circular-std";
import './index.css';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Welcome />
      <AboutMe />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}

export default App;
