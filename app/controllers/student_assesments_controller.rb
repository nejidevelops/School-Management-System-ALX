class StudentAssesmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity


    def index
        render json: StudentAssesment.all
    end

    def show
        student_assessment = StudentAssesment.find(params[:id])
        render json: student_assessment
    end

    def update
        student_assesment = StudentAssesment.find(params[:id])
        student_assesment.update(student_assesments_params)
        render json: student_assesment, status: 201
    end

    def create
        student_assesment = StudentAssesment.create(student_assesments_params)
        render json: student_assesment, status: 201
    end

    def destroy
        student_assesment = StudentAssesment.find(params[:id])
        student_assesment.destroy
        render json: student_assesment
    end

    def par_stu_assesments
        student_assesments = StudentAssesment.where(student_id: params[:id])
        render json: student_assesments
    end

    # GET LOGGED IN STUDENT'S ASSESSMENTS
    def logged_student_assessments
        @student = Student.find_by(id: session[:student_id])
    if @student
      assessments = StudentAssesment.where(student_id: @student.id)
      render json: assessments
    else
      render json: {errors: ["Please Log in as a Student to view your Assignments"]}
    end
    end

    private
    def render_record_not_found
        render json: {error: "Student Assessment not found"}, status: 404
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def student_assesments_params
        params.permit(:student_id, :assessment_id, :score)
    end

end
