
class AdminSessionsController < ApplicationController

    #skip_before_action :authorize, only: :create
    def create
        admin = Admin.find_by(username: params[:username])

        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:admin_id]
            session.delete :admin_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end

end