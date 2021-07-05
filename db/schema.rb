# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_05_120651) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "folders", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.date "started"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "folders_projects", id: false, force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "folder_id", null: false
  end

  create_table "project_folders", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "folder_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["folder_id"], name: "index_project_folders_on_folder_id"
    t.index ["project_id"], name: "index_project_folders_on_project_id"
  end

  create_table "project_topics", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "topic_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_project_topics_on_project_id"
    t.index ["topic_id"], name: "index_project_topics_on_topic_id"
  end

  create_table "projects", force: :cascade do |t|
    t.text "title"
    t.text "description"
    t.date "started"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "folders_id"
    t.index ["folders_id"], name: "index_projects_on_folders_id"
  end

  create_table "projects_topics", id: false, force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "topic_id", null: false
  end

  create_table "topics", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "project_folders", "folders"
  add_foreign_key "project_folders", "projects"
  add_foreign_key "project_topics", "projects"
  add_foreign_key "project_topics", "topics"
end
