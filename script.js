const sunMoonContainer = document.querySelector('.sun-moon__container');
const sunIcon = document.querySelector('.sun__icon');
const moonIcon = document.querySelector('.moon__icon');
const body = document.querySelector('body'); 
const colourCode = document.querySelectorAll('.colour-code p');

const input = document.querySelector('.input');
const imagePreview = document.querySelector('.image__preview');
const palettePreview = document.querySelector('.palette__preview');
const demoButton = document.querySelector('.demo__button');



sunMoonContainer.addEventListener('click', () => {
    moonIcon.classList.toggle('animate-moon');
    sunIcon.classList.toggle('animate-sun');
    body.classList.toggle('dark-mode');
    colourCode.forEach(hex => hex.classList.toggle('colour-code__dark'))
})

input.addEventListener('change', () => {
  console.log(input.files[0].name);
  imagePreview.innerHTML = `<img class="preview__file"src="img/preview_imgs/${input.files[0].name}">` 
})

const demoImgArray = [
    'img/preview_imgs/butterfly.webp',
    'img/preview_imgs/crypto.webp',
    'img/preview_imgs/forest.webp',
    'img/preview_imgs/strawberry.webp',
    'img/preview_imgs/sunset.webp',
    'img/preview_imgs/tucan.webp'
]
let currentIndex = 0;
demoButton.addEventListener('click', () => {
    if (currentIndex < demoImgArray.length) {
        imagePreview.innerHTML = `<img class="preview__file"src="${demoImgArray[currentIndex]}">`;
        currentIndex ++;
    } else {
        currentIndex = 0;
        imagePreview.innerHTML = `<img class="preview__file"src="${demoImgArray[currentIndex]}">`;
        currentIndex ++;
    }


})

