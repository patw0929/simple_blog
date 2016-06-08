class Comment extends React.Component {
  render () {
    return (
      <article className="comment">
        <div className="comment__content">
          {this.props.content}
        </div>

        <div className="comment__info">
          {this.props.date} by {this.props.author.name}
        </div>
      </article>
    );
  }
}

Comment.defaultProps = {
  content: '',
  date: '',
  author: {
    name: '',
  },
};
