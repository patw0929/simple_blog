class Post < ActiveRecord::Base
  has_many :comments, :dependent => :delete_all
  belongs_to :author
  scope :recent, -> { order(:created_at => :desc, :id => :desc) }
end
