class Product < ApplicationRecord
  has_many :reviews
  has_many :cart_items

  # validate :name_valid
  
  # PRODUCT_PATTERNS = [
  #   /Starry Night/i,
  #   /The Mulberry Tree/i,
  #   /Irises/i,
  #   /Sunflowers/i,
  #   /Poppies/i,
  #   /Cypresses/i,
  #   /Blossoming Almond Tree/i,
  #   /Basket Of Apples/i
  # ]

  # def product_carried?
  #   PRODUCT_PATTERNS.none? { |pat| pat.match name }
  # end

  # def name_valid
  #   unless product_carried?
  #     errors.add(:name, "not carried.")
  #   end  
  # end
end
