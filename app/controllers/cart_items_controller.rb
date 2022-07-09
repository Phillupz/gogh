class CartItemsController < ApplicationController
  
  def index
    cart_items = CartItems.all 
    render json: cart_items, status: :ok
  end

  def show
    cart_item = find_cart_item
    render json: cart_item, status: :ok
  end

  def create
    cart_item = CartItem.create(cart_item_params)
    render json: cart_item, status: :created
  end

  def destroy
    cart_item = find_cart_item
    cart_item.destroy
    head :no_content
  end

  private

  def cart_items_params
    params.permit(:product_id, :user_id, :quantity)
  end

  def find_cart_item
    cart_item = CartItem.find(params[:id])
  end
   
end
