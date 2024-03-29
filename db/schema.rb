# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 4) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "regex_levels", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "regex_words", force: :cascade do |t|
    t.string   "value"
    t.string   "side"
    t.integer  "regex_level_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "takuzu_boards", force: :cascade do |t|
    t.integer  "size"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "takuzu_boxes", force: :cascade do |t|
    t.integer  "value"
    t.integer  "correct_value"
    t.integer  "takuzu_board_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
