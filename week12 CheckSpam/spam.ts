
// const nameInput = document.querySelector('#name'); // ссылка на импут имя
// const linkInput = document.querySelector('#link'); // ссылка на ссылку для фото
// const commentInput = document.querySelector('#comment') as HTMLInputElement;
// const clickButton = (document.querySelector('#clickButton') as HTMLButtonElement);
// const parag = document.querySelector('#parag') as HTMLElement;
// const images = document.querySelector('#images') as HTMLImageElement;
// const span = document.querySelector('#span') as HTMLElement;


// clickButton.addEventListener('click', function(){
// // функция замены ссылки на картинку
// let imageLink:any = ((linkInput as HTMLInputElement).value);
// images.src = imageLink;
// images.style.width = '100px';
// images.style.height = '100px';
// // ----------------------------------------
// // функция изменения имени
// let name:string = ((nameInput as HTMLInputElement).value).trim().toLowerCase(); // содержание имени
// parag.textContent = name[0].toUpperCase() + name.slice(1);
// // ---------------------------------------
// // функция добавления комента и цензура
// let comment = (commentInput.value) // содержание комента
// // функция проверки на спам
//   const checkSpam = function(str: string): string {
//     return str.trim().toLowerCase().replace(/viagra/g, '***').replace(/xxx/g, '***');
// }
// span.textContent = checkSpam(comment);
// // ---------------------------------------
// // Выбор чекбокса на имя + имя по умолчанию
// function getCheckRadio(){
  
//   const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="radio"]:checked');

//   if (radios.length > 0) {
//     const selectedRadio:string = radios[0].value;
//     if (selectedRadio == 'No'){
//       parag.textContent = 'Username'; //если NO то имя = username
//     }
//     console.log(selectedRadio);

//   } else {
//     console.log('No radio selected.');
//   }
// }
// getCheckRadio();

// });
