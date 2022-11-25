class AddPasswordToAdmin < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :password_digest, :string
  end
end
