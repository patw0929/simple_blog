import React from 'react';
import { RouteHandler, Link } from 'react-router';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let noticeMsg = '';
    if (this.props.route.notice) {
      noticeMsg = (
        <p className="alert alert-success">{this.props.route.notice}</p>
      );
    }

    let alertMsg = '';
    if (this.props.route.alert) {
      alertMsg = (
        <p className="alert alert-danger">{this.props.route.alert}</p>
      );
    }

    let authorPanel = (
      <div>
        <a href={this.props.route.author_register_path}>Sign up</a> |
        <a href={this.props.route.author_login_path}>Sign in</a>
      </div>
    );
    if (this.props.route.current_author) {
      authorPanel = (
        <div>
          <Link to="/new_post">Write post</Link> |
           <a href={this.props.route.author_logout_path}>Logout</a> |
           <a href={this.props.route.author_edit_path}>Edit profile</a>
        </div>
      );
    }

    let adminPanel = (
      <div>
        <a href={this.props.route.admin_login_path}>Signin as admin with Google</a>
      </div>
    );
    if (this.props.route.current_admin_user) {
      adminPanel = (
        <div>
          <a href={this.props.route.admin_root_path}>Backstage</a> |
          <a href={this.props.route.admin_logout_path}>Logout</a>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-sm-8 blog-main">
          {noticeMsg}
          {alertMsg}

          {React.cloneElement(this.props.children, this.props.route)}
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
