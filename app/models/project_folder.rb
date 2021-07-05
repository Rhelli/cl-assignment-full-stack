class ProjectFolder < ApplicationRecord
  belongs_to :project
  belongs_to :folder
end
