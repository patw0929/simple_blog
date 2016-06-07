class Post extends React.Component {
  render () {
    return (
      <article className="blog-post">
        <h1 className="blog-post__title">
          <Link to={'/posts/' + this.props.id}>{this.props.title}</Link>
        </h1>

        <p className="blog-post-meta">{this.props.date} by {this.props.author}</p>

        <div className="blog-post__content">
          {this.props.content}
        </div>
      </article>
    );
  }
}

