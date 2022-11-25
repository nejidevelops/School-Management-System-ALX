class SetDefault < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :img_url, :string, default: "https://res.cloudinary.com/dszox5xnw/image/upload/v1629222245/TalenTree/NoUserImage_uzwprl.png"
  end
end
