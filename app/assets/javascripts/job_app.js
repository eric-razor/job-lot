document.addEventListener('DOMContentLoaded', function(){ 
  loadJobsDiv()
})

class JobApp{
  constructor(jobAppAttrs) {
    this.id = jobAppAttrs.id,
    this.jobDescription = jobAppAttrs.job_description,
    this.jobId =  jobAppAttrs.job_id,
    this.applicantId = jobAppAttrs.applicant_id
  }

  linkHTML(){
    return `
  <a href="/jobs/${this.jobId}/job_apps/${this.id}"> description: ${this.jobDescription}</a><br>
    `
  }
}

function loadJobsDiv(){
  const allJobsDiv = document.getElementById('job_apps')
  allJobsDiv && fetch(`http://localhost:3000/jobs/${allJobsDiv.dataset.id}.json`)
  .then(resp => resp.json())
  .then(resp => {
    resp.job_apps.forEach(apps => {
      const app = new JobApp(apps)
      console.log(app);
      allJobsDiv.innerHTML += app.linkHTML()
    })
  })
};
