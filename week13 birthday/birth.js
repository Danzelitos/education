const bdayButton = document.querySelector('#bdayButton');
const error = document.querySelector('#error');
const getDate = document.querySelector('#getDate');

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

bdayButton.addEventListener('click', function(){
  const dayInput = document.querySelector('#birthInputs');
  const dayValue = dayInput.value;
  const birthDay = new Date("2023-11-6");
  const date = new Date(dayValue);


  let calcDate = Math.ceil((+birthDay - +date)/1000/3600/24);
  // getDate.textContent = `До вашего Дня Рождения осталость ${calcDate} дней`;
  getDate.textContent = "До вашего Дня Рождения осталость " + calcDate + getNoun(calcDate, " день", " дня", " дней");
  
  if (dayValue == '') {
    getDate.textContent = 'Введите дату рождения';
    getDate.classList.add("error");
      } else {
        getDate.classList.remove("error");
      }
})