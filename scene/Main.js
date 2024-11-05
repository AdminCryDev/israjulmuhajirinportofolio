// clear before unload
window.onbeforeunload = () => {
    for(const form of document.getElementByTagName('form')){
      form.reset();
    }
  }
  
  // Navigation Responsive
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    
    burger.addEventListener("click", () => {
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  }
  navSlide();