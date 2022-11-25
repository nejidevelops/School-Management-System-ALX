class StaffsController < ApplicationController
    #GET
    def index
          staffs = Staff.all
          render json: staffs
    end
        # SHOW
    def show
          staff = Staff.find_by(id: params[:id])
          if staff
              render json: staff
          else
              render json: {error: "staff not found"}, status: :not_found
          end
    end
    #  CREATE
    def create
    staff = Staff.create(staff_params)
    render json: staff,  status: :created
    end

    #PATCH
  def update
    staff = Staff.find(params[:id])
    staff.update(staff_params)
    render json: staff, status: 201
  end
private
def staff_params
    params.permit(:post, :department, :image, :phone_no, :full_name)
end
end