class FoldersSerializer < ActiveModel::Serializer
  attributes :title, :description, :started, :projects
end