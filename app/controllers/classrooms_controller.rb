class ClassroomsController < ApplicationController

    def index
        classrooms = Classroom.all
        render json: classrooms
    end

    def show
        classroom = Classroom.find_by(id: params[:id])
        if classroom
            render json: classroom
        else
            render json: {error: "No classroom found"}, status: :not_found
        end
    end

    private

    def not_found_response
        render json: {error:"Classroom not found"}, status: :not_found
    end

        # Use callbacks to share common setup or constraints between actions.
        # def set_classroom
        #     @classroom = Classroom.find(params[:id])
        #   end
      
          # Never trust parameters from the scary internet, only allow the white list through.
          # def classroom_params
          #   params.require(:classroom).permit(:name, :year, :grade_id, :section, :status, :remarks, :teacher_id)
          # end
end
