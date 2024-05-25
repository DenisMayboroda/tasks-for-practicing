/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

 let answer = prompt("Яка офіційна назва JavaScript?")
 console.log (answer)

 function cheakAnswer(string) {
    if (string === "ECMAScript") {
        alert("Вірно!")
    } else {
        alert("Не знаєте? ECMAScript!")
    }
 }

cheakAnswer(answer)
