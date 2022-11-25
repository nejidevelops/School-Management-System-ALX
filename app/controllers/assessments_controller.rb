class AssessmentsController < ApplicationController
    # before_action :set_grade, only: [:show, :edit, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity

    def index
      assesments = Assessment.all
      render json: assesments
    end
    
    # SHOW
    def show
        
      assesment = Assessment.find_by(id: params[:id])
      if assesment
          render json: assesment
      else
          render json: {error: "Assessment not found"}, status: :not_found
      end
    end
    
    #  CREATE
    def create
      assesment = Assessment.create(assesment_params)
      render json: assesment,  status: :created
    end

    def update
      assessment = Assessment.find(params[:id])
      assessment.update(assesment_params)
      render json: assessment, status: 201
    end
    # DESTROY
    
    def destroy
      assesment =Assessment.find_by(id: params[:id])
    
      if assesment 
        student_assesments = StudentAssesment.where(assessment_id: assesment.id)
        if student_assesments.length > 0
          render json: {errors: ["Cannot Delete Assessment right now as there are students already assigned to it"]}
        else
          assesment.destroy
          render json: assesment 
        end
      else
       render json: {error: "Assessment not found"}, status: :not_found
      end
    
    end

    # GET A SUBJECT'S ASSESSMENTS
    def subject_assessments
      assessments = Assessment.where(subject_id: params[:id])
      render json: assessments
    end


    private
    def assesment_params
       params.permit(:name, :subject_id, :total)
    end

    def render_record_not_found
        render json: {error: "Student Assessment not found"}, status: 404
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
