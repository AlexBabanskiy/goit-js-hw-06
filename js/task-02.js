const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient, index) => {
  const newIngredient = document.createElement("li");

  newIngredient.textContent = ingredients[index];
  newIngredient.classList.add("item");
  allIngredients.append(newIngredient);
});
