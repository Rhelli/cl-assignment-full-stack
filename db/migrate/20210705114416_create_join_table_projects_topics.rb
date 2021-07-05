class CreateJoinTableProjectsTopics < ActiveRecord::Migration[6.1]
  def change
    create_join_table :projects, :topics do |t|
      # t.index [:project_id, :topic_id]
      # t.index [:topic_id, :project_id]
    end
  end
end
