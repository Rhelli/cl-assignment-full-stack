class Folder < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :started, presence: true
end
