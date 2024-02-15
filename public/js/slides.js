var currentSlide = -1;

var x = document.getElementsByClassName("mySlides");
for (var i = 0; i < x.length; i++) {
  if (i == currentSlide) {
    x[i].style.display = "block";
  } else {
    x[i].style.display = "none";
  }
}

carousel();

function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  currentSlide++;
  if (currentSlide >= x.length) {currentSlide = 0}    
  x[currentSlide].style.display = "block";  
  updateSlideButtons(); 
  setTimeout(carousel, 5000); 
}


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


var slides = document.getElementsByClassName("mySlides");


var buttonContainer = document.querySelector(".slide-buttons");


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


function updateSlideButtons() {
  var buttons = document.getElementsByClassName("slide-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  setTimeout(function() {
    buttons[currentSlide].classList.add("active");
  }, 100); 
}


function showSlide(slideIndex) {
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex].style.display = "block";

  currentSlide = slideIndex;

  updateSlideButtons();
}

updateSlideButtons();



