class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :product_id, :quantity
  has_one :product
end
