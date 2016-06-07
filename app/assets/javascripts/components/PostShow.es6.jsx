class PostShow extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <p className="blog-post-meta">
          <span>{this.props.date}</span> by <span>{this.props.author}</span>
        </p>

        <p>{this.props.content}</p>

        <hr />

        <p><Link to='/'>Back to list</Link></p>

        <hr />
      </div>
    );
  }
}

PostShow.defaultProps = {
  title: '',
  content: '',
  date: '',
  author: {
    name: ''
  },
};
