Rails.application.routes.draw do

  get '/'     => 'static#index'
  get '*path' => 'static#index'

end
