class Api::V1::FoldersController < ApplicationController
  def index
    @folders = Folder.all.order(started: :desc)
    if @folders
      render json: @folders, each_serializer: FoldersSerializer
    else
      render json: { status: 500, error: 'No Folders Found.' }
    end
  end

  def show
    @folder = Folder.find(folder_params[:id])
    if @folder
      render json: { folder: @folder }
    else
      render json: { status: 500, error: 'Folder Does Not Exist.' }
    end
  end

  def folder_params
    params.require(:folder).permit(:id, :title, :description, :started)
  end
end
