document.addEventListener("DOMContentLoaded", function(){ 
  loadJobs()
  sortIndex()
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

function sortIndex(){
  const sortButton = document.getElementById('sortButton')
  sortButton.addEventListener('click', function(e){
    e.preventDefault()
    fetch('http://localhost:3000/jobs.json')
    .then(resp => resp.json())
    .then(jsonResponse => {
      jsonResponse.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      const allJobsDiv = document.getElementById("allJobs")
      allJobsDiv.innerHTML = ' '
      jsonResponse.forEach(job => {
        const company = new Job(job)
        allJobsDiv.innerHTML += company.linkToJobApps()
      })
    })
  })
}
