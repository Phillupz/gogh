class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total, :status
  has_one :user
  has_many :order_items
end
