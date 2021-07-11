//Create function to select elements
const hamburgerIcon = document.querySelector(".menu-icons");
const navElement = document.querySelector("nav");
//Open and close nav on click

hamburgerIcon.addEventListener("click", () => {
  navElement.classList.toggle("active");
});
