class OrdersController < ApplicationController
  
  def index
    orders = Order.all
    render json: orders, status: :created
  end

  def show
    order = find_order
    render json: order, status: :ok
  end

  def update
    order = find_order
    order.update(order_params)
    render json: order, status: :ok
  end

  def create 
    order = Order.create!(order_params)
    message = OrderMailer.with(email: order.user.email).thank_you_email
    message.deliver_now
    render json: order, status: :created
  end

  def destroy
    order = find_order
    order.destroy
    head :no_content
  end

  private

  def find_order
    order = Order.find(params[:id])
  end 

  def order_params 
    params.permit(:user_id, :total, :status)
  end 

end
