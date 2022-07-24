class ReviewsController < ApplicationController
  
  def index
    reviews = Review.all
    render json: reviews
  end  

  def show
    review = find_review
    user = review.user
    render json: review, includes: :user, status: :ok
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
