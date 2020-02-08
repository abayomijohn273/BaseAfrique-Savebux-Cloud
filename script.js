const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  preloader.classList.add("loaded")
}, 100);

window.addEventListener('load', function(){
});