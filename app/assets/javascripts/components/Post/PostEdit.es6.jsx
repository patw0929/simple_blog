class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this._retrievePost(this.props.id);
  }

  _retrievePost(id) {
    fetch(`/api/v1/posts/${id}`, {
      method: 'GET'
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          this.setState({
            title: data.post.title,
            content: data.post.content,
          });
        });
      }
    });
  }

  handleChange(field, e) {
    const nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/v1/posts/${this.props.id}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      },
      body: new FormData(document.getElementById('post-form')),
    }).then((response) => {
      if (response.ok) {
        window.location.href = `/posts/${this.props.id}`;
      } else {
        alert('Failed.');
      }
    });
  }

  render () {
    return (
      <form id="post-form" onSubmit={this.handleSubmit.bind(this)}>
        <h1>Edit post</h1>

        <div className="form-group">
          <label className="control-label" htmlFor="post_title">Title</label>
          <div>
            <input className="form-control"
              id="post_title"
              name="post[title]"
              type="text"
              value={this.state.title}
              onChange={this.handleChange.bind(this, 'title')} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="post_content">Comment</label>
          <div>
            <textarea className="form-control"
              rows="7"
              id="post_content"
              name="post[content]"
              value={this.state.content}
              onChange={this.handleChange.bind(this, 'content')} />
          </div>
        </div>

        <p><button className="btn btn-default btn-primary" type="submit">Update</button></p>

        <hr />

        <p><Link to="/">Back to list</Link></p>
      </form>
    );
  }
}
