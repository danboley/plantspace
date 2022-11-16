class Plant < ApplicationRecord
  belongs_to :user
  belongs_to :store
  belongs_to :species

  # validates_presence_of :name, :picture_url, :last_watered
end
