import React, { Component } from 'react';
import PostShow from '../components/Post/PostShow';
import CommentList from '../components/Comment/CommentList';
import CommentForm from '../components/Comment/CommentForm';

export default class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      comments: [],
    }
  }

  static defaultProps = {
    current_author: {
      id: 0,
    },
  };

  componentWillMount() {
    this._retrievePost(this.props.params.id);
  }

  _retrievePost(id) {
    fetch(`/api/v1/posts/${id}`, {
      method: 'GET'
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          this.setState({
            post: data.post,
            comments: data.comments,
          });
        });
      }
    });
  }

  render() {
    return (
      <div>
        <PostShow id={this.state.post.id}
          title={this.state.post.title}
          content={this.state.post.content}
          author_id={this.state.post.author_id}
          author={this.state.post.author ? this.state.post.author.name : null}
          date={this.state.post.created_at}
          current_author_id={this.props.current_author ? this.props.current_author.id : 0} />
        <CommentList data={this.state.comments} />
        <CommentForm current_author_id={this.props.current_author ? this.props.current_author.id : 0}
          post_id={this.state.post.id}
          handleUpdate={this._retrievePost.bind(this)} />
      </div>
    );
  }
}
