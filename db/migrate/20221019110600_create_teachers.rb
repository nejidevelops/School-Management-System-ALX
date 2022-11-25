class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :role
      t.boolean :gender
      t.string :image
      t.string :phone_no
      t.string :address
      t.string :full_name
      t.string :email
      t.string :password_digest


      t.timestamps
    end
  end
end
