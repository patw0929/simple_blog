class Post extends React.Component {
  render () {
    return (
      <article className="blog-post">
        <h1 className="blog-post__title">
          <Link to={'/posts/' + this.props.id}><span>{this.props.title}</span></Link>
        </h1>

        <p className="blog-post-meta"><span>{this.props.date}</span> by <span>{this.props.author}</span></p>

        <div className="blog-post__content">
          {this.props.content}
        </div>
      </article>
    );
  }
}

