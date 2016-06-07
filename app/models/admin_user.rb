class AdminUser < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  def self.find_for_google_oauth2(auth)
    admin = AdminUser.where(email: auth.info.email).first

    unless admin
      admin = AdminUser.create(name:     auth.info.name,
                         provider: auth.provider,
                         uid:      auth.uid,
                         email:    auth.info.email,
                         token:    auth.credentials.token,
                         password: Devise.friendly_token[0, 20])
    end
    admin
  end

  def admin?
    self.enable == true
  end
end
