import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Payment from './Payment';
import IndexPage from './IndexPage';
import Reservation from './Reservation';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/payment" component={Payment} />
      <Route path="/reservation" component={Reservation} />
    </Route>
  </Router>
), document.getElementById('root'));
