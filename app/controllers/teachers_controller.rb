class TeachersController < ApplicationController
  # before_action :set_teacher, only: [:show, :edit, :update, :destroy]

    def index
        teachers = Teacher.all
        render json: teachers
    end
# SHOW
    def show
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            render json: teacher
        else

            render json: {error: "Teacher not found"}, status: :not_found
        end
    end

  #  CREATE
    def create
      teacher = Teacher.create(teacher_params)
      render json: teacher,  status: :created
    end
# UPDATE
    def update
      teacher =Teacher.find_by(id: params[:id])

      
      if teacher
        teacher.update(teacher_params)
        render json: teacher        
      else
        render json: {error: "Teacher not found"}, status: :not_found

      end
    end
# DELELET
def destroy
  teacher =Teacher.find_by(id: params[:id])

  if teacher 
    teacher.destroy
    
    render json: teacher
  else
   render json: {error: "Teacher not found"}, status: :not_found
  end

end
   
private
    def teacher_params
      params.permit(:role, :gender, :image,:phone_no, :address, :full_name, :email, :password, :username)
    end

end

