class ChangeGenderTypes < ActiveRecord::Migration[7.0]
  def change
    change_column :teachers, :gender, :string
    change_column :students, :gender, :string
  end
end
