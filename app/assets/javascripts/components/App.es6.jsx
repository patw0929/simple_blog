var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

class App extends React.Component {
  render () {
    let noticeMsg = '';
    if (this.props.notice) {
      noticeMsg = (
        <p className="alert alert-success">{this.props.notice}</p>
      );
    }

    let alertMsg = '';
    if (this.props.alert) {
      alertMsg = (
        <p className="alert alert-danger">{this.props.alert}</p>
      );
    }

    let authorPanel = (
      <div>
        <a href={this.props.author_register_path}>Sign up</a> |
        <a href={this.props.author_login_path}>Sign in</a>
      </div>
    );
    if (this.props.current_author) {
      authorPanel = (
        <div>
          <Link to="/new_post">Write post</Link> |
           <a href={this.props.author_logout_path}>Logout</a> |
           <a href={this.props.author_edit_path}>Edit profile</a>
        </div>
      );
    }

    let adminPanel = (
      <div>
        <a href={this.props.admin_login_path}>Signin as admin with Google</a>
      </div>
    );
    if (this.props.current_admin_user) {
      adminPanel = (
        <div>
          <a href={this.props.admin_root_path}>Backstage</a> |
          <a href={this.props.admin_logout_path}>Logout</a>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-sm-8 blog-main">
          {noticeMsg}
          {alertMsg}

          <RouteHandler {...this.props} />
        </div>

        <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
          <div className="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>The template is based on Bootstrap's blog template.</p>
          </div>

          <div className="sidebar-module sidebar-module-inset">
            <h4>Author Panel</h4>

            {authorPanel}
          </div>

          <div className="sidebar-module sidebar-module-inset">
            <h4>Admin Panel</h4>

            {adminPanel}
          </div>
        </div>
      </div>
    );
  }
}

