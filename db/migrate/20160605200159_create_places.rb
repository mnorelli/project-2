class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
       t.string :title
       t.string :location
       t.string :description
       t.string :photo_url
       t.timestamps null:false
     end
  end
end
