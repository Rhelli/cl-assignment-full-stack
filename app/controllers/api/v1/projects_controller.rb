class Api::V1::ProjectsController < ApplicationController
  def index
    @projects = Project.all.order(started: :desc)
    if @projects
      render json: @projects, each_serializer: ProjectSerializer
    else
      render json: { status: 500, errors: ['No Projects Found.'] }
    end
  end

  def show
    @project = Project.find(project_params[:id])
    if @project
      render json: { project: @project }
    else
      render json: { status: 500, errors: ['Project Does Not Exist.']}
    end
  end

  def project_params
    params.require(:project).permit(:id, :title, :description, :started, :cost, :folders_id)
  end
end
