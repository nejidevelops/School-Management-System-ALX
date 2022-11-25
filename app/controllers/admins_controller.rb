class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_found_response
    #skip_before_action :authorize, only: [:index, :create]
    def index
        admins = Admin.all
        render json: admins
    end

    def show
    
        admin = Admin.find_by(id: params[:id])
        if admin
            render json: admin, status: :ok
        else
            not_found_response
        end
    end

    private

    def not_found_response
        render json: {error:"Admin not found"}, status: :not_found
    end
end
