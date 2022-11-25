class AddClassroomIdToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :classroom_id, :string
  end
end
