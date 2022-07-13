class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable  
  before_action :authorize

  def index 
    render json: User.all
  end

  def show
    render json: @current_user, status: :ok
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
    params.permit(:first, :last, :admin, :email, :password_digest)
  end

end
