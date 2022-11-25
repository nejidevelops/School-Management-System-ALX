class ChangeAssociation < ActiveRecord::Migration[7.0]
  def change
    rename_column :assessments, :subject_teacher_id, :subject_id
    rename_column :assignments, :subject_teacher_id, :subject_id
  end
end
