
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

  
 