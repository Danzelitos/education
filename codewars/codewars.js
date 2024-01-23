// 1. highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function highAndLow(numbers){
//   let numbArray = [];
// 	let numbNew = numbers.split(' ');
// 	for (let index = 0; index < numbNew.length; index++) {
// 		const element = numbNew[index];
// 		numbArray.push(parseInt(element));
// 	}
// 	return Math.max(...numbArray).toString() + ' ' + Math.min(...numbArray).toString();
// }

// console.log(highAndLow("1 2 3"));

// 2. There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   let array = [...classPoints, yourPoints];
//   let sum = 0;
//   for (let i = 0; i<classPoints.length; i++){
//     sum += classPoints[i];
//   }
// 	sum += yourPoints;
// 	sum = sum / array.length;
//   if (sum <= yourPoints){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(betterThanAverage([2,3], 5));



// In this kata you will create a function that takes a list of non-negative integers and 
// strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//   // Return a new array with the strings filtered out
// for (const key in l) {
// 		if (typeof(l[key])===`number`) {
// 			console.log(l[key]);
// 		}
// }

// };



function filter_list(l) {
  // Return a new array with the strings filtered out
  let arr = [];
  for (let i=0; i<l.length; i++){
  if (typeof(l[i]) === `number`){
    arr.push(l[i]);
    };
  }

  return arr; 
}


filter_list([1,'a','b',0,15]);
  // function sorted(num1, num2){
  //   return num1 - num2;
  // }
  // return arr.sort(sorted)