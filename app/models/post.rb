class Post < ActiveRecord::Base
  has_many :comments, :dependent => :delete_all
  belongs_to :author
  scope :recent, -> { order(:created_at => :desc, :id => :desc) }

  def as_json(options={})
    super(:include => {
            :author => {:only => [:name]}
          }
    )
  end
end
