const formCar = document.forms[0];
const selectMarks = document.getElementById("marks");
const selectModels = document.getElementById("models");
const totalPrice = document.querySelector('.price');
const vehicleStatus = document.getElementsByName("vehicleStatus");
const fuelOptions = document.querySelectorAll('input[name="fuel"]');
const carOwners = document.getElementsByName('owners');
const finalBtn = document.querySelector('.submit');
const rangeInput = document.getElementById('range1'); // Получаем элемент input
const output = document.getElementById('valueOutput'); // Получаем элемент output
// console.log(vehicleStatus);
let fullPrice = 0;


const rangeStep = 0.1; // Шаг диапазона
let mid = rangeInput.value = (3.5 + 1.1) / 2;
output.textContent = mid + " литра";
rangeInput.addEventListener('input', function() {
  const value = +rangeInput.value ; // Преобразуем значение диапазона в соответствующее число
  output.textContent = value + ' литра'; // Выводим значение в элемент output
  // console.log(value); // Выводим значение в консоль
	if (value === 3.5) {
		console.log('maximum');
	} if (value === 1.1) {
		console.log('minimum');
	};
});


finalBtn.addEventListener('click', function(){
	fuelOptions.forEach(function(radio){
		if(radio.checked){
			if (radio.value === 'gasoline'){
				console.log('Бензин');
				fullPrice = 0;
				fullPrice += 100;
			} else if (radio.value === 'dizel'){
				console.log('Дизель');
				fullPrice = 0;
				fullPrice += 200;
			} else if (radio.value === 'gas'){
				console.log('Газ');
				fullPrice = 0;
				fullPrice += 300;
			} else if (radio.value === 'electricity'){
				console.log('Электричество');
				fullPrice = 0;
				fullPrice += 400;
			};
			console.log(fullPrice);
		};
	});
	vehicleStatus.forEach(function(radio){
		if(radio.checked){
			if (radio.value === 'newCar'){
				console.log('Новый');
				fullPrice = 0;
				fullPrice += 100;
			} else if (radio.value === 'oldCar'){
				console.log('Подержанный');
				fullPrice = 0;
				fullPrice += 200;
			};
		};
	});
	carOwners.forEach(function(radio){
		if(radio.checked){
			if (radio.value === '1-2 owners'){
				console.log('1-2 владельца');
				fullPrice = 0;
				fullPrice += 100;
			} else if (radio.value === '3 more'){
				console.log('более 3-х владельцев');
				fullPrice = 0;
				fullPrice += 200;
			};
		};
	})
});

function selectModel(){
	if (selectMarks.value === 'Reno'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		let renoCars = ['Kaptur', 'Duster', 'Logan', 'Sandero'];
		let renoPrice = [1000000, 1100000, 1200000, 1300000];
		for (let i = 0 ; i < renoCars.length; i++){
			let renoOptions = document.createElement('option');
			renoOptions.textContent = renoCars[i];
			selectModels.appendChild(renoOptions);
		};
	} else if (selectMarks.value === 'Opel'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		let opelCars = ['Astra', 'Corsa', 'Mokka', 'Antara'];
		let opelPrice = [1000000, 1100000, 1200000, 1300000];
		for (let i = 0 ; i < opelCars.length; i++){
			let opelOptions = document.createElement('option');
			opelOptions.textContent = opelCars[i];
			selectModels.appendChild(opelOptions);
		};
	} else if (selectMarks.value === 'Mazda'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		let mazdaCars = ['MX-5', 'CX-9', 'CX-7', 'Mazda 3'];
		let mazdaPrice = [1000000, 1100000, 1200000, 1300000];
		for (let i = 0 ; i < mazdaCars.length; i++){
			let mazdaOptions = document.createElement('option');
			mazdaOptions.textContent = mazdaCars[i];
			selectModels.appendChild(mazdaOptions);
		};
	} else if (selectMarks.value === 'Jaguar'){
		selectModels.disabled = false;
		selectModels.innerHTML = "";
		let JaguarCars = ['FX', 'XFR', 'X-type', 'XKR'];
		let JaguarPrice = [1000000, 1100000, 1200000, 1300000];
		for (let i = 0 ; i < JaguarCars.length; i++){
			let JaguarOptions = document.createElement('option');
			JaguarOptions.textContent = JaguarCars[i];
			selectModels.appendChild(JaguarOptions);
		};
	};
};

selectMarks.addEventListener('change', function(event){
	selectModel();
});


formCar.addEventListener('submit', function(event){
	event.preventDefault();
});





















// const cars = {
// 	opel : {
// 		astra : 1000000
// 	}
// }
// console.log(cars.opel.astra);

// const cars = [
// 	[["Kaptur", 1000000], "Duster"],
	// ["Astra", Corsa, Mokka, Antara]
// ];

// console.log(cars[0][0][1]);

