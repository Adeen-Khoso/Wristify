document.addEventListener("DOMContentLoaded", function () {

    // initializing elements 
  const navigation = document.getElementById("navigation");
  const hamburger = document.getElementById("hamburger");
  const branding = document.getElementById("branding");
  const navLinks = document.querySelectorAll('.navigation a');

  hamburger.onclick = function () {
    navigation.classList.toggle("active");
    branding.classList.toggle("active");
    hamburger.classList.toggle("is-active");
  };

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navigation.classList.remove('active');
      branding.classList.remove('active');
    });
  });
});
