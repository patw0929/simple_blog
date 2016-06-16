import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const commentNodes = this.props.data.map((comment) => {
      return <Comment key={comment.id}
        id={comment.id}
        author={comment.author}
        content={comment.content}
        date={comment.created_at} />
    });

    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
}
