require 'test_helper'

class JobAppsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get job_apps_index_url
    assert_response :success
  end

  test "should get show" do
    get job_apps_show_url
    assert_response :success
  end

end
