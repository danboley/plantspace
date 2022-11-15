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

ActiveRecord::Schema.define(version: 2022_11_15_155504) do

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.string "picture_url"
    t.datetime "last_watered"
    t.integer "user_id", null: false
    t.integer "store_id", null: false
    t.integer "species_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["species_id"], name: "index_plants_on_species_id"
    t.index ["store_id"], name: "index_plants_on_store_id"
    t.index ["user_id"], name: "index_plants_on_user_id"
  end

  create_table "species", force: :cascade do |t|
    t.string "species_name"
    t.integer "frequency_watered"
    t.string "care"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "store_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "plants", "species"
  add_foreign_key "plants", "stores"
  add_foreign_key "plants", "users"
end
