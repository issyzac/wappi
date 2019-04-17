import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/HomePage.jsx'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

export default App;
