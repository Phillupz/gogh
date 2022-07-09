class OrderSerializer < ActiveModel::Serializer
  attributes :user_id, :total, :payment_id
  has_one :user
end
