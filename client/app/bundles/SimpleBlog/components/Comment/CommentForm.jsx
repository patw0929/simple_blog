import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';


export default class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/v1/posts/${this.props.post_id}/comments/`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      },
      body: new FormData(document.getElementById('comment-form')),
    }).then((response) => {
      if (response.ok) {
        window.scroll(0, 0);
        ReactDOM.findDOMNode(this.refs.comment_content).value = '';
        this.props.handleUpdate(this.props.post_id);
      } else {
        alert('Failed.');
      }
    });
  }

  render () {
    if (!this.props.current_author_id) {
      return <div />;
    }

    return (
      <form id="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label className="control-label" htmlFor="comment_content">Comment</label>
          <div>
            <textarea className="form-control" id="comment_content" ref="comment_content" name="comment[content]"></textarea>
          </div>
        </div>

        <p><button className="btn btn-default btn-primary" type="submit">Submit</button></p>
      </form>
    );
  }
}
