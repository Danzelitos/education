const formCar = document.forms[0];
const selectMarks = document.getElementById("marks");
// let options = selectMarks.options[selectMarks.selectedIndex].text;
console.log(selectMarks);
selectMarks.addEventListener('change', function(event){
	console.log(event.target.value);

})
// const cars = {
// 	opel : {
// 		astra : 1000000
// 	}
// }
// console.log(cars.opel.astra);

const cars = [
	[["Kaptur", 1000000], "Duster"],
	// ["Astra", Corsa, Mokka, Antara]
]

console.log(cars[0][0][1]);

