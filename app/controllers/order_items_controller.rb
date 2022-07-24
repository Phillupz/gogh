class OrderItemsController < ApplicationController
  
  def index
    if params[:order_id]
      order = find_order
      order_items = order.order_items
    else
      order_items = OrderItem.all
    end
    render json: order_items, include: :product
  end

  def show
    order = find_order_item
    render json: order, status: :ok
  end

  def create
    order_item = OrderItem.create(order_item_params)
    render json: order_item, status: :created
  end

  def destroy
    order_item = find_order_item
    order_item.destroy
    head :no_content
  end

  private

  def order_item_params
    params.permit(:order_id, :product_id, :quantity)
  end

  def find_order
    Order.find(params[:order_id])
  end

  def find_order_item
    OrderItem.find(params[:id])
  end

end
