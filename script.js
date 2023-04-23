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



// const demoImgArray = [
//     'img/preview_imgs/butterfly.webp',
//     'img/preview_imgs/crypto.webp',
//     'img/preview_imgs/forest.webp',
//     'img/preview_imgs/strawberry.webp',
//     'img/preview_imgs/sunset.webp',
//     'img/preview_imgs/tucan.webp'
// ]
// let currentIndex = 0;
// demoButton.addEventListener('click', event => {
//     if (currentIndex < demoImgArray.length) {
//         imagePreview.innerHTML = `<img class="preview__file"src="${demoImgArray[currentIndex]}">`;
//         currentIndex ++;
//     } else {
//         currentIndex = 0;
//         imagePreview.innerHTML = `<img class="preview__file"src="${demoImgArray[currentIndex]}">`;
//         currentIndex ++;
//     }
// })

//////////////// *** COLOR THIEF *** //////////////////////////


// input.addEventListener('change', () => {
//   const imgName = input.files;
//   console.log(imgName)
//   imagePreview.innerHTML = `<img class="preview__file"src="img/preview_imgs/${imgName}">`
  
//   const colorThief = new ColorThief();
//   const img = document.querySelector('.preview__file');

//   img.addEventListener('load', () => {
//     const palette = colorThief.getPalette(img, 5);
//     console.log(palette)
//     palettePreview.innerHTML = palette.map(color => {
//       const [r, g, b] = color;
//       console.log(r)
//       return `<div class="colour-code colour-code1" style="background-color: rgb(${r}, ${g}, ${b})"><p>rgb(${r}, ${g}, ${b})</p></div>`
//     });
//   })

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
        return `<div class="colour-code" style="background-color: ${rgbToHex(r, g, b)}">
                  <p>${rgbToHex(r, g, b).toUpperCase()}</p>
                </div>`
      }).join('');
    });
  };
})
