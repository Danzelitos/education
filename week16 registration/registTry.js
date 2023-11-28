const form = document.forms[0];
const allInputs = document.querySelectorAll('.input');
const checkBox = document.querySelector('.js-input-checkBox');
const errorEnd = document.querySelector('.error-message');


// Поле Имя:
const inputName = form.elements.firstName;
inputName.addEventListener('input', function(event){
	const nameError = document.querySelector('.nameError');
	console.log(event.target.validity);
	if (!inputName.validity.valid){
		// if (!inputName.validity.rangeOverflow){
		// 	if (!inputName.validity.rangeUnderflow){
		inputName.classList.add("error");
		nameError.textContent = inputName.validationMessage;
		nameError.style.color = 'red';
	} else{
		inputName.classList.remove("error");
		nameError.textContent = '';
	}
});
// Поле Email:
const emailInput = document.querySelector('.email');
emailInput.addEventListener('input', function(event){
	const emailError = document.querySelector('.emailError')
	console.log(event.target.validity);
	if(!emailInput.validity.valid){
		emailInput.classList.add('error');
		emailError.textContent = emailInput.validationMessage;
		emailError.style.color = 'red';
	} else {
		emailInput.classList.remove('error');
		emailError.textContent = '';
	}
})
// Поле возраста:
const age = document.querySelector('.age');
const ageError = document.querySelector(".ageError");
age.addEventListener('input', function(event) {
  const value = parseInt(event.target.value, 10);
  if (value <= 1 || value >= 100) {
    age.setCustomValidity('Введите число больше 1 и меньше 100');
		age.classList.add('error');
    ageError.textContent = 'Введите число больше 1 и меньше 100';
		ageError.style.color = 'red';
  } else {
    age.setCustomValidity('');
		age.classList.remove('error');
    ageError.textContent = '';
  }
});
// Выбор пола:
const radioButtons = document.querySelectorAll('.js-input-radio');
// console.log(radioButtons);
function checkRadios(){
	let checked = false;
	for (let radio of radioButtons){
		if (radio.checked){
			checked = true;
			console.log(radio.value);
			break;
	}
}
const sexError = document.querySelector('.sexError')
		if (!checked){
			sexError.textContent = 'Выберите один из вариантов';
			sexError.style.color = 'red';
		} else {
			sexError.textContent = ''
		}
	
};
// Поле пароля:
const passwordInput = document.querySelector('.js-input-pass');
const passError = document.querySelector('.passError');

passwordInput.addEventListener('input', function(event){
	const validity = event.target.validity;
	if(!validity.patternMismatch){
		const pass = event.target.value;
		console.log(pass);
		const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
	if (!pattern.test(pass)){
		passError.textContent = 'Пароль должен содержать по крайней мере одну заглавную букву, одну цифру и один специальный символ. Длина пароля должна быть от 8 до 20 символов.';
		passError.style.color = 'red'
		passwordInput.classList.add('error');
	} else {
		passwordInput.classList.remove('error');
		passError.textContent = '';
		passwordInput.classList.remove('error');
		}
	}
});
// Поле повтора пароля:
const repasswordInput = document.querySelector('.js-input-rePass');
const repassError = document.querySelector('.repassError');

repasswordInput.addEventListener('input', function(event){
	const validity = event.target.validity;
	if(!validity.patternMismatch){
		const pass = event.target.value;
		console.log(pass);
		const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
	if (!pattern.test(pass)){
		repassError.textContent = 'Пароль должен содержать по крайней мере одну заглавную букву, одну цифру и один специальный символ. Длина пароля должна быть от 8 до 20 символов.';
		repassError.style.color = 'red'
		repasswordInput.classList.add('error');
	} else {
		repasswordInput.classList.remove('error');
		repassError.textContent = '';
		repasswordInput.classList.remove('error');
		}
	}
});
// Соответствие паролей друг другу
function checkPasswords(){
const password = passwordInput.value;
const repassword = repasswordInput.value;

  if (password != repassword){
			errorEnd.textContent = 'Пароли не равны';
      repasswordInput.classList.add('error');
      passwordInput.classList.add('error');
      console.log(password, repassword);
    } else{
      repasswordInput.classList.remove('error');
      passwordInput.classList.remove('error');
			errorEnd.textContent = '';
      console.log(password, repassword);
    }

	};
const labelBox = document.querySelector('.labelBox');
function ischeckBox(){
	  if (checkBox.checked){
		labelBox.style.color = 'black';
  } else {
    console.log('checkbox is not checked');
    labelBox.style.color = 'red';
  }
};

form.addEventListener('submit', function(evt){
	evt.preventDefault();
	checkRadios();
	checkPasswords();
	ischeckBox();
});









// passwordInput.classList.add('error');
// // passwordInput.setCustomValidity('Минимум 8 символов, 1 заглавная буква, 1 символ и 1 цифру')
// passError.textContent = passwordInput.validationMessage;
// passError.style.color = 'red'
// } else {
// // passwordInput.setCustomValidity('');
// passwordInput.classList.remove('error');
// passError.textContent = '';
// }