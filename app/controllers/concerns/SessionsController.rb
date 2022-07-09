class SessionsController < ApplicationController 
  before_action :authorize_user, except: [:login]

  def login 
    user = User.find_by(:email: params[:email])
    if user&.authenticate(params[:password])
      sessions[:current_user] = user.id
      render json: { errors: ['Incorrect username or password'] }, status: :unauthorized 
  end 

  def logout
    session.delete :current_user
    head :no_content
  end


end 