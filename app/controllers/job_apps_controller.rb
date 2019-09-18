class JobAppsController < ApplicationController

  def index
    @jobapps = JobApp.find_by(params[:id])
    # byebug
    respond_to do |format|
      format.html
      format.json { render json: @jobapps }
    end
  end

  def show
    @jobapp = JobApp.find(params[:id])

  end

  def new
    @jobapp = new JobApp(jobapp)

  end

  def create
  end

  def edit
    #code
  end

  def update
    #code
  end


end
