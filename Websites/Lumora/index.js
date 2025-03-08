let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function cycleImages() {
  // Remove active class from the current image
  images[currentIndex].classList.remove('active');
  
  // Move to the next image index
  currentIndex = (currentIndex + 1) % totalImages;
  
  // Add active class to the next image
  images[currentIndex].classList.add('active');
}

// Set interval to change images every 3 seconds
setInterval(cycleImages, 3000);
  
 

let currentIndexa = 0;
const imagesa = document.querySelectorAll('.minimgcon img');
const totalimagesa = imagesa.length;

function cycleimagesa() {
  // Remove active class from the current image
  imagesa[currentIndexa].classList.remove('active');
  
  // Move to the next image index
  currentIndexa = (currentIndexa + 1) % totalimagesa;
  
  // Add active class to the next image
  imagesa[currentIndexa].classList.add('active');
}

// Set interval to change imagesa every 3 seconds
setInterval(cycleimagesa, 3000);
