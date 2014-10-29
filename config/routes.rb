Rails.application.routes.draw do

  resources :regex_levels
  resources :regex_words

  get '/'     => 'static#index'
  get '*path' => 'static#index'

end
