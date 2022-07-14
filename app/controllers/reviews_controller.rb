class ReviewsController < ApplicationController
  skip_before_action :authorize
  
  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end  

  def show
    review = find_review
    render json: review, status: :ok
  end
  
  def create
    review = Review.create(review_params)
    render json: review, status: :created
  end  

  def destroy
    review = find_review 
    review.destroy
    head :no_content
  end  

  private

  def review_params
    params.permit(:rating, :text, :user_id, :product_id)
  end   

  def find_review
    review = Review.find(params[:id])
  end 

end
