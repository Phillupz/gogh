class UserSerializer < ActiveModel::Serializer
  attributes :first, :last, :stripe_email, :stripe_token, :customer_id, :admin, :email, :password_digest
  has_many :orders
end
