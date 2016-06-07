class AddColumnsToComments < ActiveRecord::Migration
  def change
    add_column :comments, :post_id, :integer
    add_index :comments, :post_id

    add_column :comments, :author_id, :integer
    add_column :comments, :content, :text
  end
end
