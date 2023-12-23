document.addEventListener("DOMContentLoaded", function () {
  // initializing elements
  const navdiv = document.getElementById("nav");
  const navigation = document.getElementById("navigation");
  const hamburger = document.getElementById("hamburger");
  const branding = document.getElementById("branding");
  const navLinks = document.querySelectorAll(".navigation a");

  hamburger.onclick = function () {
    navigation.classList.toggle("active");
    hamburger.classList.toggle("active");
    branding.classList.toggle("active");
  };

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("active");
      branding.classList.remove("active");
    });
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const targetDiv = document.querySelector('#target-div');// need to put the name of the div where the nav will change its color !
  
    if (scrollPosition > 50 || targetDiv.getBoundingClientRect().top >= 0) {
      nav.classList.add("after-scroll");   
    } else {
      nav.style.display = 'none';
    }
  });

});
