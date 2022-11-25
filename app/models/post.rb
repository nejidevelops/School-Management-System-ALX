class Post < ApplicationRecord
  belongs_to :user, -> { select :username, :id, :img_url }
  belongs_to :course, -> { select :name, :id }
end
