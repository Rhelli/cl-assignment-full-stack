class Topic < ApplicationRecord
  has_many :projecttopics, foreign_key: :topic_id
  has_many :projects, through: :projecttopic, foreign_key: :project_id

  validates :title, presence: true
end
