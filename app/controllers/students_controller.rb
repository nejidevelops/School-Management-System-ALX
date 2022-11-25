class StudentsController < ApplicationController
  # before_action :set_student, only: [:show, :edit, :update, :destroy]

  rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity

  def index
      students = Student.all
      render json: students, status: :ok
  end
  def show
      student = Student.find_by(id: params[:id])
      if student
          render json: student
      else
         render json: {error: "student not found"}, status: :not_found
      end
  end
# CREATE
def create
  @admin = Admin.find_by(id: session[:admin_id])
  if @admin
    student = Student.create!(student_params)
    render json: student, status: :created
  else
    render json: {errors: ["Only Admins can Create Add New Students"]}
  end
end
#UPDATE
  def update
    student =Student.find_by(id: params[:id])
    if student
      student.update(student_params)
      render json: student
    else
      render json: {error: "Student not found"}, status: :not_found
    end
  end
# DELETE
def destroy
  student =Student.find_by(id: params[:id])
  if student
    student.destroy
    render json: student
  else
  render json: {errors: ["student not found"]}, status: :not_found
  end
end

  #   GET A PARENT'S STUDENTS
  def student_parent
    @parent = Parent.find_by(id: session[:parent_id])
    if @parent
      students = Student.where(parent_id: @parent.id)
      render json: students
    else
    render json: {errors: ["Please Log in as parent to view your students"]}, status: 401  
    end
  end

  def student_id
    puts "XXXXXXXXXXXXXXXXXXXXXXXXX"
    puts "XXXXXXXXXXXXXXXXXXXXXXXXX"
    puts "XXXXXXXXXXXXXXXXXXXXXXXXX"
    puts session[:student_id]
    studentDetails =  Student.find(session[:student_id])
    puts studentDetails
    # if @student
      # students = Student.where(parent_id: @parent.id)
    render json: studentDetails
    # else
    # render json: {errors: ["student id not available"]}, status: 401
    # end
  # end
end


  def student_id
    puts "XXXXXXXXXXXXXXXXXXXXXXXXX"
    puts "XXXXXXXXXXXXXXXXXXXXXXXXX"
    puts "XXXXXXXXXXXXXXXXXXXXXXXXX"
    puts session[:student_id]
    studentDetails =  Student.find(session[:student_id])
    puts studentDetails
    # if @student
      # students = Student.where(parent_id: @parent.id)
    render json: studentDetails
    # else
    # render json: {errors: ["student id not available"]}, status: 401
    # end
  # end
end


    # GET A SUBJECT'S STUDENTS
    def subject_students
      students = Student.where(subject_id: params[:id])
      render json: students
    end

private

def render_unproccessable_entity(invalid)
  render  json: {errors: invalid.record.errors.full_messages}, status: 422
end

def render_not_found_response
  render json: {errors: ["Record Not Found"]}
end

  def student_params
    params.permit(:role, :gender, :image, :parent_id, :phone_no, :admission_no, :subject_id,:full_name,:email,:password, :classroom_id, :username)
  end

  
end





