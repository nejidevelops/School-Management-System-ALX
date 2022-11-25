class CreateParents < ActiveRecord::Migration[7.0]
  def change
    create_table :parents do |t|
      t.string :role
      t.string :address
      t.string :phone_no
      t.string :full_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
