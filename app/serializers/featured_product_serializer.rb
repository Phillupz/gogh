class FeaturedProductSerializer < ActiveModel::Serializer
  attributes :id, :product_id
  has_one :product
end
