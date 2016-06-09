class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @data = {
      notice: notice,
      alert: alert,
      current_author: current_author,
      current_admin_user: current_admin_user,
      author_logout_path: destroy_author_session_path,
      author_edit_path: edit_registration_path(:author),
      author_register_path: new_registration_path(:author),
      author_login_path: new_session_path(:author),
      admin_login_path: admin_user_omniauth_authorize_path(:google_oauth2),
      admin_root_path: admin_root_path,
      admin_logout_path: destroy_admin_user_session_path,
    }
    @location_path = "/#{params[:path]}"
  end


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in)        << :name
    devise_parameter_sanitizer.for(:sign_up)        << :name
    devise_parameter_sanitizer.for(:account_update) << :name
  end

  def authenticate_active_admin_user!
     authenticate_admin_user!
     unless current_admin_user.admin?
        flash[:alert] = "Please tell the administrator to enable your account."
        redirect_to root_path
     end
  end
end
