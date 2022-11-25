Rails.application.routes.draw do
  resources :posts
  resources :courses
  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"
  get "/teachers", to: "users#teachers"
  resources :users, only: [:index, :show, :create]
  get "/users/:id/posts", to: "posts#user_posts" 
  get "/users/:id/courses", to: "courses#user_courses" 
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
