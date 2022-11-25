class AddUserNameToAdmin < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :user_name, :string
  end
end
