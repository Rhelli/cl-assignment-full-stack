class Topic < ApplicationRecord
  has_many :project_topics, foreign_key: :topic_id
  has_many :projects, through: :project_topics, foreign_key: :project_id

  validates :title, presence: true
end
