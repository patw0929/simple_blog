class AddColumnsToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :author_id, :integer
    add_column :posts, :title, :string
    add_column :posts, :content, :text
  end
end
