class AddUserNameToStudent < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :username, :string
  end
end
