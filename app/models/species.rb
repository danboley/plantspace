class Species < ApplicationRecord
  has_many :plants
  has_many :users, through: :plants
  has_many :stores, through: :plants

  validates_presence_of :category_name, :frequency_watered, :care
end
