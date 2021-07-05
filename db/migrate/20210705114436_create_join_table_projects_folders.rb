class CreateJoinTableProjectsFolders < ActiveRecord::Migration[6.1]
  def change
    create_join_table :projects, :folders do |t|
      # t.index [:project_id, :folder_id]
      # t.index [:folder_id, :project_id]
    end
  end
end
