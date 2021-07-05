class AddFolderToProjects < ActiveRecord::Migration[6.1]
  def change
    add_reference :projects, :folders, index: true
  end
end
