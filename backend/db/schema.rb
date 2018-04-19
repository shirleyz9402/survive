# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180417134411) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.integer "health", default: 100
    t.string "image"
    t.boolean "alive", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "health", default: 100
    t.string "image"
    t.integer "score", default: 0
    t.boolean "alive", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projectiles", force: :cascade do |t|
    t.string "name"
    t.integer "damage"
    t.bigint "player_id"
    t.bigint "enemy_id"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["enemy_id"], name: "index_projectiles_on_enemy_id"
    t.index ["player_id"], name: "index_projectiles_on_player_id"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "points", default: 0
    t.bigint "player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_scores_on_player_id"
  end

  add_foreign_key "projectiles", "enemies"
  add_foreign_key "projectiles", "players"
  add_foreign_key "scores", "players"
end
