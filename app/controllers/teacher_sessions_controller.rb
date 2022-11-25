class TeacherSessionsController < ApplicationController

    def create
        teacher = Teacher.find_by(username: params[:username])
        if teacher&.authenticate(params[:password])
            session[:teacher_id] = teacher.id
            render json: teacher
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:teacher_id]
            session.delete :teacher_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end
