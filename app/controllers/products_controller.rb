class ProductsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def index
    products = Product.all
    render json: products, status: :ok
  end

  def show
    product = Product.find(params[:id])
    render json: product, status: :ok
  end

  def create
    product = Product.create(product_params)
    render json: product, status: :created
  end

  def update
    product = find_product
    product.update(product_params)
    render json: product, status: :ok 
  end

  def destroy
    product = find_product
    product.destroy
    head :no_content
  end

  def rating 
    if params[:product_id]
      product = find_product
      rating = (product.reviews.pluck(:rating).sum.to_f / product.reviews.pluck(:rating).size).to_f
    else
      rating = product.reviews
    end 
    render json: rating, status: :ok
  rescue ZeroDivisionError
    rating = 0.0
    render json: rating
  end

  private

  def not_found
    render json: [ error: "No Ratings Found"], status: :not_found
  end

  def product_params
    params.permit(:name, :description_1, :description_2, :description_3, :piece_image, :category, :image, :price)
  end

  def find_product
    product = Product.find(params[:product_id])
  end 

end
