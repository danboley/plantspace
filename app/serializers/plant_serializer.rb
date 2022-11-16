class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture_url, :last_watered
  has_one :user, serializer: PlantUserSerializer
  has_one :store
  has_one :species
end
