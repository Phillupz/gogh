class AppDataController < ApplicationController
  
  def index 
    app_data = AppData.all
    render json: app_data, status: :ok
  end

end
