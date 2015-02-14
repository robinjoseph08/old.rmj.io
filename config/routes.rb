Rails.application.routes.draw do

  resources :regex_levels
  resources :regex_words
  resources :takuzu_boards
  resources :takuzu_boxes

  get '/'     => 'static#index'
  get '*path' => 'static#index'

end
