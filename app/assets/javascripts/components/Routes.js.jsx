var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={Home} />
    <Route name='Single' handler={Single} path='/posts/:id' />
    <Route name='NewPost' handler={NewPost} path='/new_post' />
    <Route name='EditPost' handler={EditPost} path='/posts/:id/edit' />
  </Route>
);
