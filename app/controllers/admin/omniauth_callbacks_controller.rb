class Admin::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
    @admin = AdminUser.find_for_google_oauth2(request.env["omniauth.auth"])

    if @admin.persisted?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
      sign_in_and_redirect @admin, :event => :authentication
    else
      session["devise.google_data"] = request.env["omniauth.auth"]
      redirect_to new_admin_user_registration_url
    end
  end
end
