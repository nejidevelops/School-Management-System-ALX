class AssignmentsController < ApplicationController
# before_action :set_assignment, only: [:show, :edit, :update, :destroy]
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity

def index
  assignments = Assignment.all
  render json: assignments
end

# SHOW
def show
    
  assignment = Assignment.find_by(id: params[:id])
  if assignment
      render json: assignment
  else
      render json: {error: "Assignment not found"}, status: :not_found
  end
end

#  CREATE
def create
  assignment = Assignment.create(assignment_params)
  render json: assignment,  status: :created
end

def update
  assignment = Assignment.find(params[:id])
  assignment.update(assignment_params)
  render json: assignment, status: 201
end

# DESTROY
def destroy
  assignment =Assignment.find_by(id: params[:id])
  if assignment 
    student_assignments = StudentAssignment.where(assignment_id: assignment.id)
    if student_assignments.length > 0
      render json: {errors: ["Cannot Delete Assignment right now as there are students already assigned to it"]}
    else
      assignment.destroy
      render json: assignment
    end
  else
   render json: {error: "Assignment not found"}, status: :not_found
  end

end

# GET A SUBJECT'S ASSIGNMENTS
def subject_assignments
  assignments = Assignment.where(subject_id: params[:id])
  render json: assignments
end

   private
   def assignment_params
    params.permit(:name, :subject_id, :due_date)
   end

    def render_record_not_found
        render json: {error: "Student Assessment not found"}, status: 404
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
