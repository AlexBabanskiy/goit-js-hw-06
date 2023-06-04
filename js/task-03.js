const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const imagesUl = document.querySelector(".gallery");

// images.forEach((image, index) => {
//   const newImageLi = document.createElement("li");
//   imagesUl.append(newImageLi);
//   const newImage = document.createElement("img");
//   newImageLi.append(newImage);
//   newImage.src = image.url;
//   newImage.alt = image.alt;
//   newImage.width = 320;
//   newImage.height = 190;

//   newImageLi.classList.add("gallery-item");
// });

// console.log(imagesUl);

const imagesUl = document.querySelector(".gallery");

const addNewImg = (images) => {
  return images.map((image) => {
    const newImageLi = document.createElement("li");
    newImageLi.classList.add("gallery-item");
    const newImage = `<img class="gallery-img" src='${image.url}' alt='${image.alt}' width='320' height='190'>`;
    newImageLi.insertAdjacentHTML("beforeend", newImage);

    return newImageLi;
  });
};

const allImages = addNewImg(images);

allImages.forEach((image) => {
  imagesUl.insertAdjacentElement("beforeend", image);
});

console.log(imagesUl);
