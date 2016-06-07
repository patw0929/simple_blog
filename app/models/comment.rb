class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :author
  scope :recent, -> { order(:created_at => :desc, :id => :desc) }
end
