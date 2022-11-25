class PersistenceController < ApplicationController
    def admin
        admin = Admin.find_by(id: session[:admin_id])
        if admin
            render json: admin
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end
    def teacher
        teacher = Teacher.find_by(id: session[:teacher_id])
        if teacher
            render json: teacher
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end
    def student
        student = Student.find_by(id: session[:student_id])
        if student
            render json: student
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end
    def parent
        parent = Parent.find_by(id: session[:parent_id])
        if parent
            render json: parent
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end
end







