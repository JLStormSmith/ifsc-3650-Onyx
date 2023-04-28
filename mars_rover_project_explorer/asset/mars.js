async function search(){
    let Rover = $('input[name="Rover"]:checked').val();
    let date = $('#Date').val();

    makeAPICall(Rover, date);
}

const apiEndpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const apiKey = 'kDA7us7eAoxYhCBdfORm5Iu9MDRnduuJXq8jRWXM';

function createGallery(images){
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = '';

    for (let i = 0; i < 25; i++) {
        const image = images[i];

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('imageContainer');
        const img = document.createElement('img');
        img.src = image.img_src;
        img.alt = image.camera.full_name;
        img.title = image.camera.name;
        img.addEventListener('click', () => {
          window.open(image.img_src, '_blank');
        });
        imgContainer.appendChild(img);
        galleryContainer.appendChild(imgContainer);
      }
}

function searchPhotos(Rover, date){
    const url = `${apiEndpoint}/${Rover}/photos?earth_date=${date}&api_key=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const images = data.photos;
        if (images.length > 0){
            createGallery(images);
        } else {
            alert('No photos found for the selected date ');
        }
    })
    .catch(error => console.error(error));
}

function search(){
    const form = document.getElementById('myform');
    if(form.checkValidity()){
        const Rover = document.querySelector('input[name="Rover"]:checked').value;
        const date = document.getElementById('Date').value;
        searchPhotos(Rover, date);
    }
}
function clearform(){
    const form = document.getElementById('myform');
    form.reset();
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = '';
}

function getCuriosity() {
    document.getElementById('Date').min = '2012-08-06';
    document.getElementById('Date').max = '2019-09-28';
  }
  
  function getOpportunity() {
    document.getElementById('Date').min = '2004-01-26';
    document.getElementById('Date').max = '2016-06-11';
  }
  
  function getSpirit() {
    document.getElementById('Date').min = '2004-01-05';
    document.getElementById('Date').max = '2004-03-21';
  }


  function clearform(){
    $('#myform')[0].reset();
    $('#galleryContainer').empty();
  }

  $('#myform').submit(function(e) {
    e.preventDefault();
    search();
  });

  function getCuriosity() {
    document.getElementById("Date").value = "2012-08-06";
}

function getOpportunity() {
    document.getElementById("Date").value = "2004-01-26";
}

function getSpirit() {
    document.getElementById("Date").value = "2004-01-05";
}