class AddStudentToCourses < ActiveRecord::Migration[6.1]
  def change
    add_reference :courses, :student
    add_reference :courses, :teacher
  end
end
