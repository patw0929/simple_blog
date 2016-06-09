class Api::V1::CommentsController < Api::V1::BaseController
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    @comment.post_id = @post.id
    @comment.author_id = current_author.id

    respond_to do |format|
      if @comment.save
        format.json { head :no_content, status: :ok }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end


  private

  def comment_params
      params.require(:comment).permit(:content)
  end
end
