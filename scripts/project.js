const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

console.log(projectId);

fetch("data/artworks.json")
  .then(response => response.json())
  .then(data => {

    console.log(data);

    const project = data.projects.find(
      project => project.id === projectId
    );
    console.log(project);
    
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('main-image').src = project.thumbnail;
    document.getElementById('art-description').innerText = project.description;

    if (project.video === null) {
      
    document.querySelector('.video-container').remove();
    }
    document.getElementById('video').src = project.video;
  });

//console.log(project);