class Folder < ApplicationRecord
  has_many :project_folders, foreign_key: :folder_id
  has_many :projects, through: :project_folders, foreign_key: :project_id

  validates :title, presence: true
  validates :description, presence: true
  validates :started, presence: true
end
