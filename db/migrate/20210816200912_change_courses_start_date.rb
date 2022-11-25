class ChangeCoursesStartDate < ActiveRecord::Migration[6.1]
  def change
    change_column(:courses, :start_date, :date)
    change_column(:courses, :end_date, :date)
  end
end
