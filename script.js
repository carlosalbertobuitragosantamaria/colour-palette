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


const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}
console.log(rgbToHex(102, 51, 153))

input.addEventListener('change', event => {
  const imgSrc = event.target.files[0]
  const reader = new FileReader();
  const previewFile = document.querySelector('.preview__file')
  reader.readAsDataURL(imgSrc);
  reader.onload = () => {
    previewFile.src = reader.result;

    const colorThief = new ColorThief({quality: 256, exponent: 3});

  
    previewFile.addEventListener('load', () => {
      const palette = colorThief.getPalette(previewFile, 5);
      palettePreview.innerHTML = palette.map(color => {
        const [r, g, b] = color;
        return `<div class="colour-code" style="background-color: ${rgbToHex(r, g, b)}"><p>${rgbToHex(r, g, b).toUpperCase()}</p></div>`
      }).join('')
    });
  };
})
