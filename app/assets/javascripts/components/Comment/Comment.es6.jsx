class Comment extends React.Component {
  render () {
    return (
      <article className="comment">
        <div className="comment__content">
          <div dangerouslySetInnerHTML={{__html: nl2br(this.props.content)}}></div>
        </div>

        <div className="comment__info">
          {parseDateToLocalFormat(this.props.date)} by {this.props.author.name}
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
