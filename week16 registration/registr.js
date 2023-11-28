

// function emailValidation(email){
//   let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i ;
//   return regexp.test(String(email).toLowerCase());
// }

// function passwordValidation(password) {
//   let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
//   return regexp.test(password);
// }
// function passwordValidation(repassword) {
//   let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
//   return regexp.test(repassword);
// }

// form.onsubmit = function(){

//   let email = emailInput.value;
//   let password = passwordInput.value;
//   let repassword = repasswordInput.value;
//   let emptyInputs = Array.from(allInputs).filter(input => input.value === '');

//   allInputs.forEach(function(input){
//     if (input.value === ''){;
//     input.classList.add('error');
//   } else {
//     input.classList.remove('error');
//   }
//   }); 

//   if (emptyInputs.length !== 0){
//     console.log('inputs not filled');
//     return false;
//   };

//   if (!emailValidation(email)){
//     console.log('email is not valid');
//     emailInput.classList.add('error');
//     return false
//   } else {
//     emailInput.classList.remove('error');
//   };
  
//   if (!passwordValidation(password)){
//     console.log('password is not valid');
//     passwordInput.classList.add('error');
//     return false
//   } else {
//     passwordInput.classList.remove('error');
//   };
//   if (!passwordValidation(repassword)){
//     console.log('password is not valid');
//     repasswordInput.classList.add('error');
//     return false
//   } else {
//     repasswordInput.classList.remove('error');
//   };

//   if (password != repassword){
//       errorMessage.textContent = 'Passwords are not equals';
//       repasswordInput.classList.add('error');
//       passwordInput.classList.add('error');
//       console.log(password, repassword);
//       return false;
//     } else{
//       repasswordInput.classList.remove('error');
//       passwordInput.classList.remove('error');
// 			errorMessage.textContent = '';
//       console.log(password, repassword);
//     };

//   if (!checkBox.checked){
//     console.log('checkbox is not checked');
//     labelbox.style.color = 'red';
//     return false;
//   } else {
//     labelbox.style.color = 'black';
//   };
// };
const form = document.forms[0];
const submit = document.querySelector(".submitButton");
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.js-input-pass');
const repasswordInput = document.querySelector('.js-input-rePass');
const checkBox = document.querySelector('.js-input-checkBox');
const radioButtons = document.querySelectorAll('.js-input-radio')
let labelbox = document.querySelector('.labelBox');

const inputName = form.elements.firstName;

// inputName.addEventListener('input', function(event){
// 	console.log(event.target.validity);
// 	if (!inputName.validity.valid){
// 		inputName.classList.add("error");
// 		nameError.textContent = inputName.validationMessage;
// 	} else{
// 		inputName.classList.remove("error");
// 		nameError.textContent = '';
// 	}
// });
let errors = [];
function checkValidity(input){
	let validity = input.validity;

	if (validity.valueMissing){
		errors.push('поле не заполнено');
	};
};
function checkAll(){
	errors = [];
	const allInputs = document.querySelectorAll('input');

	for (let input of allInputs){
		checkValidity(input);
	}
	console.log(errors);
	document.querySelector('.error-message').innerHTML = errors.join('. <br />');
}


form.addEventListener('submit', function(evt){
	evt.preventDefault();
	checkAll();
})
