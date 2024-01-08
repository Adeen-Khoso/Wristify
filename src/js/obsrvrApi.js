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

