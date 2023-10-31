//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

// const paragraph = document.querySelector('p');

// function makeZero() {
// 	paragraph.innerText = 'Ты нашёл элемент и изменил его текст!';
// }

// document.querySelector('.b-0').onclick = makeZero;

//Задание 1 DONE
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
// 
// function makeOne() {
// 	//Ваш код
// 	let paragraph = document.getElementById('practicum');
// 	paragraph.innerHTML = 'Привет';
// }

// document.querySelector('.b-1').onclick = makeOne;

//Задание 2 DONE
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
// 
// function makeTwo() {
// 	//Ваш код
// 	let spann = document.getElementById('practicum2');
// 	spann.textContent = 'Привет, Мир!';
// }

// document.querySelector('.b-2').onclick = makeTwo;

//Задание 3 DONE
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
// 
// function makeThree() {
// 	//Ваш код
// 	let headOne = document.querySelector('#practicum3');
// 	headOne.textContent = 'Заголовок изменен!'
// }

// document.querySelector('.b-3').onclick = makeThree;

//Задание 4 DONE
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента

// function makeFour() {
// 	//Ваш код
// 	let diver = document.querySelector('#practicum4');
// 	diver.style.backgroundColor = 'red';
// }

// document.querySelector('.b-4').onclick = makeFour;

//Задание 5 DONE
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

// function makeFive() {
// 	let inputText = document.getElementById('practicum5');
// 	//Ваш код
// 	inputText.setAttribute('value', 'Новое занятие');
// }


// document.querySelector('.b-5').onclick = makeFive;

//Задание 6 done
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

// function makeSix() {
// 	var img = document.getElementById('practicum6');
// 	img.src = 'newimage.jpg';
// 	img.alt = 'Новое изображение';
// }

// document.querySelector('.b-6').onclick = makeSix;

//Задание 7 DONE
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

// function makeSeven() {
// 	//Ваш код
// 	let link = document.querySelector('#practicum7');
// 	link.href = 'https://www.google.com';
// 	link.textContent = 'ссылка на гугл'
// }

// document.querySelector('.b-7').onclick = makeSeven;

//Задание 8 DONE
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

// function makeEight() {
// 	//Найдите элемент x
// 	let list = document.querySelector('#practicum8')
// 	//Создайте новый пункт списка y
// 	let listItem = document.createElement('li');
// 	//Добавьте значение в созданный пункт списка y
// 	listItem.textContent = 'Элемент 4';
// 	//Добавьте в список х новый элемент y
// 	list.append(listItem);
// }

// document.querySelector('.b-8').onclick = makeEight;

//Задание 9 DONE
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

// function makeNine() {
// 	//Найдите элемент
// 	let selector = document.querySelector('#practicum9');
// 	//Создайте новый элемент
// 	let newOption = document.createElement('option');
// 	//Добавьте текст в созданный эелемент
// 	newOption.textContent = 'Новый вариант';
// 	//Добавьте новый элемент в выпадающий список
// 	selector.append(newOption);
// }

// document.querySelector('.b-9').onclick = makeNine;

//Задание 10 DONE
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента

// function makeTen() {
// 	//Ваш код
// 	let diver = document.querySelector('#practicum10');
// 	diver.style.display = 'none';
// }

// document.querySelector('.b-10').onclick = makeTen;

//Задание 11 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

// function makeEleven() {
// 	//Ваш код
// 	let diver = document.querySelector('#practicum11');
// 	diver.style.width = '400px';
// 	diver.style.height = '200px';
// }

// document.querySelector('.b-11').onclick = makeEleven;

//Задание 12 DONE
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

// function makeTwelve() {
// 	//Ваш код
// 	let divElement = document.querySelector('#practicum12');
// 	divElement.classList.toggle('large');
// }

//Задание 13 done
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

// function makeThirteen() {
// 	//Ваш код
// 	let tagOl = document.getElementsByTagName('ol');
// 	tagOl[0].textContent = 'Первый!'; 
// 	console.log(tagOl);
// }

// document.querySelector('.b-13').onclick = makeThirteen;

//Задание 14 DONE
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

// function makeFourteen() {
// 	//Найдите все элементы <p>
	
// 	const paragraphs = document.querySelectorAll('p');
// 	paragraphs.forEach(function (paragraph) {
// 		//Измените их текстовое содержимое у paragraph
// 		paragraph.innerHTML = "Огого, что могу!";
// 	});
// }

// document.querySelector('.b-14').onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

// function makeFifteen() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum15');
// 	diver.remove();
// }

// document.querySelector('.b-15').onclick = makeFifteen;

//Задание 16 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

