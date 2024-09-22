const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);
