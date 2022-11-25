class ParentSessionsController < ApplicationController

    def create
        parent = Parent.find_by(username: params[:username])
        
        if parent&.authenticate(params[:password])
            session[:parent_id] = parent.id
            render json: parent
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:parent_id]
            session.delete :parent_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end
