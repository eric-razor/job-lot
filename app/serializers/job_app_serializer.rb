class JobAppSerializer < ActiveModel::Serializer
  attributes :id, :job_description, :applicant_id, :job_id
  belongs_to :applicant
  belongs_to :job
end
