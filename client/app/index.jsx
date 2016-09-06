import React, { Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { render } from 'react-dom';
import App from './components/App.jsx';
import UsersPage from './components/UsersPage.jsx';
import UserPage from './components/UserPage.jsx';
import NoMatchPage from './components/NoMatchPage.jsx';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="users" component={UsersPage}>
        <Route path="user/:userId" component={UserPage}/>
      </Route>
      <Route path="*" component={NoMatchPage}/>
    </Route>
  </Router>, 
  document.getElementById('app')
)