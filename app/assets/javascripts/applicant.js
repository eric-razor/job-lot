document.addEventListener("DOMContentLoaded", function(){ 
  postNewApplicant()
})

class Applicant {
  constructor(applicant) {
    this.id = applicant.id
    this.name = applicant.name
    this.job_apps = applicant.job_apps
    this.jobs = applicant.jobs
  }

  showJobs(){
    return `
    <a href='#'>testing testing:Application: ${this.job_description}</a> <br>
    `
  }

  showName(){
    return `
    <br>
    <h3>${this.name} has been created!</h3>
    <br>
    <a href='/'> Home </a>
    `
  }
}

function postNewApplicant(name){
  const applicant_form = document.getElementById("applicant_name")
  const nameDiv = document.getElementById("new_applicant_name")
  applicant_form.addEventListener('submit', function(e){
    e.preventDefault()
    const app_name = {
      name: applicant_form.applicant_name.value
    }
    fetch('http://localhost:3000/applicants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(app_name)
    }).then(resp => resp.json()).then(jsonResp => {
      nameDiv.innerHTML = ''
      const applicant = new Applicant(jsonResp)
      nameDiv.innerHTML += applicant.showName()
    })
  })
}
