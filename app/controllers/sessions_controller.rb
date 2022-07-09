class SessionsController < ApplicationController
    
    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:current_user] = user.id
        render json: user, status: :created
      else
        render json: { errors: ["Incorrect username or password"] }, status: :unauthorized
      end
    end
  
    def logout
      session.delete :current_user
      head :no_content
    end
  
  end