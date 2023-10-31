const nameInput = document.querySelector('#name');
const linkInput = document.querySelector('#link');
const commentInput = document.querySelector('#comment');
const clickButton = document.querySelector('#clickButton');
const chat = document.querySelector('.chat');

clickButton.addEventListener('click', function(){
// // функция изменения имени
const nameValue = (nameInput.value).trim().toLowerCase(); // содержание имени
let realName = nameValue[0].toUpperCase() + nameValue.slice(1);
// ---------------------------------------
// функция добавления времени
const currentDate = new Date();

const options = {
  weekday: 'short', // Краткое название дня недели
  month: 'short', // Краткое название  месяца
  day: 'numeric', // Число месяца
  year: 'numeric', // Год (в полном формате)
  hour: 'numeric', // Часы (24-часовой формат)
  minute: 'numeric', // Минуты
  second: 'numeric' // Секунды
};
const dateTime = currentDate.toLocaleString('en-US', options);
// ---------------------------------------

// функция добавления блока комента
const addDiv = document.createElement('div');
addDiv.className = 'addComment'; // addDiv = <div class = "addDiv"></div>
addDiv.innerHTML = `<p id="setName">${realName}</p>
<div class="imgnDate"><img id="setImages" src="" alt="" /> <br />
<span id="setDate">${dateTime}</span> </div>
<span id="setComment"></span>
<span id="setblock">_______________________________________________________________________</span>`;
chat.append(addDiv);
// ---------------------------------------
// функция добавления комента и цензура
const comment = commentInput.value; // содержание комента
// функция проверки на спам
const setCommentariy = addDiv.querySelector('#setComment');
const checkSpam = function (str) {
    return str.trim().toLowerCase().replace(/viagra/g, '***').replace(/xxx/g, '***');
};

setCommentariy.textContent = checkSpam(comment);
// ---------------------------------------
// Выбор чекбокса на имя + имя по умолчанию
function getCheckRadio() {
    const setName = addDiv.querySelector('#setName');
    const radios = document.querySelectorAll('input[type="radio"]:checked');
    if (radios.length > 0) {
        let selectedRadio = radios[0].value;
        if (selectedRadio === 'No') {
          setName.textContent = 'Username'; //если NO то имя = username
     }
        //  console.log(selectedRadio);
     }
        else {
            console.log('No radio selected.');
        }
    }
    getCheckRadio();
// ---------------------------------------
// функция добавления аватарки
function getImg(){
const userImagesArray = ["assets/ears.png","assets/headgehog.png","assets/homk.png","assets/owl.png","assets/panda.png", "assets/png-transparent-telegram-sticker-tiger-moon-vk-tiger-mammal-animals-cat-like-mammal-thumbnail.png"];
let userImagesIndex = Math.round(Math.random()* (userImagesArray.length - 1))
const imgLinkValue = linkInput.value;
const images = addDiv.querySelector('#setImages'); // Получаем элемент <img> внутри addDiv
if (imgLinkValue === '') {
    images.src = userImagesArray[userImagesIndex];
    console.log(userImagesIndex, userImagesArray[userImagesIndex]);
  } else {
    images.src = imgLinkValue;
  }
}
getImg();
// ---------------------------------------

})

