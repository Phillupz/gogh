class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable  
  
  def index 
    render json: User.all
  end

  def show
    current_user = User.find_by(id: session[:current_user])
    render json: current_user, status: :ok
  end
 
  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
    end
  end   

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end 

  private

  def unprocessable
    render json: { errors: ['Invalid Info'] }, status: :unprocessable_entity
  end 
  
  def user_params
    params.permit(:first, :last, :stripe_email, :stripeToken, :customer_id, :admin, :email, :password_digest)
  end

end
