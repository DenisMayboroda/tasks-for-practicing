/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

//  let answer = prompt("Яка офіційна назва JavaScript?")
//  console.log (answer)

//  function cheakAnswer(string) {
//     if (string === "ECMAScript") {
//         alert("Вірно!")
//     } else {
//         alert("Не знаєте? ECMAScript!")
//     }
//  }

// cheakAnswer(answer)

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */
// const userNumber = prompt("Введіть кількість хвилин")

// const hours = String(Math.floor(userNumber / 60)).padStart(2, 0);
// console.log(hours)
// const minutes = String(userNumber % 60).padStart(2, 0);
// console.log(minutes)
// console.log(`${hours}:${minutes}`)

/**
*? Напишіть код, який питає
*? логін за допомогою prompt та логує результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Admin",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Canceled"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевірять так:
*? Якщо введено пароль "Password",
*? то вивести рядок "Вітаю"
*? інакше виводить рядок "Невірний пароль!"
 */

// const userLogin = prompt("Enter login!");
// if (userLogin === "Admin") {
//   const userPassword = prompt("Enter password!");
//   if (userPassword === "Password") {
//     alert("Вітаю");
//   } else {
//     alert("Невірний пароль!");
//   }
//   // } else if (userLogin === "" || userLogin === null) {
// } else if (!userLogin) {
//   alert("Canceled");
// } else {
//   alert("Я вас не знаю");
// }

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.*/

// let userNumber = prompt("Enter number");
// let total = 0;
// while (userNumber !== null) {
//   total += Number(userNumber);

//   userNumber = prompt("Enter number");

// }

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */

//  let min = 59;
// if (min >=0 && min <=15) {
//   console.log("Перша чверть");
// } else if (min >=16 && min <=30) {
//   console.log("Друга чверть");
// } else if (min >=31 && min <=45) {
//   console.log("Третя чверть");
// } else {
//   console.log("Четверта чверть");
// }

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);
// const keys = Object.keys(user)
// console.log(keys);

// for (const key of keys)
// {
//   console.log(`${key}:${user[key]}`);
// }

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function calcTotalSalery(obj) {
//   const velues = Object.values(obj)
//   console.log(velues)
//   let sum = 0
//   for (let velue of velues) {
//     sum += velue
//   }
//   return sum
// }

// const resalt = calcTotalSalery(someObj)
// console.log(resalt)

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stoneName) {
//   for (const stone of someStones) {

//     if (stone.name === stoneName) {

//       return stone.price * stone.quantity;
//     }
//   }
//   return 0;
// }

// const totalPrice = calcTotalPrice(stones, "rffgfh");
// console.log(totalPrice);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];
// function delateElement(array, element) {
//   const copyArray = array.slice()
//   const index = copyArray.indexOf(element)
//   if (index !== -1) {
//     copyArray.splice(index, 1)
//   }
//   copyArray.reverse()
//   return copyArray.join(" ")
// }

// console.log(delateElement(arr, "f"))
// console.log(arr)

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function calcDiscountFruits(arr) {
//   const newArray = [];

//   let id = 1;

//   for (const fruit of arr) {
//     newArray.push({
//       ...fruit,
//       price: fruit.price * 0.8,
//       id,
//     });
//     id++;
//   }

//   return newArray;
// }

// console.log(calcDiscountFruits(fruits));

// console.log(fruits);

// //TODO:==============================================
// /**
//  *? Поверніть об'єкт, в якому вказано кількість тегів.
//  *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
//  */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// function calcTags(array) {
//   const tags = array.flatMap((element) => element.tags);
//   console.log(tags);
//   return tags.reduce(
//     (acc, item) => ({ ...acc, [item]: acc[item] ? acc[item] + 1 : 1 }),
//     {}
//   );
// }

// console.log(calcTags(tweets));

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function discountFruits(array) {
  return array.map((item, index) => ({
    ...item,
    price: item.price * 0.8,
    id: index + 1,
  }));
}

console.log(discountFruits(fruits));
