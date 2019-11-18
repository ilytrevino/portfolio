import React from 'react';
import './index.css';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation.jsx';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Welcome />
    </React.Fragment>
  );
}

export default App;
