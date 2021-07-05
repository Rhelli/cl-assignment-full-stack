class Project < ApplicationRecord
  validates :title, presence: true,
  validates :description, presence: true
  validates :started, presence: true,
  validates :cost, presence: true
end
