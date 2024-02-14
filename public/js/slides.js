// Set the default slide index
var currentSlide = -1;

// Get the slide elements and display the default slide
var x = document.getElementsByClassName("mySlides");
for (var i = 0; i < x.length; i++) {
  if (i == currentSlide) {
    x[i].style.display = "block";
  } else {
    x[i].style.display = "none";
  }
}

// Start the slideshow
carousel();

// Define the carousel function
function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  currentSlide++;
  if (currentSlide >= x.length) {currentSlide = 0}    
  x[currentSlide].style.display = "block";  
  updateSlideButtons(); // Add this line to update the buttons
  setTimeout(carousel, 5000); // Change image every 9 seconds
}

// Define the prevSlide function
function prevSlide() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  currentSlide--;
  if (currentSlide < 0) {currentSlide = x.length - 1}
  x[currentSlide].style.display = "block";
  updateSlideButtons();
}

// Define the nextSlide function
function nextSlide() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  currentSlide++;
  if (currentSlide >= x.length) {currentSlide = 0}
  x[currentSlide].style.display = "block";
  updateSlideButtons();
}

// Get the slide elements
var slides = document.getElementsByClassName("mySlides");

// Get the slide buttons container
var buttonContainer = document.querySelector(".slide-buttons");

// Loop through the slides and create a button for each one
for (var i = 0; i < slides.length; i++) {
  var button = document.createElement("span");
  button.classList.add("slide-button");
  if (i == currentSlide) {
    button.classList.add("active");
  }
  button.setAttribute("data-slide", i);
  button.addEventListener("click", function() {
    currentSlide = parseInt(this.getAttribute("data-slide"));
    showSlide(currentSlide);
  });
  buttonContainer.appendChild(button);
}

// Define the updateSlideButtons function
function updateSlideButtons() {
  // Get all the slide buttons
  var buttons = document.getElementsByClassName("slide-button");
  
  // Set the active class on the current slide button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  setTimeout(function() { // Add this line to wrap the next line with a delay
    buttons[currentSlide].classList.add("active");
  }, 100); // Set a short delay of 100 milliseconds
}

// Define the showSlide function
function showSlide(slideIndex) {
  // Hide all the slides
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  // Show the requested slide
  x[slideIndex].style.display = "block";
  
  // Update the current slide index
  currentSlide = slideIndex;
  
  // Update the slide buttons
  updateSlideButtons();
}

// Call the updateSlideButtons function to initialize the buttons
updateSlideButtons();