// function makeSixteen() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum16');
// 	diver.classList.add('practicum16');
// }

// document.querySelector('.b-16').onclick = makeSixteen;

//Задание 17 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

// function makeSeventeen() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum17');
// 	diver.classList.toggle('color');
// }

// document.querySelector('.b-17').onclick = makeSeventeen;

//Задание 18 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента

// function makeEighteen() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum18');
// 	diver.classList.toggle('active');
// }

// document.querySelector('.b-18').onclick = makeEighteen;

//Задание 19 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

// function makeNineteen() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum19');
// 	diver.classList.remove('active');
// }

// document.querySelector('.b-19').onclick = makeNineteen;

//Задание 20 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

// function makeTwenty() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum20');
// 	let newParag = document.createElement('p');
// 	newParag.textContent = 'Добавлено в начало'
// 	diver.prepend(newParag);
// }

// document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21 done
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

// function makeTwentyOne() {
// 	//Ваш код
// 	let diver = document.getElementById('practicum21');
// 	let nextParag = document.createElement('p');
// 	nextParag.innerHTML = 'Добавлено в конец';
// 	diver.append(nextParag);
// }

// document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22 50/50
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

// function makeTwentyTwo() {
// 	//1 шаг: Найдите элемент
// 	let image = document.getElementById('practicum22');
// 	//2 шаг: Создайте переменную, которая проверяет наличие атрибута у найденного элемента
// 	let hasAttr = image.hasAttribute('src');
// 	//3 шаг: Найдите элемент, в который нужно вставить значение
// 	let result = document.getElementById('result22');
// 	//4 шаг: Добавьте в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
// 	result.textContent = hasAttr ? 'Атрибут "src" присутствует' : 'Атрибут "src" отсутствует';
// }

// document.querySelector('.b-22').onclick = makeTwentyTwo;

//Задание 23 done
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

// function makeTwentyThree() {
// 	//Ваш код
// 	let link = document.getElementById('practicum23');
// 	link.removeAttribute("href");
// }

// document.querySelector('.b-23').onclick = makeTwentyThree;

//Задание 24 done
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

// function makeTwentyFour() {
// 	//Ваш код
// 	let inputArea = document.getElementById('practicum24');
// 	inputArea.setAttribute('value', 'Новое значение');
// }

// document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25 done
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

// function makeTwentyFive() {
// 	//1 шаг: Найдите элемент
// 	const diver = document.getElementById('practicum25');
// 	//2 шаг: Добавьте элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация');
// 	diver.setAttribute("data-info", "Additional information");
// 	//3 шаг: Запишите значение атрибута в переменную
// 	let newAttrib = diver.getAttribute('data-info');
	
// 	//4 шаг: Найдите элемент, в который нужно вставить значение из 3 шага
// 	let paragraph = document.querySelector('#infoOutput');
// 	//5 шаг: Добавьте в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
// 	paragraph.textContent = 'Добавленный атрибут: ' + newAttrib;
// }

// document.querySelector('.b-25').onclick = makeTwentyFive;

//Задание 26 done
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

// const button = document.querySelector('.b-26');
// // const parent = Ваш код;

// const makeTwentySix = () => {
// 	let parent = document.querySelector('.parent');
// 	parent.closest("parent");
// 	parent.style.backgroundColor = 'red';
// };

// document.querySelector('.b-26').onclick = makeTwentySix;

//Задание 27 done
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

// function makeTwentySeven() {
// 	//Найдите переменную
// 	const diver = document.getElementById('practicum27');
// 	//Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
// 	let newTarget = diver.classList.contains('highlight');
// 	//Найдите переменную, в которую нужно вывести результат
// 	let result = document.querySelector('#result');
// 	//Запишите результат в переменную
// 	result.textContent = newTarget;
// }

// document.querySelector('.b-27').onclick = makeTwentySeven;

//Задание 28 done
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

// const buttonTaskTwentyEight = document.getElementById('button28');
// let count = 0;


// buttonTaskTwentyEight.addEventListener('click', function handleClick() {
// 	count += 1;
// 	console.log('Кнопка нажата '+ count+ ' раз');
// })

//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

//Задание 29 done
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
// const inputArea = document.getElementById('input29');

// inputArea.addEventListener('change', function handleChange() {

// 	console.log('Значение изменено');
// });

//Ваш код

//Задание 30 done
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
// const diver = document.getElementById('div30');
// diver.addEventListener('mouseover', function handleMouseOver() {
	
// 	console.log('Курсор наведен на элемент');
// })

//Ваш код

let guestList = `Гости:
 * Юля
 * Петя
 * Маша
`;
console.log(guestList);