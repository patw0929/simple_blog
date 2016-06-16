import React, { Component } from 'react';
import PostEdit from '../components/Post/PostEdit';

export default class EditPost extends Component {
  render() {
    return (
      <div>
        <PostEdit id={this.props.params.id} />
      </div>
    );
  }
}
