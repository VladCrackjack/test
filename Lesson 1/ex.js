`use strict`


// let a = '8';
//     b = 8;

// let result = a + b;
// if (typeof result == 'string') {

//     console.log('One of the data is string, so whole expression is string;' + result );

// } else {

//     console.log('Undefined data');

// }

// for (a = 1, b = 3, c = a*b, a < 10, a++) {
//     console.log(a)
// }





// let num = prompt('Введите число', 0);

// if (num > 1) {
//     alert( 1 );
// } else if (num < 0) {
//     alert( -1 );
// } else {
//     alert( 0 );
// }

// let result = (login == 'Employer') ? 'Hello' :
//     (login == 'Director') ? 'Goodmorning':
//     (login == '') ? 'Login out':
//     '';


// let a = 2 + 2;
// switch (a) {
//     case 3 :
//         alert('Маловато');
//         break;
//     case 4 :
//         alert('В точку');  
//         break;
//     case 5 :
//         alert('Перебор');
//         break;
//     default : 
//         alert('Нет таких значений');
// }

// let arg = prompt('Введите число?');
// switch (arg) {
//     case '0':
//     case '1':
//         alert('Один или Ноль');
//         break;

//     case '2':
//         alert('Два');
//         break;
    
//     case 3 :
//         alert('Non expression');
//         break;

//     default :
//         alert('Неизвестное значение');
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


// function showMessage() {
//     let message = 'Hi! I am JS';
//     alert(message);
// }

// showMessage();


// let userName = 'Vlad';
// function showMessage() {
//     let userName = 'Peter';
//     let message = "Hi, " + userName;
//     alert(message);
// }
// alert(userName);

// showMessage();

// alert(userName);

// let ask = prompt('Enter name', '');
// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }
// let from = ask;
// showMessage(from, 'Hello');
// alert(from);


// function checkAge (age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родитель разрешили?');
//     }
// }
// let age = prompt('Сколько вам лет', '');

// if ( checkAge(age) ) {
//     alert('Доступ открыт');
// } else {
//     alert('Доступ закрыт');
// }


// let n = 10;
// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // простое
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }


// function checkAge(age){
//     (age > 18) ? true :
//     confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || return confirm();   
// }

// let min1 = prompt('Enter first number', '');
// let min2 = prompt('Enter second number', '');
// function checkNum() {
//     if (min1 < min2) {
//         alert(min1);
//     } else {
//         alert(min2);
//     }
// }
// checkNum();



// function pow(x, n) {
//     return (x > 0 && n > 0) ? x ** n : "Только натуральные числа";
// }

// alert(pow(+prompt("Введите первое число"), +prompt("Введите второе число")));


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

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "???",
//     function() { alert('Approove'); },
//     function() { alert('Canceled'); },
// );


// let age = prompt('How old you?', '');

// let welcome = (age < 18) ?
//     function() { alert('Hi'); } :
//     function() { alert('Hello'); } ;

// welcome();


// let age = prompt('How old you?', '');
//     let welcome = (age < 18) ?
//     () => alert('Hi!') :
//     () => alert('Hello');
// welcome();


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes() ;
//     else no() ;
// }
// ask (
//     "Are You sure???" ,
//     () => alert("Вы согласились.") ,
//     () => alert("Вы отменили выполнение.") 
// );


// let sum = () => alert('Hi');
// sum();

// function spinWords(str){
//     return str.split("").reverse().join("");
//   }
//  alert (spinWords("Hello, world"));


// v = prompt('Error', '');
// v == 1 ? alert('ok') : alert('no');


let num = (a, b) => {
  let result = a + b;
  let result2 = a - b;
  let result3 = a * b;
  let result4 = a / b;
  return [result, result2, result3, result4];
}
alert (num(10, 5));