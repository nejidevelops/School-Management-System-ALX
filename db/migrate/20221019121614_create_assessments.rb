class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
      t.string :name 
      t.integer :subject_teacher_id
      t.integer :total

      t.timestamps
    end
  end
end
