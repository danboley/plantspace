class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest
  has_many :plants
  has_many :stores
  has_many :species
end
