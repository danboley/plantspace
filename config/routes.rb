Rails.application.routes.draw do

  resources :plants
  resources :stores, only: [:index, :create]
  resources :species, only: [:index]
  resources :users, only: [:create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
