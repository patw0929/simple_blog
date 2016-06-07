class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this._retrievePosts();
  }

  _retrievePosts() {
    fetch('/api/v1/posts.json', {
      method: 'GET',
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          this.setState({
            posts: data,
          });
        });
      }
    });
  }

  render () {
    const postNodes = this.state.posts.map((post) => {
      return <Post key={post.id}
        id={post.id}
        title={post.title}
        author={post.author.name}
        content={post.content}
        date={post.created_at} />
    });

    return (
      <div>
        {postNodes}
      </div>
    );
  }
}

