import React from 'react';
import { Router, browserHistory } from 'react-router';
import 'babel-polyfill';
import routes from '../routes/routes';

export default function (props) {
  return (
    <Router history={browserHistory} routes={routes(props)}>
    </Router>
  );
};
