class ChangeDueDateToString < ActiveRecord::Migration[7.0]
  def change
    change_column :assignments, :due_date, :string

  end
end
