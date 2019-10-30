document.addEventListener('DOMContentLoaded', function(){ 
  loadJobsDiv()
  // postJobApp()
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


// function postJobApp(){
//   const addBtn = document.getElementById('submit')
//   // const jobapp = document.getElementById('jobApp')
//   addBtn.addEventListener('click', function(e){
//     e.preventDefault()
//     const applicantId = addBtn.getAttribute('data-applicant')
//     const jobId = addBtn.getAttribute('data-job')
//     const jobappId = addBtn.getAttribute('data-jobapp')
//
//   })
// }

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

  // what I should do with new applicant

};
