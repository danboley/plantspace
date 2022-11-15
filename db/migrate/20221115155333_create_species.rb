class CreateSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :species do |t|
      t.string :species_name
      t.integer :frequency_watered
      t.string :care

      t.timestamps
    end
  end
end
