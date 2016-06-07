class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :author
  scope :recent, -> { order(:created_at => :desc, :id => :desc) }

  def as_json(options={})
    super(:include => {
            :author => {:only => [:name]}
          }
    )
  end
end
