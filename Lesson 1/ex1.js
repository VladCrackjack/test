`use strict`

// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }

// var rand = new Person("Rand McNally", 33, "M");
// var ken = new Person("Ken Jones", 39, "M");

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }

// var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
// var car2 = new Car('Nissan', '300ZT', 1992, ken);

// console.log(car2.owner.name,car2.owner.age);


// let text = prompt('How old you?', '');

// if (text == 28) {
//     alert('Thats right');
//     alert('Good boy');
// } else if (text == 36) {
//     alert('Nice girl');
// } else  {
//     alert('good');
// }


// let age = prompt('How old you');

// let massage = (age == 18) ? 'Hello':
//     (age < 18) ? 'Hi':
//     (age < 100) ? 'Good morning':
//     'So old ass';

// alert(massage);


// let lang = prompt('Какое «официальное» название JavaScript?', '');

// if (lang == 'ECMAScript') {
//     alert('Верно')
// } else {
//     alert('Не знаете? ECMAScript!')
// }


// let a = +prompt('Enter number', '');
// let b = +prompt('Enter number', '');

// let result = (a + b < 4) ? 'Malo':
//     (a + b > 4) ? 'Mnogo':
//     '';
// alert(result);


// let a = prompt('Enter number', '');
// let b = (a >= 1) ? 1 :
//     (a >= 0) ? 0: -1;
//     alert(b)

// let now = new Date();
// if (now < 9 || now > 18) {
//     alert('Close')
// } else {
//     alert('open')
// }


// let login = prompt('Введите логин');

// if (login == 'Admin') {
//     let password = prompt('Введите пароль');

//         if (password == '123') {
//             alert('Приве, БОСС');
//         } else if (password == '' || password === null) {
//             alert('Отменено');
//         } else {
//             alert('Неверный пароль');
//         }
// } else if (login == '' || login === null) {
//     alert('Отменено');
// } else {
//     alert('I dont know you');
// }

// let age = +prompt('Введите возраст', '');
// let massage = age;
// if (age >= 14 && age <= 90) {
//     massage = 'Хорошо';
// } else if (age > 0 && age < 14 || age > 90) {
//     massage = 'Плохо';
// } else if (age == '' || age == null) {
//     massage = 'Отмена';
// } else {
//     massage = 'Вы ввели текст';
// }

// alert(massage);

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!`);
// }


// let j = 0;
// while (j < 3) {
//         alert(`number ${j}!`);
//         j++;
// }


// let num;
// do {
//     num = prompt('Enter number', '0');
// } while (num < 100 && num);


// let n = 10;
// nextPrime:
// for (i = 2; i < n; i++){
//     for (j = 2; j < i; j++){
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }

// let maxNumber = prompt('Введите максимальное число', '');

// mother: for (let currentNumber = 2; currentNumber <= maxNumber; currentNumber++){

// for(let counter = currentNumber - 1; counter >= 1; counter--){
// if ((counter != 1) && (currentNumber % counter == 0)) continue mother;

// }
// alert(currentNumber);
// }


// let brows = prompt("Enter your browser", '');
//     switch (brows) {
//         case 'Edge':
//             alert("You've got the Edge!");
//             break;
//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari':
//         case 'Opera':
//             alert('Okay we support these browsers too');
//             break;
//         default:
//             alert('We hope that this page looks ok!');
//     }

// const num = prompt('Введите число между 0 и 3', '');
//     switch (true) {
//         case num == 0:
//             alert('Вы ввели число 0');
//             break;
//         case num == 1:
//             alert('Вы ввели число 1');
//             break;
//         case num == 2:
//         case num == 3:
//             alert('Вы ввели число 2, а может и 3');
//             break;
//         case num >= 4:
//             alert('Вы ввели число больше 3');
//             break;
//         case(num !== true) :
//             alert('Вы ничего не ввели');
//             break;
//     }


// let num1 = prompt('Enter first number', '');
// let num2 = prompt('Enter second number', '');
// if((num1 && num2) < 1) {
//     alert('enter natural number');
// } else {
// function pow() {
//     let sum =(num1 ** num2);
//     alert(sum);
//     }pow();
// }


// let age = prompt('How old you?', '');
//     let welcome = (age < 18) ?
//     () => alert('Hi!') :
//     () => alert('Hello');
// welcome();