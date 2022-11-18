class PlantUserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name
  
  def plants
    ActiveModelSerializers::SerializableResource.new(object.plants, each_serializer: PlantSerializer)
  end
end
