class RenameStudentAssessmentColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :student_assesments, :assesment_id, :assessment_id
    add_column :admins, :username, :string

  end
end
