class Api::V1::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    if @projects
      render json: @
  end

  def show
  end
end
