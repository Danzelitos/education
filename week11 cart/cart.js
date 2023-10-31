// const priceSneakers = parseInt(document.getElementById('priceSneakers').textContent);
// const priceJacket = parseInt(document.getElementById('priceJacket').textContent);
// const priceHat = parseInt(document.getElementById('priceHat').textContent);
// const priceJeans = parseInt(document.getElementById('priceJeans').textContent);

const priceSneakersElement = document.getElementById('priceSneakers');
const priceJacketElement = document.getElementById('priceJacket');
const priceHatElement = document.getElementById('priceHat');
const priceJeansElement = document.getElementById('priceJeans');
const sneakers = document.querySelector('#sneakers')

// sneakers.addEventListener('click', event => {
//   console.log('event ===> ', event.target);
//   console.log('event ===> ', event.currentTarget);
// })

const priceSneakers = parseInt(priceSneakersElement.textContent);
const priceJacket = parseInt(priceJacketElement.textContent);
const priceHat = parseInt(priceHatElement.textContent);
const priceJeans = parseInt(priceJeansElement.textContent);

const discountButton = document.getElementById('discountButton');
const summa = document.getElementById('summa');

  let fullPrice = priceSneakers + priceJacket + priceHat + priceJeans;
  let elementPrice = document.createElement('span');
// Объявление суммы корзины
function priceSum () {
  localStorage.setItem('fullPrice', fullPrice)
  elementPrice.textContent = fullPrice + ' rub';
  summa.append(elementPrice);
  elementPrice.style.fontSize = '1.2rem';
  elementPrice.style.fontWeight = '700';
}
priceSum();
let flag = true;

// применение скидки на итемы корзины
discountButton.addEventListener('click', function(){
  console.log('fullPrice', localStorage.getItem('fullPrice'));
  if(flag) {
    priceSneakersElement.textContent = priceSneakers - (priceSneakers * 0.2);
    priceJacketElement.textContent = priceJacket- (priceJacket * 0.2);
    priceHatElement.textContent = priceHat - (priceHat * 0.2);
    priceJeansElement.textContent = priceJeans - (priceJeans * 0.2);
  }
});

// применение скидки
discountButton.addEventListener('click', function (){
  if (flag) {
    let discountPrice = fullPrice - (fullPrice * 0.2);
    elementPrice.textContent = discountPrice + ' rub';
    elementPrice.style.fontSize = '1.2rem';
    elementPrice.style.fontWeight = '700'
    flag = false;
  }
});



// ???
// - event & target ?
// - слайдер
// - метод closet (нужен ли?)
// - innerHTML / textContent разница
// я добавляю элемент с помощью js, но после обновления страницы он пропадает, как это фиксируют?
// this ???