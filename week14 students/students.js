let grades = [];
let i = 0;
while (i <= 11) {
let random = Math.round(Math.random()*100);
grades.push(random);
i++;
}
console.log(grades); 

let sum = 0;
let more60 = 0;
let less60 = 0;

grades.forEach((item) => {
  sum += item;
  // if(item > 60 ) {
  //   more60 +=1;
  // } else {
  //   less60 +=1;
  // }
});
console.log('Сумма массива = ' + sum);
// console.log(more60);
// console.log(less60);
let average = sum / grades.length;
console.log('Ср. Арифметическое = '+average);
let max = Math.max(...grades);
let min = Math.min(...grades);
console.log("Макс. число массива = " + max);
console.log("Мин. число массива = " + min);

const positiveGrades = grades.filter(grades => grades >= 60);
const lostStudents = grades.length - positiveGrades.length;
const negativeGrades = grades.filter(grades=> grades <= 60);
console.log("Студентов с баллом > 60: " + positiveGrades.length);
console.log("Остальные студенты: " + lostStudents);
console.log("Студенты с баллом < 60: " + negativeGrades.length);

const wordGrades = grades.map(function(item){
  if (item > 80 ){
    return "A";
  } else if (item >= 60 && item < 80){
    return "B";
  } else if (item >= 40 && item < 60){
    return "C";
  } else if (item >= 20 && item < 40){
    return "D";
  } else {
    return "E";
  }
});
console.log(wordGrades);
