class CreateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :assignments do |t|
      t.string :name 
      t.integer :subject_teacher_id
      t.date :due_date

      t.timestamps
    end
  end
end
