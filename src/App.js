import React from 'react';
import "circular-std";
import './index.css';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <div className="simple-linear">
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
