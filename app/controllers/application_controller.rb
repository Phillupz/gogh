class ApplicationController < ActionController::API

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def current_user
    User.find_by(id: session[:current_user])
  end 

  def authorize_user
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless current_user
  end

  def is_admin
    return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user.admin
  end

  private

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end