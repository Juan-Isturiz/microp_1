let slideIndex = 1;
const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("hero");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const scrollToHash=(hashName)=> {
  location.hash = "#" + hashName;
}

