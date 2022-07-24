class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description_1, :description_2, :piece_image, :description_3, :category, :image, :price
  has_many :reviews
  has_many :cart_items
end

