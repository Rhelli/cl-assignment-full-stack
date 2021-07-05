class CreateFolders < ActiveRecord::Migration[6.1]
  def change
    create_table :folders do |t|
      t.string :title
      t.text :description
      t.date :started

      t.timestamps
    end
  end
end
