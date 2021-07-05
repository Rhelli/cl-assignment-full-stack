class Api::V1::TopicsController < ApplicationController
  def index
    @topics = Topic.all
    if @topic
      render json: @topics, each_serializer: TopicSerializer
    else
      render json: { status: 500, errors: ['No Topics Found'] }
    end
  end

  def show
    @topic = Topic.find(topic_params[:id])
    if @topic
      render json: { topic: @topic }
    else
      render json: { status: 500, errors: ['Topic Does Not Exist'] }
    end
  end
end
