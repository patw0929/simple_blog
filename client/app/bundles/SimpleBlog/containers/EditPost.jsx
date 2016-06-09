import React from 'react';
import PostEdit from '../components/Post/PostEdit';


export default class EditPost extends React.Component {
  render () {
    return (
      <div>
        <PostEdit id={this.props.params.id} />
      </div>
    );
  }
}
