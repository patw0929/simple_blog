var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={Home} />
    <Route name='Single' handler={Single} path='/posts/:id' />
  </Route>
);
