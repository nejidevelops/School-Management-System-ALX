class CreateStudentAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :student_assignments do |t|
      t.integer :student_id
      t.integer :assignment_id
      t.integer :score

      t.timestamps
    end
  end
end
