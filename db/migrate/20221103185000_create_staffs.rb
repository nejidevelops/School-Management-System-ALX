class CreateStaffs < ActiveRecord::Migration[7.0]
  def change
    create_table :staffs do |t|
      t.string :full_name
      t.string :post
      t.string :image
      t.string :department
      t.string :phone_no

      t.timestamps
    end
  end
end
