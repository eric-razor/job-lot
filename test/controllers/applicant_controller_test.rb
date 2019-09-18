require 'test_helper'

class ApplicantControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get applicant_index_url
    assert_response :success
  end

  test "should get show" do
    get applicant_show_url
    assert_response :success
  end

  test "should get new" do
    get applicant_new_url
    assert_response :success
  end

  test "should get create" do
    get applicant_create_url
    assert_response :success
  end

  test "should get edit" do
    get applicant_edit_url
    assert_response :success
  end

  test "should get update" do
    get applicant_update_url
    assert_response :success
  end

end
