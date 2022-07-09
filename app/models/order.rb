class Order < ApplicationRecord
  belongs_to :user
  has_one :payment
  has_many :order_items
end
