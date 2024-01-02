
  // initializing elements
  const nav = document.getElementById("nav");
  const navigation = document.getElementById("navigation");
  const hamburger = document.getElementById("hamburger");
  const branding = document.getElementById("branding");
  const navLinks = document.querySelectorAll(".navigation a");


  // hamburger toggle
  hamburger.onclick = function () {
    navigation.classList.toggle("active");
    hamburger.classList.toggle("active");
    branding.classList.toggle("active");
  };

  // closing nav after clicked on link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("active");
      branding.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // numbers counter animation !
  const targetValues = [5000, 1500, 25,7300,14];
  const duration = 2500;
  const counterElements = document.querySelectorAll(".highlighted-stat");

  function animateValue(element, start, end, duration) {
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    const runAnimation = () => {
      const now = new Date().getTime();
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + "+";

      if (now < endTime) {
        requestAnimationFrame(runAnimation);
      }
    };
    runAnimation();
  }
  counterElements.forEach((element, index) => {
    animateValue(element, 0, targetValues[index], duration);
  });

  
  // intersection observer api for animation events
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass =
          entry.target.classList.contains('feature')
            ? 'feature-animate'
            : entry.target.classList.contains('btn')
            ? 'btn-animation' 
            : 'animate';
        entry.target.classList.add(animationClass);
      } else {
        entry.target.classList.remove('animate', 'feature-animate', 'btn-animation' );
      }
    });
  });
  
// for animations
  const hiddenElements = document.querySelectorAll(".hidden")
  hiddenElements.forEach((el)=> observer.observe(el));
  
  // for specifically features
  const feature = document.querySelectorAll('.feature');
  feature.forEach((el)=> observer.observe(el));

  const buttonElements = document.querySelectorAll(".btn");
  buttonElements.forEach((el) => observer.observe(el));


// for slider buttons
const wrapper = document.querySelector('.wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
  scrollAmount -= 300; 
  wrapper.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  scrollAmount += 300; 
  wrapper.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});
