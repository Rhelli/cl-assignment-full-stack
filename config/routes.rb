Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'project_topics/index'
      get 'project_topics/show'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'project_folders/index'
      get 'project_folders/show'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'topics/index'
      get 'topics/show'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'projects/index'
      get 'projects/show'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'folders/index'
      get 'folders/show'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
