const form = document.forms[0];
const errorEnd = document.querySelector('.error-message');
let isFormValid = true;
	// Поле Имя:
	const nameError = document.querySelector('.nameError');
	const inputName = form.elements.firstName;
function checkNameInput(){
	if (!inputName.validity.valid) {
		if (!inputName.value) {
			nameError.textContent = inputName.validationMessage;
			isFormValid = false;
		} else {
			nameError.textContent = '';
		};
		nameError.textContent = inputName.validationMessage;
    nameError.style.color = 'red';
    inputName.classList.add("error");
    isFormValid = false;
  } else {
    inputName.classList.remove("error");
    nameError.textContent = '';
  };
};
function checkEmailInput(){
	// Поле Email:
const emailInput = document.querySelector('.email');
const emailError = document.querySelector('.emailError');

if (!emailInput.validity.valid) {
	if (!emailInput.value) {
		emailError.textContent = "Это обязательное поле";
		isFormValid = false;
	} else {
		emailError.textContent = '';
	};
	emailError.textContent = emailInput.validationMessage;
	emailError.style.color = 'red';
	emailInput.classList.add('error');
	isFormValid = false;
} else {
	emailInput.classList.remove('error');
	emailError.textContent = '';
};

};
// };

form.addEventListener('submit', function(evt){
	evt.preventDefault();
	



	// if (!inputName.validity.valid) {
		
	// 	if (!inputName.value) {
	// 		nameError.textContent = "Это обязательное поле";
	// 		isFormValid = false;
	// 	} else {
	// 		nameError.textContent = inputName.validationMessage;
	// 	};
	// 	inputName.classList.add("error");
	// 	nameError.textContent= inputName.validationMessage;
	// 	nameError.style.color = 'red';
	// 	isFormValid = false; // Устанавливаем флаг в false, если поле не прошло проверку
	// } else {
	// 	inputName.classList.remove("error");
	// 	nameError.textContent = '';
	// }



// if(!emailInput.validity.valid){
// 	emailInput.classList.add('error');
// 	if (!emailInput.value) {
// 		emailError.textContent = "Это обязательное поле";
// 	} else {
// 		emailError.textContent = emailInput.validationMessage;
// 	};
// 	emailError.style.color = 'red';
// 	isFormValid = false;
// } else {
// 	emailInput.classList.remove('error');
// 	emailError.textContent = '';
// };

// Поле возраста:
const age = document.querySelector('.age');
const ageError = document.querySelector(".ageError");
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
  };

// Выбор пола:
const sexError = document.querySelector('.sexError');
const sexes = document.getElementsByName('sex');

let atLeastOneChecked = Array.from(sexes).some(radio => radio.checked); // Проверяем, была ли выбрана хотя бы одна радиокнопка

  if (!atLeastOneChecked) {
    sexError.textContent = 'Выберите один из вариантов'; // Выводим сообщение об ошибке
    sexError.style.color = 'red';
  } else {
    sexError.textContent = ''; // Очищаем сообщение об ошибке
    isFormValid = true; // Отправляем форму, так как хотя бы одна радиокнопка была выбрана
  }


// Поле пароля:

const passwordInput = document.querySelector('.js-input-pass');
  const passError = document.querySelector('.passError');
  const pass = passwordInput.value;
  const repasswordInput = document.querySelector('.js-input-rePass');
  const repassError = document.querySelector('.repassError');
  const repass = repasswordInput.value;
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

  if (!pass || !repass || pass !== repass || !pattern.test(pass)) {
    if (!pass) {
      passError.textContent = "Это обязательное поле";
    } else {
      passError.textContent = passwordInput.validationMessage;
    }
    passError.style.color = 'red';
    passwordInput.classList.add('error');
    isFormValid = false;

    if (!repass) {
      repassError.textContent = "Это обязательное поле";
    } else {
      repassError.textContent = "Пароли не совпадают";
    }
    repassError.style.color = 'red';
    repasswordInput.classList.add('error');
    isFormValid = false;
  } else {
    passError.textContent = '';
    passError.style.color = '';
    passwordInput.classList.remove('error');
    repassError.textContent = '';
    repassError.style.color = '';
    repasswordInput.classList.remove('error');
  };


// const passwordInput = document.querySelector('.js-input-pass');
// const passError = document.querySelector('.passError');
// const pass = passwordInput.value;
// 	const validity = passwordInput.validity;
// 	if(!validity.patternMismatch){
// 		console.log(pass);
// 		const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
// 		const repass = document.querySelector('.js-input-rePass').value;
// 		if (pass !== repass) {
// 			passError.textContent = 'Пароли не совпадают';
// 			passError.style.color = 'red';
// 			passwordInput.classList.add('error');
// 			isFormValid = false;
// 		} else {
// 			passError.textContent = '';
// 			passwordInput.classList.remove('error');
// 		};

// 		if (!pass) {
// 			passError.textContent = "Это обязательное поле";
// 		} else {
// 			isFormValid = true;
// 			passError.textContent = passwordInput.validationMessage;
// 		};

// 	if (!pattern.test(pass)){
// 		passError.textContent = 'Пароль должен содержать по крайней мере одну заглавную букву, одну цифру и один специальный символ. Длина пароля должна быть от 8 до 20 символов.';
// 		passError.style.color = 'red'
// 		passwordInput.classList.add('error');
// 		isFormValid = false;
// 	} else {
// 		passwordInput.classList.remove('error');
// 		passError.textContent = '';
// 		}
// 	};
// // Поле повтора пароля:
// const repasswordInput = document.querySelector('.js-input-rePass');
// const repassError = document.querySelector('.repassError');

// repasswordInput.addEventListener('input', function(event) {
//   const repass = event.target.value;
//   const pass = document.querySelector('.js-input-pass').value;
//   if (repass !== pass) {
//     repassError.textContent = 'Пароли не совпадают';
//     repassError.style.color = 'red';
//     repasswordInput.classList.add('error');
// 		isFormValid = false;
//   } else {
//     repassError.textContent = '';
//     repasswordInput.classList.remove('error');
//   }
// });

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
checkNameInput();
checkEmailInput();

if (isFormValid) {
	form.submit(); // Форма будет отправлена, так как все поля прошли валидацию
}
 else {
	errorEnd.style.textAlign = 'center'
	errorEnd.textContent = "Форма содержит ошибки. Проверьте заполнение всех полей." ; // + validationMessage Отображение сообщения о наличии ошибок в форме
}
});