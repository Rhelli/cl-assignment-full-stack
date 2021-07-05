class Api::V1::FoldersController < ApplicationController
  def index
    @folders = Folders.all.order(started: :desc)
    if @folders
      render json: @folders, each_serializer: FolderSerializer
    else
      render json: { status: 500, errors: ['No Folders Found.'] }
    end
  end

  def show
    @folder = Folder.find(folder_params[:id])
    if @folder
      render json: { folder: @folder }
    else
      render json: { status: 500, errors: ['Folder Does Not Exist.'] }
    end
  end

  def folder_params
    params.require(:folder).permit(:id, :title, :description, :started)
  end
end
