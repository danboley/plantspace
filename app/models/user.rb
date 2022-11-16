class User < ApplicationRecord
  has_many :plants
  has_many :stores, through: :plants
  has_many :species, through: :plants
  # validates_presence_of :username, :first_name, :last_name
  validates :username, length: { in: 0..15 }, uniqueness: true, presence: true
  # validates :first_name, presence: true
  # validates :last_name, presence: true
  has_secure_password
end
