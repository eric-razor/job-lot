class ApplicantsController < ApplicationController
  def index
    @allApplicants = Applicant.all
    respond_to do |format|
      format.html
      format.json { render json: @allApplicants }
    end
  end

  def show
    @applicant = Applicant.find(params[:id])
  end

  def new
    @applicant = Applicant.new
    # @applicant.job_apps
  end

  def create
    @applicant = Applicant.create(applicant_params)
    flash[:notice] = "Applicant: #{@applicant.name}, has been successfully created"
    redirect_to applicants_path
  end

  def edit
  end

  def update
  end

  private

  def applicant_params
    params.require(:applicant).permit(:name)
  end

  # def job_params
  #   params.require(:jobapp).permit(:job_description, job_apps_attributes[:job_description])
  # end
end
