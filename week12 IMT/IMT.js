const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const result = document.querySelector('#result');
const calcButton = document.querySelector('#calcButton');
const advice = document.querySelector('#advice');


const calculateBMI = () => {
  const weight = +weightInput.value; // вес человека
  const height = +heightInput.value / 100; // рост человека
  
  let fullHeight = Math.pow(height, 2); 
  let IMT = weight / fullHeight;
  result.textContent = Math.round(IMT);
  
  return IMT;
}

// calcButton.addEventListener('click', calculateBMI);
calcButton.addEventListener('click', () => {
  let bodyIndex = calculateBMI();
    if (bodyIndex < 20){
      advice.textContent= 'У вас недостаточный вес';
    } else if (bodyIndex >= 20 && bodyIndex <= 25){
      advice.textContent= 'У вас нормальный вес';
    } else {
      advice.textContent= 'У вас проблемы с весом';
    }
});

