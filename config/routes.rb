Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorize_user', to: 'users#show'
  get '/admin', to: 'users#show'
  get '/', to: 'users#index'
  
  resources :app_data, only: [:index]
  resources :featured_products, only: [:index]
  resources :users, only: [:index, :patch, :show, :create, :destroy] do
    resources :cart_items, only: [:index, :show, :create, :destroy]
  end
  resources :products, only: [:index, :show, :create, :update, :destroy] do
    get '/rating', to: 'products#rating'
  end
  resources :cart_items, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :destroy]
  resources :order_items, only: [:index, :show, :create, :destroy]
  resources :order_intentions, only: [:index, :show, :update, :create, :destroy] do 
    resources :order_items, only: [:index, :show, :create, :destroy] 
  end
  resources :orders, only: [:index, :show, :update, :create, :destroy] do 
    resources :order_items, only: [:index, :show, :create, :destroy] do
    end
  end
  resources :charges, only: [:new, :create]
end

