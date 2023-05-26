const categoryAllEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryAllEl.length}`);

categoryAllEl.forEach((category) => {
  const titleEl = category.firstElementChild.textContent;
  const categoryAllEl = category.lastElementChild.children.length;
  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${categoryAllEl}`);
});
