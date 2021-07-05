class ProjectsSerializer < ActiveModel::Serializer
  attributes :title, :description, :started, :cost, :folders, :topics
end