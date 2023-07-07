document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector(".header");
  var content = document.querySelector(".acerca2");
  var slideIndex = 0;

  showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3500); // Cambiar imagen cada 3 segundos (3000 milisegundos)
}

  function updateHeaderShadow() {
    var rect = content.getBoundingClientRect();
    if (rect.top < 0) {
      header.classList.add("with-shadow");
    } else {
      header.classList.remove("with-shadow");
    }
  }

  window.addEventListener("scroll", function() {
    updateHeaderShadow();
  });

  // Llamamos a la función una vez al cargar la página para verificar la posición inicial
  updateHeaderShadow();
});


