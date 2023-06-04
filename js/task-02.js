const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.forEach((ingredient, i) => {
//   const allIngredients = ingredient.querySelector("ul#ingredients");
//   const newIngredient = ingredients.createElement("li");
//   newIngredient.textContent = this.ingredient[i];
//   console.log(newIngredient);
// });

const allIngredients = document.querySelector("ul#ingredients");
const newIngredient = document.createElement("li");
newIngredient.textContent = ingredients[0];

console.log(allIngredients);
console.log(newIngredient);
