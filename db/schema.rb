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

ActiveRecord::Schema[7.0].define(version: 2022_11_03_185000) do
  create_table "admins", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "full_name"
    t.string "password_digest"
    t.string "user_name"
    t.string "role"
    t.string "username"
  end

  create_table "assessments", force: :cascade do |t|
    t.string "name"
    t.integer "subject_id"
    t.integer "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "assignments", force: :cascade do |t|
    t.string "name"
    t.integer "subject_id"
    t.string "due_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "classrooms", force: :cascade do |t|
    t.string "name"
    t.integer "teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parents", force: :cascade do |t|
    t.string "role"
    t.string "address"
    t.string "phone_no"
    t.string "full_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
  end

  create_table "staffs", force: :cascade do |t|
    t.string "full_name"
    t.string "post"
    t.string "image"
    t.string "department"
    t.string "phone_no"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "student_assesments", force: :cascade do |t|
    t.integer "assessment_id"
    t.integer "student_id"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "student_assignments", force: :cascade do |t|
    t.integer "student_id"
    t.integer "assignment_id"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "role"
    t.string "gender"
    t.string "image"
    t.integer "parent_id"
    t.string "phone_no"
    t.integer "admission_no"
    t.integer "subject_id"
    t.string "full_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "classroom_id"
    t.string "username"
  end

  create_table "subject_teachers", force: :cascade do |t|
    t.integer "teacher_id"
    t.integer "subject_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "role"
    t.string "gender"
    t.string "image"
    t.string "phone_no"
    t.string "address"
    t.string "full_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
