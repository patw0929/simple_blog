class EditPost extends React.Component {
  render () {
    return (
      <div>
        <PostEdit id={this.props.params.id} />
      </div>
    );
  }
}
