//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const buttonEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");
// buttonEl.addEventListener("click", buttonClick);
// function buttonClick() {
//   console.log(inputEl.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const inputOneEl = document.querySelector(`#leftSwapInput`);
// const inputTwoEl = document.querySelector(`#rightSwapInput`);
// const btnEl = document.querySelector(`#swapButton`);

// btnEl.addEventListener(`click`, function () {
//   const inputOneElValue = inputOneEl.value;
//   inputOneEl.value = inputTwoEl.value;
//   inputTwoEl.value = inputOneElValue;
// });

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const buttonEl = document.querySelector("#passwordButton");
// const inputEl = document.querySelector("#passwordInput");

// buttonEl.addEventListener("click", madeClickButton);

// function madeClickButton() {
//   if (buttonEl.textContent === "Розкрити") {
//     inputEl.setAttribute("type", "text");
//     buttonEl.textContent = "Приховати";
//     return;
//   }
//   inputEl.setAttribute("type", "password");
//   buttonEl.textContent = "Розкрити";
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

// const decreaseBtnEl = document.querySelector("#decrease");
// const increaseBtnEl = document.querySelector("#increase");
// const boxEl = document.querySelector("#box");
// decreaseBtnEl.addEventListener("click", function () {
//   const size = parseInt(getComputedStyle(boxEl).width);
//   boxEl.style.width = size - 10 + "px";
//   boxEl.style.height = size - 10 + "px";
// });
// increaseBtnEl.addEventListener("click", function () {
//   const size = parseInt(getComputedStyle(boxEl).width);
//   boxEl.style.width = size + 10 + "px";
//   boxEl.style.height = size + 10 + "px";
// });

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

addEventListener("click", (event) => {
  if (event.target.id === "place") {
    console.log(true);
  } else {
    console.log(false);
  }
});

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
