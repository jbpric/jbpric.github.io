document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector(".header");
  var content = document.querySelector(".acerca2");

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
