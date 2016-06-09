import React from 'react';
import { browserHistory } from 'react-router';
import ReactPaginate from 'react-paginate';
import Post from './Post';


export default class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      totalPage: 0,
      perPage: 5,
    };
  }

  componentDidMount() {
    let initPage = parseInt(this.props.page, 10);
    if (isNaN(initPage)) {
      initPage = 1;
    }
    this._retrievePosts(initPage);
  }

  _retrievePosts(page) {
    if (page === undefined) {
      page = this.props.page;
    }

    fetch(`/api/v1/posts?page=${page}`, {
      method: 'GET',
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const totalPage = Math.ceil(data.total_entries / data.per_page);
          const perPage = data.per_page;
          const currentPage = page - 1;

          this.setState({
            posts: data.entries,
            totalPage,
            perPage,
            currentPage,
          });
        });
      }
    });
  }

  handlePageClick = (data) => {
    const selected = data.selected + 1;
    this._retrievePosts(selected);
    window.scroll(0, 0);
    browserHistory.push(`/page/${selected}`)
  };

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

        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          pageNum={this.state.totalPage}
          forceSelected={this.state.currentPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    );
  }
}

