class PostShow extends React.Component {
  handleDelete(id) {
    if (confirm('Do you really want to delete it?')) {
      fetch(`/api/v1/posts/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: {
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
      }).then((response) => {
        if (response.ok) {
          window.location.href = '/';
        } else {
          alert('Failed.');
        }
      });
    }
  }

  render () {
    let AuthorPanel = '';
    if (this.props.current_author_id == this.props.author_id) {
      AuthorPanel = (
        <div className='btn-group'>
          <Link to={'/posts/' + this.props.id + '/edit'} className='btn btn-default'>Edit</Link>
          <a className='btn btn-danger' onClick={this.handleDelete.bind(this, this.props.id)}>Delete</a>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.props.title}</h1>

        <p className="blog-post-meta">
          <span>{parseDateToLocalFormat(this.props.date)}</span> by <span>{this.props.author}</span>
        </p>

        <p>{this.props.content}</p>

        <div>{AuthorPanel}</div>

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
  author_id: 0,
};
