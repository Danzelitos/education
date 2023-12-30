//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.
const b1 = document.querySelector('.b-1');
function makeOne() {
	//Ваш код
	localStorage.setItem("games", 11);
	localStorage.setItem("game", 101);
	localStorage.setItem("game", 1011);
	// localStorage.clear();
}

//добавьте слушатель события
b1.addEventListener('click', makeOne);

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.
const b2 = document.querySelector('.b-2');
function makeTwo() {
	//Ваш код
	localStorage.setItem("string", "7,6,5");
	console.log('Строка "7,6,5" была записана в Local Storage.');
}

//добавьте слушатель события
b2.addEventListener('click', makeTwo);
//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.
const b3 = document.querySelector('.b-3');
function makeThree() {
	//Ваш код
	localStorage.setItem("user", "name=John, age=25");
	console.log('Строка "name=John, age=25" была записана в Local Storage.');
}

//добавьте слушатель события
b3.addEventListener('click', makeThree);
//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.
const b4 = document.querySelector('.b-4');
function makeFour() {
	//Ваш код
	localStorage.setItem("bolean", true);
	console.log('Логическое значение true было записано в Local Storage.');
}

//добавьте слушатель события
b4.addEventListener('click', makeFour);
//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.
const b5 = document.querySelector('.b-5');
function makeFive() {
	//Ваш код
	localStorage.setItem('key', null);
	console.log('Значение null было записано в Local Storage.');
}

//добавьте слушатель события
b5.addEventListener('click', makeFive);
//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
const b6 = document.querySelector('.b-6');
function makeSix() {
	//Ваш код
	obj = {
		"name": "Alice",
		"age": 30,
	};
	const JSONobj = JSON.stringify(obj);
	localStorage.setItem('objectSix', JSONobj);
	console.log('Объект obj был записан в Local Storage.');
	
}

//добавьте слушатель события
b6.addEventListener('click', makeSix);
//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
const b7 = document.querySelector('.b-7');
function makeSeven() {
	//Ваш код
	obj = {
		  city: "Лондон",
		  country: "Великобритания",
		  population: 8900000,
		  language: "английский"
	};
	const london = JSON.stringify(obj)
	localStorage.setItem("objectSeven", london);
	console.log('Объект obj был записан в Local Storage.');
}

//добавьте слушатель события
b7.addEventListener("click", makeSeven);
//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
const b8 = document.querySelector('.b-8');
function makeEight() {
	//Ваш код
	obj = {
		  fruit: "Яблоко",
		  color: "красное",
		  quantity: 10,
		  price: 199
	};
	const apple = JSON.stringify(obj);
	localStorage.setItem('objectEight', apple);
	console.log('Объект obj был записан в Local Storage.');
}

//добавьте слушатель события
b8.addEventListener('click', makeEight);
//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
const b9 = document.querySelector('.b-9');
function makeNine() {
	arr = [1, 2, 3, 4, 5];
	const massiv = JSON.stringify(arr);
	localStorage.setItem('arrayNine', massiv);
	console.log('Массив arr был записан в Local Storage.');
	localStorage.removeItem('array');
}
b9.addEventListener('click', makeNine);
//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
const b10 = document.querySelector('.b-10');
function makeTen() {
	//Ваш код
	arr = ["яблоко", "банан", "апельсин"];
	const newObj = JSON.stringify(arr);
	localStorage.setItem('arrayTen', newObj);
	console.log('Массив arr был записан в Local Storage.');
}
b10.addEventListener('click', makeTen);
//добавьте слушатель события

//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
const b11 = document.querySelector('.b-11');
function makeEleven() {
	//Ваш код
	arr = [
		{ name: "Алиса", age: 30 },
		{ name: "Филин", age: 35 },
		{ name: "Кот", age: 40 }
		];
		const arrJSON = JSON.stringify(arr);
		localStorage.setItem('arrayEleven', arrJSON);
	console.log('Массив arr был записан в Local Storage.');
}

