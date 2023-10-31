// const clickButton = document.querySelector('#clickButton');
// const parag = document.querySelector('#parag');
// const images = document.querySelector('#images');
// const nameInput = document.querySelector('#name'); // ссылка на импут имя
// const linkInput = document.querySelector('#link'); // ссылка на ссылку для фото
// const commentInput = document.querySelector('#comment');

// clickButton.addEventListener('click', function () {

// const chats = document.querySelector('.chats')
// const addDiv = document.createElement('div');
// const span = document.querySelector('#span');


// // функция изменения имени
// const nameValue = (nameInput.value).trim().toLowerCase(); // содержание имени
// let realName = nameValue[0].toUpperCase() + nameValue.slice(1);

// // добавление блока комментария
// addDiv.className = 'this__comment';
// addDiv.innerHTML = `<p id="parag">${realName}</p> 
// <img id="images" src="" alt="" /> <br />
// <span id="span"></span>`
// chats.append(addDiv);

// // ---------------------------------------

// // ----------------------------------------
// const userImagesArray = ["assets/ears.png","assets/headgehog.png","assets/homk.png","assets/owl.png","assets/panda.png","assets/png-transparent-telegram-sticker-tiger-moon-vk-tiger-mammal-animals-cat-like-mammal-thumbnail.png"];
// let userImagesIndex = Math.round(Math.random()* userImagesArray.length);
// console.log(userImagesIndex);

//   if (imageLink = '') {
//   images.src = userImagesArray[userImagesIndex]
//   // console.log(userImagesIndex);
// } else {
//     // функция замены ссылки на картинку
// const imageLink = linkInput.value;
// images.src = imageLink;
// images.style.width = '100px';
// images.style.height = '100px';
// }



// // функция добавления комента и цензура
// const comment = (commentInput.value); // содержание комента
// // функция проверки на спам
// const checkSpam = function (str) {
//     return str.trim().toLowerCase().replace(/viagra/g, '***').replace(/xxx/g, '***');
// };
// span.textContent = checkSpam(comment);
// // ---------------------------------------
// // Выбор чекбокса на имя + имя по умолчанию
// function getCheckRadio() {
//     const radios = document.querySelectorAll('input[type="radio"]:checked');
//     if (radios.length > 0) {
//         let selectedRadio = radios[0].value;
//         if (selectedRadio == 'No') {
//          parag.textContent = 'Username'; //если NO то имя = username
//      }
//          console.log(selectedRadio);
//      }
//         else {
//             console.log('No radio selected.');
//         }
//     }
//     getCheckRadio();
 
// });

// <div class="this__comment">


// </div>
// if (not images )array images ;
// random index images;
// array [index]
// image.src = array[index];
// else {
//     link
// }



