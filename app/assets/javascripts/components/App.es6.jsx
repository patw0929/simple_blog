var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

class App extends React.Component {
  render () {
    return (
      <div>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

