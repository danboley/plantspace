class UserPlantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username
  has_many :plants, serializer: PlantSpeciesSerializer
end
