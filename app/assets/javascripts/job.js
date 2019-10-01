document.addEventListener("DOMContentLoaded", function(){ 
  loadJobs()
})

class Job {
  constructor(job) {
    this.id = job.id
    this.name = job.name
  }

  linkToJobApps(){
    return `
    <a href="/jobs/${this.id}/job_apps/">Company name: ${this.name}</a><br>
    `
  }
}

function loadJobs() {
  const allJobsDiv = document.getElementById("allJobs")
  allJobsDiv && fetch('http://localhost:3000/jobs.json')
    .then(resp => resp.json())
    .then(jsonResponse => {
      allJobsDiv.innerHTML = ''
      jsonResponse.forEach(jobsJson => {
        const job = new Job(jobsJson)
        allJobsDiv.innerHTML += job.linkToJobApps()
      })
    })
  }
