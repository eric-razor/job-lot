class AddTimestampsToJobApp < ActiveRecord::Migration[5.2]
  def change
    add_column :job_apps, :created_at, :datetime
    add_column :job_apps, :updated_at, :datetime
  end
end
