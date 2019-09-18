class Job < ApplicationRecord
  has_many :job_apps
  has_many :applicants, through: :job_apps
end
