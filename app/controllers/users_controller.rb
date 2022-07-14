class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable  
  skip_before_action :authorize

  def index 
    render json: User.all
  end

  def show
    user = find_user
    render json: user, status: :ok
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

  def find_user 
    user = User.find(params[:id])
  end

  def unprocessable
    render json: { errors: ['Invalid Info'] }, status: :unprocessable_entity
  end 
  
  def user_params
    params.permit(:first, :last, :admin, :email, :password_digest)
  end

end
