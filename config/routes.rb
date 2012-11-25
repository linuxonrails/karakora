Karakora::Application.routes.draw do
  devise_for :users#, path_names: { sign_in: "login", sign_out: "logout"}

  get "home/index"

  get "start" => "home#start", as: :start
  get "about" => "home#about", as: :about
  get "pricing" => "home#pricing", as: :pricing
  get "contact" => "home#contact", as: :contact

  # not working: only for demo

  get "whatsnew/index", as: :whatsnew
  
  get "cards/mine" => "home#mycards"
  
  get "cards" => "home#allcards"
  
  get "demo" => "home#demo"
  
  get "buy" => "home#index", as: :buy # disabled for now...
  
  root :to => "home#index"
end
