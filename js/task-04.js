let counterValue = 0;

const increaseVal = document.querySelector('[data-action="increment"]');
const decreaseVal = document.querySelector('[data-action="decrement"]');

const counterCurrentValue = document.querySelector("#value");

const increaseValue = () => {
  counterValue++;
  counterCurrentValue.textContent = counterValue;
  console.log(`counterValue: ${counterValue}`);
  return counterValue;
};

const decreaseValue = () => {
  counterValue--;
  counterCurrentValue.textContent = `${counterValue}`;
  console.log(`counterValue: ${counterValue}`);
  return counterValue;
};

increaseVal.addEventListener("click", increaseValue);
decreaseVal.addEventListener("click", decreaseValue);
