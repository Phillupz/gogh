class UserSerializer < ActiveModel::Serializer
  attributes :first, :last, :email, :admin, :street, :apt, :city, :state, :zip, :country, :password_digest
  has_many :orders
end
