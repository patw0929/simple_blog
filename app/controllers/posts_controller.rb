class PostsController < ApplicationController
  before_filter :set_post, :only => [:show, :edit, :update, :destroy]
  before_filter :authenticate_author!, :except => [:show, :index]
  before_filter :require_permission, :only => [:edit, :update, :destory]

  def index
    @posts = Post.recent.paginate(:page => params[:page], :per_page => 5)
  end

  def show
    @comments = @post.comments.recent
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_author.id

    respond_to do |format|
      if @post.save
        flash[:notice] = 'Post was successfully created.'
        format.html { redirect_to(@post) }
      else
        format.html { render :action => "new" }
      end
    end
  end

  def edit
  end

  def update
    if @post.update_attributes(post_params)
      redirect_to post_path(@post), :notice => "Updated successfully."
    else
      render :action => "edit"
    end
  end

  def destroy
    if @post.destroy
      flash[:notice] = 'Post was successfully deleted.'
      redirect_to posts_path
    else
      render :action => "index"
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
