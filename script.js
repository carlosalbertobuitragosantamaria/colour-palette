const sunMoonContainer = document.querySelector('.sun-moon__container');
const sunIcon = document.querySelector('.sun__icon');
const moonIcon = document.querySelector('.moon__icon');
const body = document.querySelector('body'); 
const colourCode = document.querySelectorAll('.colour-code p');


sunMoonContainer.addEventListener('click', () => {
    moonIcon.classList.toggle('animate-moon');
    sunIcon.classList.toggle('animate-sun');
    body.classList.toggle('dark-mode');
    colourCode.forEach(hex => hex.classList.toggle('colour-code__dark'))
})