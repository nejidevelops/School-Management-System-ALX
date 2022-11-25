class AddUserNameToTeacher < ActiveRecord::Migration[7.0]
  def change
    add_column :teachers, :username, :string
  end
end
