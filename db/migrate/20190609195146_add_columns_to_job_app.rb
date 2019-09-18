class AddColumnsToJobApp < ActiveRecord::Migration[5.2]
  def change
    add_column :job_apps, :job_description, :text
    add_column :job_apps, :job_id, :integer
    add_column :job_apps, :applicant_id, :integer
  end
end
