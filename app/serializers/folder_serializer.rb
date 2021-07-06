class FolderSerializer < ActiveModel::Serializer
  attributes :title, :description, :started, :projects
end