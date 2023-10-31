const cities = ['Moscow', 'Saint-Pitersburg', 'Kazan', 'Dagestan', 'Sochi'];
let tempratures = [];
let i = 0;
while (i < cities.length) {
  temprat = prompt(`enter the tempratures for citi: ${cities[i]}`);
  // console.log(temprat);
  i++;
  tempratures.push(Number(temprat));
}
const div = document.querySelector('.block')
// console.log(tempratures);
const list = document.createElement('ul');
for (let i = 0; i < cities.length; i++){
  const item = document.createElement('li');
  item.textContent = `Температура в: ${cities[i]}: ${tempratures[i]}°C`;
  list.appendChild(item);
}

div.append(list);

let maxN = tempratures[0];
let minN = tempratures[0];
// let maximus = Math.max(...tempratures);
// let minimum = Math.min(...tempratures);
// console.log(maximus , minimum);
for (let i = 0; i < tempratures.length; i++){
if (tempratures[i] > maxN) {
 maxN = tempratures[i]
}
if (tempratures[i] < minN) {
  minN = tempratures[i]
 }
}

console.log(maxN, minN);
const addAbcd = document.querySelector('.abcd');
const p = document.createElement('p');
p.innerHTML = `Максимальная температура: ${maxN}°C, </br>
Минимальная температура: ${minN}°C`
// p.textContent = `Максимальная температура: ${maxN}°C,
//                  Минимальная температура: ${minN}°C`;
addAbcd.append(p)
// const parBlock = document.createElement('div');
// const par = document.querySelectorAll("p");
// for (let el of par){
// el.textContent = `Максимальная температура: ${maxN}, Минимальная температура: ${minN}`;

// }
