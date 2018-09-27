import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

ReactDOM.render((
  <Router history= {browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'));
