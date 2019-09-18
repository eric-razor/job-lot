class JobsController < ApplicationController
  def index
    @jobs = Job.all
    respond_to do |format|
      format.html
      format.json { render json: @jobs }
    end
    # respond_to responds to the request
  end

  def show
    @job = Job.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @job }
    end
  end

  def update

  end
end
