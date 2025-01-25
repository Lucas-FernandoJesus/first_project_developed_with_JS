// const images_carrousel = document.getElementById("img_carrousel");
// const image = document.querySelectorAll("#img_carrousel img")

// let idx = 0;

// function carrousel(){
//   idx++;
//   if(idx > image.length - 1){
//     idx = 0;
//   }
//   images_carrousel.style.transform = `translateX(${-idx * 500}px)`;
// }

// setInterval(carrousel, 1800);
let containerCarrousel = document.getElementById('img_carrousel');
let imgWidth = containerCarrousel.children[0].offsetWidth;
let index = 0;

function nextCarrousel() {
  index++;
  if (index >= containerCarrousel.children.length) {
    index = 0;
  }
  containerCarrousel.scrollTo({
    top: 0,
    left: index * imgWidth,
    behavior: 'smooth'
  });
}

function prevCarrousel() {
  index--;
  if (index < 0) {
    index = containerCarrousel.children.length - 1;
  }
  containerCarrousel.scrollTo({
    top: 0,
    left: index * imgWidth,
    behavior: 'smooth'
  });
}
setInterval(nextCarrousel, 3200)