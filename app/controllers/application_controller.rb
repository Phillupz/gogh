class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  include ActionController::Cookies

  def current_user
    User.find_by(id: session[:current_user])
  end

  def is_admin
      return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user.admin
  end

  private

  def not_found(invalid)
      render json: { errors: invalid }, status: :not_found
  end
  
end