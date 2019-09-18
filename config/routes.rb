Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :job_listings, only: [:index, :show]
  root 'jobs#index'
  resources :applicants do
    resources :job_apps
  end
  resources :jobs, only: [:index, :show] do
    resources :job_apps
  end
end
