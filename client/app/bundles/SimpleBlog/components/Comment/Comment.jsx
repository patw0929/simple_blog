import React from 'react';
import Utils from '../../utils/utils';


export default class Comment extends React.Component {
  render () {
    return (
      <article className="comment">
        <div className="comment__content">
          <div dangerouslySetInnerHTML={{__html: Utils.nl2br(this.props.content)}}></div>
        </div>

        <div className="comment__info">
          {Utils.parseDateToLocalFormat(this.props.date)} by {this.props.author.name}
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
