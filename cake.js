// Inspiration: https://hummingbirdbakery.com/ 

// const rightArrow = document.querySelector(".rightArrow")
// const leftArrow = document.querySelector(".lefttArrow")
// const img = document.querySelector(".img")

// rightArrow.addEventListener("click", function(){
//   img.classList(opacity: "0")
// })


// below is the plugin code
const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));