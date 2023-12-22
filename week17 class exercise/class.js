const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];


class Transport {
	constructor(type, price, brand){
		this.type = type;
		this.price = price;
		this.brand = brand;
		this.getPrice();
		this.getInfo();
	};
	getInfo(){
		return this.type + ', '+ this.brand; 
		// this.container = document.querySelector('.container');
		// this.info = document.querySelector('.list');
		// data.forEach((item) =>{
		// 	const div = document.createElement('div');
		// 	div.style.borderBottom = '1px solid red'
		// 	div.innerHTML = `
		// 	<li>${item.brand}</li>
		// 	<li>${item.type}</li>
		// 	`;
		// 	this.info.append(div);
		// });
	};
	getPrice(){
		return this.price;
	// 	this.diver = document.createElement('div');
	// 	data.forEach((item)=>{
	// 		const span = document.createElement('span');
	// 		span.textContent = item.price;
	// 		this.diver.append(span);
	// 	})
	}
};
for (let i=0; i < data.length; i++){
const transport = new Transport(data[i].type, data[i].price, data[i].brand);
console.log(transport.getInfo());
console.log(transport.getPrice());
}
class Car extends Transport {
	constructor(type, price, brand){
		super(type, price, brand)
	};
	getDoorsCount(){
		return this.doors;
	}
};
for (let i=0; i < data.length; i++){
			if (data[i].type === 'car'){
				console.log(`У автомобиля ${data[i].brand}: ${data[i].doors} двери`);
			
const car = new Car(data[i].type, data[i].price, data[i].brand);
// console.log(car.getDoorsCount());
		}
};
class Bike extends Transport {
	constructor(type, price, brand){
		super(type, price, brand)
	};
	getMaxSpeed(){
		return this.maxSpeed;
	}
};

for (let i=0; i < data.length; i++){
	if (data[i].type === 'bike'){
		console.log(`Максимальная скорость мотоцикла ${data[i].brand}: ${data[i].maxSpeed} км/ч`);
	
const bike = new Bike(data[i].type, data[i].price, data[i].brand);
// console.log(bike.getMaxSpeed());
}
};


// this.div = document.createElement('div');
// this.div.textContent = data[0].type;
// document.body.appendChild(this.div);


// this.fullPrice = document.createElement('span');
// this.fullPrice.textContent = data[0].price;
// this.image = document.createElement('img');
// this.image.setAttribute('src', data[0].image);
// this.image.style.width = "200px";
// this.image.style.height = "200px";
// document.body.appendChild(this.image);
// document.body.appendChild(this.fullPrice);

