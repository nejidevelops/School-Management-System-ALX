class AddEmailToAdmin < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :email, :string
  end
end
