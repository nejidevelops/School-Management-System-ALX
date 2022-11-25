class SubjectsController < ApplicationController

    # before_action :set_subject, only: [:show, :edit, :update, :destroy]
    def index
      subjects =Subject.all
      render json: subjects
    end

    def show 
      subject = Subject.find_by(id: params[:id])
      render json: subject
    end
end
