import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {this.props.children}
    </div>
  }
}

export default App; 
