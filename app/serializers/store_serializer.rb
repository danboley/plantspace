class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :store_url
end
