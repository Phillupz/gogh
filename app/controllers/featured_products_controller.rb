class FeaturedProductsController < ApplicationController
  
  def index
    featured_products = FeaturedProduct.all
    render json: featured_products, status: :ok
  end

end
