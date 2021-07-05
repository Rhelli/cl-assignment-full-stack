class Project < ApplicationRecord
  has_many :project_topics, foreign_key: :project_id
  has_many :topics, through: :project_topics, foreign_key: :topic_id

  has_many :project_folders, foreign_key: :project_id
  has_many :folders, through: :project_folders, foreign_key: :folder_id

  validates :title, presence: true
  validates :description, presence: true
  validates :started, presence: true
  validates :cost, presence: true
end
