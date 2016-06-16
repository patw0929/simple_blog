import React, { Component } from 'react';
import { Link } from 'react-router';
import Utils from '../../utils/utils';

export default class Post extends Component {
  render() {
    return (
      <article className="blog-post">
        <h1 className="blog-post__title">
          <Link to={'/posts/' + this.props.id}><span>{this.props.title}</span></Link>
        </h1>

        <p className="blog-post-meta">
          <span>{Utils.parseDateToLocalFormat(this.props.date)}</span> by <span>{this.props.author}</span>
        </p>

        <div className="blog-post__content">
          <div dangerouslySetInnerHTML={{__html: Utils.nl2br(this.props.content)}}></div>
        </div>
      </article>
    );
  }
}
