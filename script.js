const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  preloader.classList.add("loaded")
}, 200);

window.addEventListener('load', fadeEffect);