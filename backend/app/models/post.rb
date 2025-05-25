class Post < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  serialize :tags, coder: JSON
end
