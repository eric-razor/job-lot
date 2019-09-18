class AddNameToApplicant < ActiveRecord::Migration[5.2]
  def change
    add_column :applicants, :name, :string
  end
end
