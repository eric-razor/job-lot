class ApplicantsController < ApplicationController
  skip_before_action :verify_authenticity_token
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
  end

  def create
    @applicant = Applicant.create(applicant_params)
    respond_to do |format|
      format.html
      format.json { render json: @applicant}
    end

  end

  private
  def applicant_params
    params.require(:applicant).permit(:name)
  end
end
