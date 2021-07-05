class CreateProjectFolders < ActiveRecord::Migration[6.1]
  def change
    create_table :project_folders do |t|
      t.references :project, null: false, foreign_key: true
      t.references :folder, null: false, foreign_key: true

      t.timestamps
    end
  end
end
