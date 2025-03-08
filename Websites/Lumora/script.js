console.log("ello")

function myFunction() {
    var x = document.getElementById("MobileNav");
    e = x.children;
    console.log("nuggies")
    if (x.style.height == "0px") {
        x.style.height = "50vh";
        setTimeout(()=>{for (let i=0; i < e.length; i++){
          e[i].style.display="grid";
        }}, 75)

    } else {
       x.style.height = "0px"
       for (let i=0; i < e.length; i++){
        e[i].style.display="none";
      }
    }
}






document.getElementById("myModal").addEventListener("click", function(e) {
  // Check if the click is outside the modal-content area
  if (e.target === this) { // If the background was clicked (not the content)
    closeModal();
  }
});

document.getElementById("mimod").addEventListener("click", function(e) {
  // Check if the click is outside the modal-content area
  if (e.target === this) { // If the background was clicked (not the content)
    closeModal();
  }
});


function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block"; // Make the modal visible
  setTimeout(() => {
    modal.style.opacity = "1"; // Fade in
  }, 10); // Small delay to allow the browser to register the change
}

function closeModal() {
  document.getElementById("myModal").style.opacity = "0";
  setTimeout(() => { 
    document.getElementById("myModal").style.display = "none"; 
}, 200);  // Match the fade duration
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  openModal()
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("minimgslide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.opacity = "1";
  dots[slideIndex-1].className += " active";
  showSlidesa(n)
}
