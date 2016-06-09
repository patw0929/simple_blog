class Api::V1::PostsController < Api::V1::BaseController
  before_filter :set_post, :only => [:show, :edit, :update, :destroy]
  before_filter :authenticate_author!, :except => [:show, :index]
  before_filter :require_permission, :only => [:edit, :update, :destory]

  def index
    @posts = Post.recent.paginate(:page => params[:page], :per_page => 5)

    respond_to do |format|
      format.json {
        render :json => {
          :current_page => @posts.current_page,
          :per_page => @posts.per_page,
          :total_entries => @posts.total_entries,
          :entries => @posts
        }
      }
    end
  end

  def show
    @comments = @post.comments.recent

    respond_to do |format|
      format.json { render :json => {
          :post => @post,
          :comments => @comments
        }
      }
    end
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_author.id

    respond_to do |format|
      if @post.save
        format.json { head :no_content, status: :ok }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @post.update_attributes(post_params)
        format.json { head :no_content, status: :ok }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    respond_to do |format|
      if @post.destroy
        format.json { head :no_content, status: :ok }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end


  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def require_permission
    if current_author != Post.find(params[:id]).author
      redirect_to root_path
    end
  end
end
