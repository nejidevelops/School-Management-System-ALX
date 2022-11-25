Rails.application.routes.draw do
  resources :subject_teachers
  resources :student_assesments
  resources :student_assignments
  resources :users, only: [:index, :show, :update, :create]
  resources :admins, only: [:index, :show, :update, :create]
  resources :assignments, only: [:index, :show, :update, :create, :destroy]
  resources :assessments, only: [:index, :show, :update, :create, :destroy]
  resources :classrooms, only: [:index, :show, :update, :create]
  resources :subjects, only: [:index, :show, :update, :create]
  resources :teachers, only: [:index, :show, :update, :create, :destroy]
  resources :parents, only: [:index, :show, :update, :create,  :destroy]
  resources :students, only: [:index, :show, :update, :create, :destroy]
  resources :staffs, only: [:index, :show, :update, :create]
  # resources :assignments
  # resources :assessments
  # resources :classrooms, only: [:index, :show]
  # resources :subjects, only: [:index, :show]
  # resources :teachers
  # resources :parents
  # resources :students
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

 get "/studentId", to: "students#student_id"
 
  #   GET A LOGGED IN PARENT'S STUDENTS
  get "/student_parent", to: "students#student_parent"

  # GET A STUDENT'S ALL ASSESSMENTS
  get "/par_stu_assesments/:id", to: "student_assesments#par_stu_assesments"

  # GET A STUDENT'S ALL ASSIGNMENTS
  get "par_stu_assignments/:id", to: "student_assignments#par_stu_assignments"
  
  # GET A LOGGED IN TEACHER'S SUBJECTS
  get "teacher_subjects", to: "subject_teachers#teacher_subjects"

  # GET A SUBJECT'S STUDENTS
  get "subject_students/:id", to: "students#subject_students" 
  
  # GET A SUBJECT'S STUDENTS
  get "subject_students/:id", to: "students#subject_students"

  # GET A SUBJECT'S ASSIGNMENTS
  get "subject_assignments/:id", to: "assignments#subject_assignments"

    # GET A SUBJECT'S ASSESSMENTS
    get "subject_assessments/:id", to: "assessments#subject_assessments"

    # GET A LOGGED IN STUDENT'S ASSIGNMENTS
    get "logged_student_assignments", to: "student_assignments#logged_student_assignments"

    # GET A LOGGED IN STUDENT'S ASSESSMENTS
    get "logged_student_assessments", to: "student_assesments#logged_student_assessments"
  
  # CREATE A NEW TEACHER SUBJECT
  post "/new_subject_teacher", to: "subject_teachers#new_teacher_subject"

  # GET A LOGGED IN STUDENT"
  get "/studentId", to: "students#student_id"

  

    # ADMIN AUTH
    post "/admin_login", to: "admin_sessions#create"
    delete "/admin_logout", to: "admin_sessions#destroy"
    get "/admin_auth", to: "persistence#admin"
    
  
    #TEACHER AUTH
    post "/teacher_login", to: "teacher_sessions#create"
    delete "/teacher_logout", to: "teacher_sessions#destroy"
    get "/teacher_auth", to: "persistence#teacher"
  
  
    #STUDENT AUTH
    post "/student_login", to: "student_sessions#create"
    delete "/student_logout", to: "student_sessions#destroy"
    get "/student_auth", to: "persistence#student"
  
  
    #PARENT AUTH
    post "/parent_login", to: "parent_sessions#create"
    delete "/parent_logout", to: "parent_sessions#destroy"
    get "/parent_auth", to: "persistence#parent"
    
end