class UserSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :email, :admin, :street, :apt, :city, :state, :zip, :country, :password_digest
  has_many :orders
end
