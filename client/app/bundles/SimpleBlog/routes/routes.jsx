import React from 'react';
import { Router, browserHistory, Route, Redirect } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../containers/Home';
import Single from '../containers/Single';
import NewPost from '../containers/NewPost';
import EditPost from '../containers/EditPost';

export default (props) =>
  <Route component={Layout} {...props}>
    <Route component={Home} path="/(page/:page)" />
    <Route component={Single} path="posts/:id" />
    <Route component={NewPost} path="new_post" />
    <Route component={EditPost} path="posts/:id/edit" />
  </Route>;
