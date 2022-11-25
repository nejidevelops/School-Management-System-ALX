class RemoveClassIdFromStudents < ActiveRecord::Migration[7.0]
  def change
    remove_column :students, :class_id, :string
  end
end
