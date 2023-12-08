// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы
class Worker {
	constructor(name, surname){
		this.name = name;
		this.surname = surname;
	};
	fullName(){
		return this.surname + ', ' + this.name;
	}
};

//Ваш код

//Создаём объекта на основе класса Worker
const worker = new Worker('Danil', 'Samukhin');
//Выводим созданный объект в консоль
console.log(worker);

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName

//Ваш код

//Создаём объект worker2 на основе класса Worker
const worker2 = new Worker('Имя', 'Фамилия');
//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
console.log(worker2.fullName());

//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.
class Car {
	constructor(brand, model, year){
		this.brand = brand;
		this.model = model;
		this.year = year;
	};
	getAge(){
		return 2023 - +this.year;
	}
};
const car = new Car('BMW', 'X6', 2021);
//Ваш код
console.log(car);
//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

//Ваш код

//Создаём объект car2 на основе класса Car
const car2 = new Car('Brand', 'Model', 2010);
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log(car2.getAge());

//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	};
	getArea(){
		return this.width * this.height;
	}
};
//Ваш код
const rectangle = new Rectangle(6,3);
console.log(rectangle);
//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

//Ваш код
const rectangle2 = new Rectangle(5, 7);
console.log(rectangle2.getArea());
//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.
class Circle{
	constructor(radius){
		this.radius = radius;
	};
	calculateArea(){
		return (this.radius**2)*3.14;
	}
};
//Ваш код
const circle = new Circle(5);
console.log(circle);
//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.

//Ваш код
const circle2 = new Circle(3);
console.log(circle2.calculateArea());
//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.
class Student{
	constructor(name,age,grade){
		this.name = name;
		this.age = age;
		this.grade = grade;
	};
	increaseGrade(){
		return this.grade + 1;
	}
}
//Ваш код
const student = new Student('alex', 16, 3);
console.log(student);
//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.

//Ваш код
const student2 = new Student('ser', 16, 4);
console.log(student2.increaseGrade());
//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.
class Book {
	constructor(title, author, year){
		this.title = title;
		this.author = author;
		this.year = year;
	};
	getTitleAndAuthor(){
		return this.title+ '-' + this.author;
	}
};
//Ваш код
const book = new Book('GAZa', 'Petr Tolstoy', 1901);
console.log(book);
//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.

//Ваш код
const book2 = new Book('GAZa ', ' Petr Tolstoy', 1901);
console.log(book2.getTitleAndAuthor());
//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.
// class BankAccount{
// 	constructor(accountNumber, balance){
// 		this.accountNumber = accountNumber;
// 		this.balance = balance;
// 	};
// 	deposit(){
// 		return this.balance + +prompt('enter the number:');
// 	}
// }
//Ваш код
// const account = new BankAccount(1, 100);
// console.log(account);
//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

//Ваш код
// const account2 = new BankAccount(2, 500);
// console.log(account2.deposit());
//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.

class BankAccount {
	constructor(balance) {
		this.balance = balance;
	}

	withdraw(amount) {
		if (amount <= this.balance) {
			//Уменьшите баланс на заданную сумму
			return this.balance - amount;
		} else {
			//Выводите в консоль сообщение
			console.log('недостаточно средств');
		}
	}
}
//Создайте объект account3 на основе класса BankAccount
//Попытайтесь снять сумму, превышающую баланс
const account3 = new BankAccount(500);
console.log(account3.withdraw(400));
//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.
class Animal {
	constructor(name, sound){
		this.name = name;
		this.sound = sound;
	};
	makeSound(){
		console.log(this.sound);
	}
}
//Ваш код
const animal = new Animal('Camel', 'brrr...');
console.log(animal);
//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.

//Ваш код
const animal2 = new Animal('Raccon', 'hrrrr...')
console.log(animal2.makeSound());
//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.
// class Point {
// 	constructor(x, y){
// 		this.x = x;
// 		this.y = y;
// 	}
// }
// //Ваш код
// const point = new Point(51, 82);
// console.log(point);
//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

//Ваш код
const point2 = new Point(15, 23);
console.log(point2.getDistance());
//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.
class Calculator{
	constructor(a, b){
		this.a = a;
		this.b = b;
		};
		add(){
			return this.a + this.b;
		};
		subtract(){
			return this.a -this.b;
		};
		multiply(){
			return this.a * this.b;
		};
		divide(){
			return this.a / this.b
		};
}
//Ваш код
const calculator = new Calculator(15, 34);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.
// class Person {
// 	constructor(name, age, city){
// 		this.name =name;
// 		this.age = age;
// 		this.city = city;
// 	};
// 	changeCity(){
// 		return prompt("Enter another city");
// 	}
// }
// //Ваш код
// const person = new Person('',24,'London');
// console.log(person);
//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

//Ваш код
// const person2 = new Person();
// console.log(person2.changeCity());
//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.
class Employee {
	constructor(name, position, salary){
		this.name = name;
		this.position = position;
		this.salary = salary;
	};
	calculateBonus(bonus){
		return this.salary+= this.salary * (bonus/100);
	}
}
//Ваш код
const employee = new Employee();
console.log(employee);
//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

//Ваш код
const employee2 = new Employee('Donn', "Front-end", 150000);
console.log(employee2.calculateBonus(10));
//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.
class Product{
	constructor(name, price , quntity){
		this.name = name;
		this.price = price;
		this.quntity = quntity;
	};
	calculateTotalPrice(){
		return this.price * this.quntity;
	}
}
//Ваш код
const product = new Product('salad', 50, 10);
console.log(product);
//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

//Ваш код
const product2 = new Product('tomato', 30, 6);
console.log(product2.calculateTotalPrice());

//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.
class Triangle{
	constructor(side1, side2, side3){
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	};
	calculatePerimeter(){
		return this.side1+this.side2+this.side3;
	}
}
//Ваш код
const triangle = new Triangle(1 , 3 , 5);
console.log(triangle);
//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.

//Ваш код
const triangle2 = new Triangle(3,4,5);
console.log(triangle2.calculatePerimeter());
//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.
class Square {
	constructor(side){
		this.side = side;
	};
	calculateArea(){
		return this.side*this.side;
	}
}
//Ваш код
const square = new Square(4);
console.log(square);
//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.
const square2 = new Square(5);
console.log(square2.calculateArea());
//Ваш код
