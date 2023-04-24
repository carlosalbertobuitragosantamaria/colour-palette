const body = document.querySelector('body'); 
const colourCode = document.querySelectorAll('.colour-code p');
const input = document.querySelector('.input');
const imagePreview = document.querySelector('.image__preview');
const palettePreview = document.querySelector('.palette__preview');
const demoButton = document.querySelector('.demo__button');
const buttons = document.querySelectorAll('.button');
const titleMain = document.querySelector('.title__main');


/////////////////////////// *** DEMO PREVIEW *** ///////////////////////////////
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



//////////////////// *** RGB TO HEX FUNCTION *** ////////////////////
const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex
  }).join('');
}


/////////////////////// *** COLORTHIEF *** /////////////////////////////////////
input.addEventListener('change', event => {
  const imgSrc = event.target.files[0]
  const reader = new FileReader();
  const previewFile = document.querySelector('.preview__file')
  const colorThief = new ColorThief({quality: 256, exponent: 3, min_color_ratio: 0.01});
  reader.readAsDataURL(imgSrc);

  //////////////////// *** DO THE WORK AFTER IMG HAS LOADED *** ///////////////////////
  reader.onload = () => {
    previewFile.src = reader.result;

    ////////////////// *** COLOUR PALETTE *** //////////////////////////////////////////
    previewFile.addEventListener('load', () => {
      const palette = colorThief.getPalette(previewFile, 5);
      palettePreview.innerHTML = palette.map(color => {
        const [r, g, b] = color;
        return `<div class="colour-code" style="background-color: ${rgbToHex(r, g, b)}">
                  <p>${rgbToHex(r, g, b).toUpperCase()}</p>
                </div>`
      }).join('');

      ///////////////////// *** adding pallete do the website *** ////////////////////
      const [color1, color2, color3, color4, color5] = palette;
      const i = Math.floor(Math.random() *6);
      let ii = Math.floor(Math.random() *6);
      while ( i === ii) {
        ii = Math.floor(Math.random() *6);
      }
      const indexA = i;
      const indexB = ii;
      buttons.forEach(button => button.style.backgroundColor = `rgb(${palette[indexA].join(',')})`);
      titleMain.style.color = `rgb(${palette[indexB].join(',')})`;
    });
  };
})
