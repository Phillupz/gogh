class Product < ApplicationRecord
  has_many :reviews
  has_many :cart_items

  validates :name, presence: { message: "Please add a name" }
  validates :price, presence: { message: "Please add a price" }
  validates :category, inclusion: { in: ['T-Shirts', 'Crewnecks', 'Hoodies', 'Slides', 'Bags'], message: "Please add a category" }
  validates :description_1, presence: { message: "Please add a description" }
  validates :description_2, presence: { message: "Please add a main paragraph" }
  validates :description_3, presence: { message: "Please add a second paragraph" }
  validates :piece_image, presence: { message: "Please add a piece image" }
  validates :image, presence: { message: "Please add an image" }

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
