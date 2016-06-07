class AddEnableToAdminUsers < ActiveRecord::Migration
  def change
    add_column :admin_users, :enable, :boolean
  end
end
