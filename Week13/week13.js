//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = new Date()
console.log(currentYear.getFullYear());

//Задание 3
// Создайте переменную  и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = new Date();
console.log(currentMonth.getMonth());
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = new Date();
console.log(currentDay.getDate());
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(2023, 0, 27);
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(currentDay);
futureDate.setDate(currentDate.getDate()+10);
futureDate.setMonth(currentDate.getMonth()+1);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let differenceDate = futureDate - currentDay;
console.log(Math.ceil(differenceDate/1000/60/60/24));
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date(currentDay);
pastDate.setDate(currentDate.getDate()- 5);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let pastDiffDays = currentDate - pastDate;
console.log(pastDiffDays/1000/60/60/24);
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(currentDay);
nextWeek.setDate(currentDate.getDate()+7);
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date(currentYear);
futureYear.setFullYear(currentYear.getFullYear()+5);
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(futureYear.getFullYear(), 0, 27);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let diff = futureYear - currentYear;
console.log(diff/1000/60/60/24/30/12);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(strDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(+strDate);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = new Date(Date.parse('2023/06/15'));
if (date == NaN) {
  console.log('Неправильный формат даты');
}else {
console.log(date);
}
//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number >= 0) {
  console.log(number + '- число положительное');
} else {
  console.log("число отрицательное");
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
// if (number % 2 == 0) {
//   console.log("четное");
// } else {
//   console.log("нечетное");
// }
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
// if (number % 3 == 0) {
//   console.log("кратное");
// } else {
//   console.log("некратное");
// }
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
// let numStr = number.toString().length;
// console.log(numStr);
// if (numStr == 1) {
//   console.log("однозначное");
// } else {
//   console.log("не однозначное");
// }
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
let numStr = number.toString().length;
// console.log(numStr);
// if (numStr == 2) {
//   console.log("2значное");
// } else {
//   console.log("не 2значное");
// }
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
  console.log(number + '- число положительное');
} else {
  console.log("число отрицательное");
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0 || number % 7 == 0) {
  console.log("число кратно 5 или 7");
} else {
  console.log("не кратно 5 или 7");
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
  console.log(number + '- число отрицательное');
} else {
  console.log("число положительное");
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >= 0 && numStr == 3){
 console.log("correct");
} else {
  console.log('not correct');
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let days = '';
switch(new Date().getDay()){
  case 0:
    days = 'вскр';
    break;
  case 1:
    days = 'пон';
    break;
  case 2:
    days = 'втр';
    break;
  case 3:
    days = 'среда';
    break;
  case 4:
    days = 'четв';
    break;
  case 5:
    days = 'пятн';
    break;
  case 6:
    days = 'субб';
    break;
    default:
      days = 'unknown'
}
console.log(days);
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
// let direction = 'N';
// let fullName;

// switch (direction[0]) {
//   case fullName = "West":
//     break;
//   case fullName = "North":
//     break;
//   case fullName = "South":
//     break;
//   case fullName = "East":
//     break;
// }
// console.log(direction);