//добавьте слушатель события
b11.addEventListener('click', makeEleven);
//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven.
//  Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()
const b12 = document.querySelector('.b-12');
function showEleven() {
	//Ваш код	
	const arrayEleven = JSON.parse(localStorage.getItem('arrayEleven'));
	// JSON.parse(arrayEleven);
	let output = '';
	for (let i = 0; i < arrayEleven.length; i++) {
		const object = arrayEleven[i];
		for (let key in object) {
			output += `${key}:  ${object[key] + ", " }`;
		}
	}
	document.querySelector('.practicum12').textContent = output;
}
b12.addEventListener('click', showEleven);
//добавьте слушатель события

//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayTen. 
// Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.
const b13 = document.querySelector('.b-13');
const showTen = () => {
	const arrayTenString = localStorage.getItem('arrayTen');
	const arrayTen = JSON.parse(arrayTenString);
	if (arrayTenString) {
		//Ваш код
		const resultElement = document.querySelector('.practicum13');
		for (const key in arrayTen) {
			const value = arrayTen[key];
			resultElement.innerHTML += `${key}: ${value}<br>`;
		}
	} else {
		console.log('Массив arrayTen не найден в Local Storage.');
	}
};
b13.addEventListener('click', showTen);
//добавьте слушатель события

//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. 
// Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showNine = () => {
	const practicum14 = document.querySelector('.practicum14');
	const arrayNineString = localStorage.getItem('arrayNine');
	if (arrayNineString) {
		const array = JSON.parse(arrayNineString);
		let result = '';
		for (let i = 0; i < array.length; i++){
			result += `Key ${i}: ${array[i]} <br>`
			practicum14.innerHTML = result;
		}
	} else {
		console.log('Массив arrayNine не найден в Local Storage.');
	}
};
document.querySelector('.b-14').addEventListener('click', showNine);
//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. '
// Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.

const showEight = () => {
	//Ваш код
	const objectEight = JSON.parse(localStorage.getItem('objectEight'));
	const practicum15 = document.querySelector('.practicum15');
	// console.log(objectEight);
	for (let key in objectEight){
		console.log(key +": " + objectEight[key]);
	};
};

document.querySelector('.b-15').addEventListener('click', showEight);

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. 
// Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, 
// используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.

const showSeven = () => {
	//Ваш код
	const objectSeven = JSON.parse(localStorage.getItem('objectSeven'));
	const practicum16 = document.querySelector('.practicum16');
	console.log(objectSeven);
	practicum16.textContent = `В ${objectSeven.city}e живет ${objectSeven.population} человек`;
};

document.querySelector('.b-16').addEventListener('click', showSeven);

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. 
// Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. 
// Вызывается функция по кнопке Задание 17.

const showSix = () => {
	//Ваш код
	const objectSix = JSON.parse(localStorage.getItem('objectSix'));
	const practicum17 = document.querySelector('.practicum17');
	practicum17.textContent = `Привет! Я ${objectSix.name}. Мне ${objectSix.age} лет.`
};

document.querySelector('.b-17').addEventListener('click', showSix);

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.

const clearLocalStorage = () => {
	//Ваш код
	localStorage.clear();
	console.log('Local Storage очищен.');
};
document.querySelector('.b-18').addEventListener('click', clearLocalStorage);
//добавьте слушатель события

//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. 
// Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. 
// Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?


let numbers = [];
const addToNumbers = () => {
	const numberInput = parseInt(document.getElementById('numberInput').value);
	numbers.push(numberInput)
	localStorage.setItem('task19', JSON.stringify(numbers));
};
document.querySelector('.b-19').addEventListener('click', addToNumbers);

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. 
// После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.

const removeLastElement = () => {
	console.log(numbers);
	if (numbers.length > 0) {
			numbers.pop();
			localStorage.setItem('task20', JSON.stringify(numbers));
			let a = localStorage.getItem('task20');
			console.log('Последний элемент удален из массива numbers и сохранен в Local Storage.');
	} else {
		console.log('Массив numbers пуст.');
	}
};
document.querySelector('.b-20').addEventListener('click', removeLastElement);
//добавьте слушатель события

//Задание 21
//Создайте функцию addToCart, которая при нажатии кнопки Задание 21 получает из Local Storage сохранённый массив cartItems. 
// Затем добавляет новый элемент в массив, представляющий товар, введённый вами в поле ввода. 
// Массив cartItems должен сохраняться в Local Storage с ключом task21. 
// Вызывается функция по кнопке Задание 21.
//Подсказка: необходимо проверить существует ли значение и не является пустым. 
// Если значение в хранилище есть, то оно преобразуется из JSON в массив. В противном случае, устанавливается пустой массив.

