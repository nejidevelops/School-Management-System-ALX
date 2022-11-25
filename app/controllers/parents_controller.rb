class ParentsController < ApplicationController
  # before_action :set_parent, only: [:show, :edit, :update, :destroy]
  def index
      parents = Parent.all
      render json: parents
  end
  def show
      parent = Parent.find_by(id: params[:id])
      if parent
          render json: parent
      else
          render json: {error: "No such parent"}, status: :not_found
      end
  end
# CREATE 
def create
  parent = Parent.create(parent_params)

  render json: parent,  status: :created
end

def update
  parent =Parent.find_by(id: params[:id])
  
  if parent
    parent.update(parent_params)
    render json: parent        
  else
    render json: {error: "Parent not found"}, status: :not_found
  end
end
# DELELET
def destroy
parent =Parent.find_by(id: params[:id])

if parent 
  children = Student.where(parent_id: parent.id)
  if children.length > 0
    render json: {errors: ["Cannot Delete Parent right now as They currently Have a child/children already enrolled at Edupo School"]}
  else
  parent.destroy
  render json: parent
  end
else
 render json: {error: "Parent not found"}, status: :not_found
end

end
  private
  def parent_params
    params.permit(:role,:address,:phone_no, :full_name, :email, :password, :username)

  end
end
