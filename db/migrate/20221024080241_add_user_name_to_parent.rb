class AddUserNameToParent < ActiveRecord::Migration[7.0]
  def change
    add_column :parents, :username, :string
  end
end
