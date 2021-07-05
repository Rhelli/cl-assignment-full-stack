class ProjectSerializer < ActiveModel::Serializer
  attributes :title, :description, :started, :cost, :folders, :topics
end