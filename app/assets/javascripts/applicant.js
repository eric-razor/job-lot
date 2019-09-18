document.addEventListener("DOMContentLoaded", function(){ 
  getAllApplicantJobs()
  postNewApplicant()
})

class Applicant {
  constructor(applicant) {
    this.id = applicant.id
    this.name = applicant.name
    this.job_apps = applicant.job_apps
    this.jobs = applicant.jobs
    // this.applicantId = applicant.applicant_id
  }

  showJobs(){
    return `
    <a href='#'>testing testing:Application: ${this.job_description}</a> <br>
    `
  }
}

function postNewApplicant(){
  cosnt submitButton = document.getElementById('submit')
  submitButton.addEventListener('click', function(e)
  })

}
