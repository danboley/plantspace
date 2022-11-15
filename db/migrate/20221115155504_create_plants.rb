class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :picture_url
      t.datetime :last_watered
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :store, null: false, foreign_key: true
      t.belongs_to :species, null: false, foreign_key: true

      t.timestamps
    end
  end
end
