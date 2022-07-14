class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :text, :user_id, :product_id
  has_one :product
  has_one :user
end
