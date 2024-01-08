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