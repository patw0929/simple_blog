class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    @comment.post_id = @post.id
    @comment.author_id = current_author.id

    if @comment.save
      redirect_to post_path(@post), :notice => "Your comment is posted."
    else
      render :action => "new"
    end
  end

  private

  def comment_params
      params.require(:comment).permit(:content)
  end
end
