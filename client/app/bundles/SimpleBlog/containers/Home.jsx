import React, { Component } from 'react';
import PostList from '../components/Post/PostList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PostList page={this.props.params.page} />
      </div>
    );
  }
}
