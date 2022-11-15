class SpeciesSerializer < ActiveModel::Serializer
  attributes :id, :species_name, :frequency_watered, :care
end
