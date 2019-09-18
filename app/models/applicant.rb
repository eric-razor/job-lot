class Applicant < ApplicationRecord
  has_many :job_apps
  has_many :jobs, through: :job_apps
end
