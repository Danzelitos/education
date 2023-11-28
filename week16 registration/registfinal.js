const form = document.forms[0];
const allInputs = document.querySelectorAll('.input');
const errorEnd = document.querySelector('.error-message');

form.addEventListener('submit', function(evt){
	evt.preventDefault();
	
	let isFormValid = true;

	// Поле Имя:
	const nameError = document.querySelector('.nameError');
	const inputName = form.elements.firstName;
	if (!inputName.validity.valid) {
		inputName.classList.add("error");

		if (!inputName.value) {
			nameError.textContent = "Это обязательное поле";
		} else {
			nameError.textContent = inputName.validationMessage;
		};
		nameError.textContent= inputName.validationMessage;
		nameError.style.color = 'red';
		isFormValid = false; // Устанавливаем флаг в false, если поле не прошло проверку
	} else {
		inputName.classList.remove("error");
		nameError.textContent = '';
	}

// Поле Email:
const emailInput = document.querySelector('.email');
const emailError = document.querySelector('.emailError')
if(!emailInput.validity.valid){
	emailInput.classList.add('error');

	if (!emailInput.value) {
		emailError.textContent = "Это обязательное поле";
	} else {
		emailError.textContent = emailInput.validationMessage;
	};

	// emailError.textContent = emailInput.validationMessage;
	emailError.style.color = 'red';
	isFormValid = false;
} else {
	emailInput.classList.remove('error');
	emailError.textContent = '';
};

// Поле возраста:
const age = document.querySelector('.age');
const ageError = document.querySelector(".ageError");
// age.addEventListener('input', function(event) {
  // const value = parseInt(event.target.value, 10);
  const value = parseInt(age.value, 10);
  if (value <= 1 || value >= 100) {
    age.setCustomValidity('Введите число больше 1 и меньше 100');
		age.classList.add('error');
    ageError.textContent = 'Введите число больше 1 и меньше 100';
		ageError.style.color = 'red';
		isFormValid = false;
  } else {
    age.setCustomValidity('');
		age.classList.remove('error');
    ageError.textContent = '';
  }
// });

// Выбор пола:
const radioButtons = document.querySelectorAll('.js-input-radio');
function checkRadios(){
	let checked = false;
	for (let radio of radioButtons){
		if (radio.checked){
			checked = true;
			// console.log(radio.value);
			break;
	}
};
const sexError = document.querySelector('.sexError')
		if (!checked){
			sexError.textContent = 'Выберите один из вариантов';
			sexError.style.color = 'red';
			isFormValid = false;
		} else {
			sexError.textContent = ''
		}
};
checkRadios();

// Поле пароля:
const passwordInput = document.querySelector('.js-input-pass');
const passError = document.querySelector('.passError');

// passwordInput.addEventListener('input', function(event){
	// const validity = event.target.validity;
	const validity = passwordInput.validity;
	if(!validity.patternMismatch){
		// const pass = event.target.value;
		const pass = passwordInput.value;
		console.log(pass);
		const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
		const repass = document.querySelector('.js-input-rePass').value;
		if (pass !== repass) {
			passError.textContent = 'Пароли не совпадают';
			passError.style.color = 'red';
			passwordInput.classList.add('error');
			isFormValid = false;
		} else {
			passError.textContent = '';
			passwordInput.classList.remove('error');
		};

		if (!pass) {
			passError.textContent = "Это обязательное поле";
		} else {
			passError.textContent = passwordInput.validationMessage;
		};

	if (!pattern.test(pass)){
		passError.textContent = 'Пароль должен содержать по крайней мере одну заглавную букву, одну цифру и один специальный символ. Длина пароля должна быть от 8 до 20 символов.';
		passError.style.color = 'red'
		passwordInput.classList.add('error');
		isFormValid = false;
	} else {
		passwordInput.classList.remove('error');
		passError.textContent = '';
		}
	}
// });
// Поле повтора пароля:
const repasswordInput = document.querySelector('.js-input-rePass');
const repassError = document.querySelector('.repassError');

repasswordInput.addEventListener('input', function(event) {
  const repass = event.target.value;
  const pass = document.querySelector('.js-input-pass').value;
  if (repass !== pass) {
    repassError.textContent = 'Пароли не совпадают';
    repassError.style.color = 'red';
    repasswordInput.classList.add('error');
		isFormValid = false;
  } else {
    repassError.textContent = '';
    repasswordInput.classList.remove('error');
  }
});

// Проверка чекбокса
const checkBox = document.querySelector('.js-input-checkBox');
const labelBox = document.querySelector('.labelBox');
function ischeckBox(){
	  if (checkBox.checked){
		labelBox.style.color = 'black';
  } else {
    console.log('checkbox is not checked');
    labelBox.style.color = 'red';
		isFormValid = false;
  }
};
ischeckBox();


if (isFormValid) {
	// Здесь можно добавить действия, которые выполняются при успешной валидации и отправке формы
	
	form.submit(); // Форма будет отправлена, так как все поля прошли валидацию
}
//  else {
// 	errorEnd.style.textAlign = 'center'
// 	errorEnd.textContent = "Форма содержит ошибки. Проверьте заполнение всех полей." ; // + validationMessage Отображение сообщения о наличии ошибок в форме
// }
});