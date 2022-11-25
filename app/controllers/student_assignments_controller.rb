class StudentAssignmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity


    def index
        render json: StudentAssignment.all
    end

    def show
        student_assignment = StudentAssignment.find(params[:id])
        render json: student_assignment
    end

    def update
        student_assignment = StudentAssignment.find(params[:id])
        student_assignment.update(student_assignment_params)
        render json: student_assignment, status: 201
    end

    def destroy
        student_assignment = StudentAssignment.find(params[:id])
        student_assignment.destroy
        render json: student_assignment
    end

    def par_stu_assignments
        student_assignments = StudentAssignment.where(student_id: params[:id])
        render json: student_assignments
    end
    

    def create
        student_assignment = StudentAssignment.create(student_assignment_params)
        render json: student_assignment, status: 201
    end

    # GET LOGGED IN STUDENT'S ASSIGNMENTS
    def logged_student_assignments
        @student = Student.find_by(id: session[:student_id])
    if @student
      assignments = StudentAssignment.where(student_id: @student.id)
      render json: assignments
    else
      render json: {errors: ["Please Log in as a Student to view your Assignments"]}
    end
    end

    private

    def render_record_not_found
        render json: {error: "Student Assignment not found"}, status: 404
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def student_assignment_params
        params.permit(:student_id, :assignment_id, :score)
    end

end
