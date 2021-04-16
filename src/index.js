
document.addEventListener('DOMContentLoaded', function () {
   
    getImages()
    getDogBreeds()

  });


function getImages () {     
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then (resp => resp.json())
        .then (results => {
            results.message.forEach(image => addEachImg(image))
          });
      
}



function addEachImg (dogPicture) {
    let imgContainer = document.querySelector('#dog-image-container');
    let dogImgElement = document.createElement('img');
    dogImgElement.src = dogPicture;
    imgContainer.appendChild(dogImgElement);

}


function getDogBreeds () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch (breedUrl)
        .then (response => response.json())
        .then (function action (result)  {
            result.message.forEach(item =>listBreed(item))
        });
}


function listBreed (breed) { 
    let listContianer = document.querySelector("dog-breeds");
    let listing = document.createElement('li');
    listing.src = breed;
    listContianer.appendChild(listing);
}




