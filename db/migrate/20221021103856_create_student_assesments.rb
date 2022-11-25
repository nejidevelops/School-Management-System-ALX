class CreateStudentAssesments < ActiveRecord::Migration[7.0]
  def change
    create_table :student_assesments do |t|
      t.integer :assesment_id
      t.integer :student_id
      t.integer :score

      t.timestamps
    end
  end
end
