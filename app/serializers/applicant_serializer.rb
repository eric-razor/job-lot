class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_apps
  has_many :job_apps
  has_many :jobs, through: :job_apps
end
