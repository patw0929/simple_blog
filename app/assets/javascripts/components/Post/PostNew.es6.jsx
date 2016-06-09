class PostNew extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    fetch('/api/v1/posts/', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      },
      body: new FormData(document.getElementById('post-form')),
    }).then((response) => {
      if (response.ok) {
        window.location.href = '/';
      } else {
        alert('Failed.');
      }
    });
  }

  render () {
    return (
      <form id='post-form' onSubmit={this.handleSubmit.bind(this)}>
        <h1>Write post</h1>

        <div className="form-group">
          <label className="control-label" htmlFor="post_title">Title</label>
          <div>
            <input className="form-control" ref="post_title" name="post[title]" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="post_content">Comment</label>
          <div>
            <textarea className="form-control" ref="post_content" name="post[content]"></textarea>
          </div>
        </div>

        <p><button className="btn btn-default btn-primary" type="submit">Submit</button></p>

        <hr />

        <p><Link to='/'>Back to list</Link></p>
      </form>
    );
  }
}
