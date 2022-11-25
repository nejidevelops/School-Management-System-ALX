class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.text :bio
      t.string :img_url
      t.string :password_digest
      t.boolean :is_teacher

      t.timestamps
    end
  end
end
