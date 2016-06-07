class AddOmniauthToAdminUsers < ActiveRecord::Migration
  def change
    add_column :admin_users, :provider, :string
    add_column :admin_users, :uid, :string
    add_column :admin_users, :name, :string
    add_column :admin_users, :token, :string
  end
end
