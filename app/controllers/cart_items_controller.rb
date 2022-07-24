class CartItemsController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      cart_items = user.cart_items
    else
      cart_items = CartItem.all 
    end 
    render json: cart_items, status: :ok
  end

  def show
    cart_item = CartItem.find(params[:id])
    render json: cart_item, status: :ok
  end

  def create
    cart_item = CartItem.create(cart_item_params)
    render json: cart_item, status: :created
  end

  def update
    cart_item = find_cart_item
    cart_item.update(cart_item_params)
    render json: cart_item, status: :created
  end

  def destroy
    cart_item = find_cart_item
    cart_item.destroy
    head :no_content
  end

  private

  def cart_item_params
    params.permit(:product_id, :user_id, :quantity)
  end

  def find_cart_item
    cart_item = CartItem.find(params[:id])
  end
   
end
