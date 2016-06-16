class DefaultValueToEnable < ActiveRecord::Migration
  def up
    change_column :admin_users, :enable, :boolean, :default => true
  end

  def down
    change_column :admin_users, :enable, :boolean, :default => nil
  end
end
