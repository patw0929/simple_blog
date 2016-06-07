class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      comments: [],
    }
  }

  componentDidMount() {
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

  render () {
    return (
      <div>
        <PostShow id={this.state.post.id}
          title={this.state.post.title}
          author={this.state.post.author ? this.state.post.author.name : null}
          date={this.state.post.date} />
        <CommentList data={this.state.comments} />
      </div>
    );
  }
}

