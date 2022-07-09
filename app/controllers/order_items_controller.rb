class OrderItemsController < ApplicationController

  def index
    order_items = OrderItem.all
    render json: order_items, status: :ok
  end

  def create
    order_item = OrderItem.create(:order_id, :product_id)
    render json: order_item, status: :created
  end

  def destroy
    order_item = OrderItem.find(params[:id])
    order_item.destroy
    head :no_content
  end

end
