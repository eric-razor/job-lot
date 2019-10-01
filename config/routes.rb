Rails.application.routes.draw do
  root 'jobs#index'
  resources :applicants , only: [:index,:show, :new, :create] do
    resources :job_apps, only: [:index,:show]
  end
  resources :jobs, only: [:index, :show] do
    resources :job_apps, only: [:index, :show]
  end
end
