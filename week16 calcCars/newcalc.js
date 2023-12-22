const formCar = document.forms[0];
const selectMarks = document.getElementById("marks");
const selectModels = document.getElementById("models");
const totalPrice = document.querySelector('.price');
const vehicleStatus = document.getElementsByName("vehicleStatus");
const fuelOptions = document.querySelectorAll('input[name="fuel"]');
const carOwners = document.getElementsByName('owners');
const finalBtn = document.querySelector('.submit');
const paymentMethod = document.getElementsByName('payment');
const rangeInput = document.getElementById('range1'); // Получаем элемент input
const output = document.getElementById('valueOutput'); // Получаем элемент output
let basePrice = 1000000;
let fuel = 0;
let isNewCar = 0;
let owners = 0;

const rangeStep = 0.1; // Шаг диапазона
let mid = rangeInput.value = (3.5 + 1.1) / 2;
output.textContent = mid + " литра";
rangeInput.addEventListener('input', function() {
  const value = +rangeInput.value ; // Преобразуем значение диапазона в соответствующее число
  output.textContent = value + ' литра'; // Выводим значение в элемент output
	if (value === 3.5) {
		console.log('maximum');
	} if (value === 1.1) {
		console.log('minimum');
	};
});

selectMarks.addEventListener('change', function(event){
	if (selectMarks.value === ''){
		totalPrice.innerHTML = 'Выберите автомобиль';
	} else if (selectMarks.value === 'Reno'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		const renoCars = [
			{name: 'Kaptur', price: 1300000}, 
			{name: 'Duster', price: 1000000},
			{name: 'Logan', price: 1100000},
			{name: 'Sandero', price: 1200000}
		];
		for (let i = 0 ; i < renoCars.length; i++){
			const renoOptions = document.createElement('option');
			renoOptions.textContent = renoCars[i].name;
			renoOptions.value = renoCars[i].price;
			selectModels.appendChild(renoOptions);
		};
	} else if (selectMarks.value === 'Opel'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		const opelCars = [
			{name: 'Astra', price: 1300000}, 
			{name: 'Corsa', price: 1000000},
			{name: 'Mokka', price: 1100000},
			{name: 'Antara', price: 1200000}
		];
		for (let i = 0 ; i < opelCars.length; i++){
			const opelOptions = document.createElement('option');
			opelOptions.textContent = opelCars[i].name;
			opelOptions.value = opelCars[i].price;
			selectModels.appendChild(opelOptions);
		};
	} else if (selectMarks.value === 'Mazda'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		const mazdaCars = [
			{name: 'MX-5', price: 1300000}, 
			{name: 'CX-9', price: 1000000},
			{name: 'CX-7', price: 1100000},
			{name: 'Mazda 3', price: 1200000}
		];
		for (let i = 0 ; i < mazdaCars.length; i++){
			const mazdaOptions = document.createElement('option');
			mazdaOptions.textContent = mazdaCars[i].name;
			mazdaOptions.value = mazdaCars[i].price;
			selectModels.appendChild(mazdaOptions);
		};
	} else if (selectMarks.value === 'Jaguar'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		const JaguarCars = [
			{name: 'FX', price: 1300000}, 
			{name: 'XFR', price: 1000000},
			{name: 'X-type', price: 1100000},
			{name: 'XKR', price: 1200000}
		];
		for (let i = 0 ; i < JaguarCars.length; i++){
			const JaguarOptions = document.createElement('option');
			JaguarOptions.textContent = JaguarCars[i].name;
			JaguarOptions.value = JaguarCars[i].price;
			selectModels.appendChild(JaguarOptions);
		};
	};
	formCar.addEventListener('submit', function(event){
		event.preventDefault();
	
		fuelOptions.forEach(function(radio){
			if(radio.checked){
				if (radio.value === 'gasoline'){
					console.log('Бензин');
					fuel = basePrice * 0.1;
				} else if (radio.value === 'dizel'){
					console.log('Дизель');
					fuel = basePrice * 0.2;
				} else if (radio.value === 'gas'){
					console.log('Газ');
					fuel = basePrice * 0.15;
				} else if (radio.value === 'electricity'){
					console.log('Электричество');
					fuel = basePrice * 0.33;
				};
			};
		});
		
		vehicleStatus.forEach(function(radio){
			if(radio.checked){
				if (radio.value === 'newCar'){
					console.log('Новый');
					isNewCar = basePrice * 0.7;
				} else if (radio.value === 'oldCar'){
					console.log('Подержанный');
					isNewCar = basePrice * 0.41;
				};
			};
		});
		const ownersError = document.querySelector('.ownersError');
		
		carOwners.forEach(function(radio){
			if(radio.checked){
				if (radio.value === '1-2 owners'){
					console.log('1-2 владельца');
					owners =  basePrice * .4;
				} else if (radio.value === '3 more'){
					console.log('более 3-х владельцев');
					owners =  basePrice * .2;
				};
			};
		});
		let selectedPaymentMethod;
		paymentMethod.forEach(function(radio){
		if(radio.checked){
			selectedPaymentMethod = radio.value; // Store the selected payment method value
			if (radio.value === 'Картой'){
				console.log('Картой');
			} else if (radio.value === 'Наличными'){
				console.log('наличные');
			} else if (radio.value === 'Счет на юридическое лицо'){
				console.log('юр.лицо');
			}
		}
	});
	let FinalPrice =  +selectModels.value + +fuel + +isNewCar + +owners + (+rangeInput.value * 150000);
		totalPrice.innerHTML = `Цена автомобиля по вашим параметрам составит ${FinalPrice} </br>
		Оплата будет производиться: ${selectedPaymentMethod}`;
	});
	});
