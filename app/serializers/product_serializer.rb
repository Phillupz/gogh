class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :image, :price
end
