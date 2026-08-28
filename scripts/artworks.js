//LOAD JSON
async function loadJSON() {
  // GET JSON FILE
  const response = await fetch("data/artworks.json");
  // RETURN JAVASCRIPT ARRAY
  const artworks = await response.json();

  console.log(artworks);
 // console.log(response.ok, response.status);
  // document.querySelector('.artwork-name').innerHTML = artwork.name;

  //document.getElementById('artwork-link').href = `project.html?project=${artworks.id}`;
}
loadJSON();