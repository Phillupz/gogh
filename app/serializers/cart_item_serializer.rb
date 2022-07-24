class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :quantity
  has_one :product
end
