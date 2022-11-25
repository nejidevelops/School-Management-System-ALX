class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :role
      t.boolean :gender
      t.string :image
      t.integer :parent_id
      t.string :phone_no
      t.integer :admission_no
      t.integer :class_id
      t.integer :subject_id
      t.string :full_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
