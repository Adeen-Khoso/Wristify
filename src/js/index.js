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


  // numbers counter animation !
  const targetValues = [5000 , 1500, 25]; 
  const duration = 2500; 

  const counterElements = document.querySelectorAll(".highlighted-stat");

  function animateValue(element, start, end, duration) {
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    const runAnimation = () => {
      const now = new Date().getTime();
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + '+';

      if (now < endTime) {
        requestAnimationFrame(runAnimation);
      }
    };

    runAnimation();
  }

  counterElements.forEach((element, index) => {
    animateValue(element, 0, targetValues[index], duration);
  });
});
