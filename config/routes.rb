Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/admin', to: 'users#show'
  get '/', to: 'users#index'
  resources :app_data, only: [:index]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :products, only: [:index, :show, :create, :update, :destroy]
  resources :cart_items, only: [:index, :show, :create, :destroy]
  resources :reviews, only: [:index, :show, :create, :destroy]
  resources :order_items, only: [:index, :show, :create, :destroy]
  resources :orders, only: [:index, :show, :update, :create, :destroy] do 
    resources :order_items, only: [:index, :show, :create, :destroy] do
    end
  end
  resources :charges, only: [:new, :create]
end