const addToCart = () => { // создание функции
	let cartItems = JSON.parse(localStorage.getItem('task21')) || []; // объявляю массив либо если он уже есть в localstorage то беру его оттуда
	console.log(cartItems);
	const productInput = document.getElementById('productInput').value; // нахожу инпут в хтмл документе и получаю его значение
		if (productInput.trim() !== '') { // условие если тот инпут не пустой
			cartItems.push(productInput); // пушу значение из инпута в массив cartItems
			localStorage.setItem('task21', JSON.stringify(cartItems)) // и при пуше каждый раз перезаписываю новый массив в локалсторадж 
			console.log(`Товар "${productInput}" добавлен в корзину и сохранен в Local Storage.`);
	} else { // соответственно если все таки строка пустая, то в логах прошу ввести значение
		console.log('Введите название товара.');
	}
};

document.querySelector('.b-21').addEventListener('click', addToCart);
//Задание 22
//Создайте функцию removeFromCart, которая при нажатии кнопки Задание 22 получает из Local Storage сохранённый массив cartItems. 
// Затем удаляет последний элемент из массива. Массив cartItems должен сохраняться в Local Storage с ключом cartItems. Вызывается функция по кнопке Задание 22.
//Подсказка: необходимо проверить, существует ли значение и не является ли оно пустым. Это может вызвать ошибку, если cartItems не существует в Local Storage или является пустым.
let x = [];
const removeFromCart = () => { // функция удаления
	if (x == ''){
	x = JSON.parse(localStorage.getItem('task21'));
	x.pop();
	
} else {
	x.pop();
	console.log(x);
}
// localStorage.setItem('cartItems', task21); // я беру из хранилища массив в котором уже записаны элементы
	// cartItems = task21;
	// if (cartItems.length > 0){ //если массив не пустой, то...
	// 	cartItems.pop(); // удаляю последний элемент массива
	// 	// console.log(cartItems);
	// 	localStorage.setItem('cartItems', JSON.stringify(cartItems));
	// 	// localStorage.setItem('task21', JSON.stringify(cartItems));
	// 	let a = localStorage.getItem('cartItems')
		
		// console.log(a);
		// 	localStorage.setItem('cartItems', JSON.stringify(cartItems)); // и записываю новый массив в новый ключ
		// } else {
		// 	console.log('empty');
		// }
	};

document.querySelector('.b-22').addEventListener('click', removeFromCart);

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems.
//  Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.
const practicum23 = document.querySelector('.practicum23');
const showCart = () => {
	//Ваш код
	const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
	let cartContent = ''
	for (let i = 0; i < cart.length; i++){
		cartContent += `Элемент ${i}: ${cart[i]} <br>`;
	
	};
	practicum23.innerHTML = cartContent;
};
document.querySelector('.b-23').addEventListener('click', showCart);

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. 
// Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 
// (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.

const updateCartCount = () => {
	//Ваш код
};

document.querySelector('.b-24').addEventListener('click', updateCartCount);

//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
	//Ваш код
	console.log('Корзина очищена.');
};

document.querySelector('.b-25').addEventListener('click', clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

//Ваш код
console.log("Cookie 'username' установлен.");

//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".

const getCookie = (name) => {
	const cookieContainer = document.querySelector('.practicum27');
	const cookies = document.cookie.split('; ');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split('=');
		if (cookie[0] === name) {
			const value = cookie[1] || '';
			//Ваш код
		}
	}
	//Ваш код
};

document.querySelector('.b-27').addEventListener('click', () => {
	getCookie('username');
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = () => {
	//Ваш код
	if (username !== '') {
		//Ваш код
	} else {
		//Ваш код
	}
};

// добавьте слушатель события

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
	document.cookie = `${name}=${value}`;
	//Ваш код
};

document.querySelector('.b-29').addEventListener('click', () => {
	setCookie('testCookie', 'Hello');
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	//Ваш код
};

document.querySelector('.b-30').addEventListener('click', () => {
	deleteCookie('testCookie');
});
