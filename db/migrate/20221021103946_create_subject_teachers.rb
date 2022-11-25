class CreateSubjectTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :subject_teachers do |t|
      t.integer :teacher_id
      t.integer :subject_id

      t.timestamps
    end
  end
end
