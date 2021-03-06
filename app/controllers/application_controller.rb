class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


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
